const START_INIT_WORKER = performance.now();

const loadScripts = (async () => {
  const versionParam = self.location.search;
  const util = await import('./util.js' + versionParam);
  const sudokuBuilder = await import('./sudoku_builder.js' + versionParam);
  Object.assign(self, util);
  Object.assign(self, sudokuBuilder);
})();

let workerSolver = null;
let workerSolverSetUpTime = 0;

const handleWorkerMethod = (method, payload) => {
  switch (method) {
    case 'init':
      const timer = new Timer();
      timer.runTimed(() => {
        const constraint = SudokuBuilder.resolveConstraint(payload.constraint);
        workerSolver = SudokuBuilder.build(constraint, payload.debugOptions);
      });
      workerSolverSetUpTime = timer.elapsedMs();

      if (payload.logUpdateFrequency) {
        workerSolver.setProgressCallback(sendState, payload.logUpdateFrequency);
      }

      return true;

    case 'solveAllPossibilities':
      return workerSolver.solveAllPossibilities();

    case 'validateLayout':
      return workerSolver.validateLayout();

    case 'nthSolution':
      return workerSolver.nthSolution(payload);

    case 'nthStep':
      return workerSolver.nthStep(...payload);

    case 'countSolutions':
      return workerSolver.countSolutions();
  }
  throw (`Unknown method ${method}`);
};

const debugCount = (key, value) => {
  workerSolver.incDebugCounter(key, value);
}

const sendState = (extraState) => {
  const state = workerSolver.state();
  state.extra = extraState;
  state.puzzleSetupTime = workerSolverSetUpTime;
  self.postMessage({
    type: 'state',
    state: state,
  });
  const debugState = workerSolver.debugState();
  if (debugState && Object.keys(debugState).length) {
    self.postMessage({
      type: 'debug',
      data: debugState,
    });
  }
};

self.onmessage = async (msg) => {
  await loadScripts;
  try {
    let result = handleWorkerMethod(msg.data.method, msg.data.payload);
    sendState();
    self.postMessage({
      type: 'result',
      result: result,
    });
  } catch (e) {
    self.postMessage({
      type: 'exception',
      error: e,
    });
  }
};

const END_INIT_WORKER = performance.now();
const workerSetupMs = Math.ceil(END_INIT_WORKER - START_INIT_WORKER);

console.log(`Worker initialized in ${Math.ceil(workerSetupMs)}ms`);
