// Sets of puzzles, used for testing, benchmarks, etc.

const EXAMPLES = [
  //////////////////////////////////////////////////////////////////////////////
  // Classic sodoku
  //////////////////////////////////////////////////////////////////////////////
  {
    name: 'Classic sudoku, hard',
    src: 'https://www.telegraph.co.uk/news/science/science-news/9359579/Worlds-hardest-sudoku-can-you-crack-it.html',
    input:
      '.~R1C1_8~R2C3_3~R2C4_6~R3C2_7~R3C5_9~R3C7_2~R4C2_5~R4C6_7~R5C5_4~R5C6_5~R5C7_7~R6C4_1~R6C8_3~R7C3_1~R7C8_6~R7C9_8~R8C3_8~R8C4_5~R8C8_1~R9C2_9~R9C7_4',
    solution: '812753649943682175675491283154237896369845721287169534521974368438526917796318452',
  },
  // Classic grids that used to be slow. 3 and 4 used to take 2+ seconds.
  {
    name: 'Classic sudoku, was slow (1)',
    input: '.~R1C1_8~R1C2_4~R1C5_6~R1C7_5~R1C9_1~R2C6_3~R2C8_4~R3C3_6~R3C4_9~R3C9_7~R4C2_2~R4C4_7~R4C5_1~R4C9_6~R5C4_6~R5C5_3~R6C1_9~R6C8_5~R7C5_4~R7C8_6~R8C1_2~R8C7_1~R8C8_8',
  },
  {
    name: 'Classic sudoku, was slow (2)',
    input: '.~R1C1_4~R1C3_5~R1C4_7~R2C1_9~R2C2_2~R3C7_1~R3C8_5~R3C9_8~R4C8_6~R4C9_9~R5C2_8~R5C6_6~R5C7_7~R6C2_9~R6C9_1~R7C1_6~R7C5_9~R7C9_3~R8C6_7~R8C7_6~R9C1_5~R9C4_1~R9C9_2',
  },
  {
    name: 'Classic sudoku, was slow (3)',
    src: 'norvig.com/sudoku',
    input: '.~R1C6_6~R2C2_5~R2C3_9~R2C9_8~R3C1_2~R3C6_8~R4C2_4~R4C3_5~R5C3_3~R6C3_6~R6C6_3~R6C8_5~R6C9_4~R7C4_3~R7C5_2~R7C6_5~R7C9_6',
  },
  {
    name: 'Classic sudoku, was slow (4)',
    input: '.~R1C6_5~R1C8_8~R2C4_6~R2C6_1~R2C8_4~R2C9_3~R4C2_1~R4C4_5~R5C4_1~R5C6_6~R6C1_3~R6C9_5~R7C1_5~R7C2_3~R7C8_9~R7C9_1~R8C9_4',
  },

  //////////////////////////////////////////////////////////////////////////////
  // Other variants
  //////////////////////////////////////////////////////////////////////////////
  {
    name: 'Anti-knights move',
    src: 'https://www.youtube.com/watch?v=mTdhTfAhOI8',
    input:
      '.AntiKnight.~R1C2_3~R1C5_4~R1C6_1~R1C9_7~R2C4_5~R3C4_8~R3C6_9~R4C1_6~R4C8_7~R5C9_4~R6C2_4~R7C1_3~R8C5_6~R8C8_5~R9C2_6~R9C3_4~R9C4_3',
    solution: '536241897978536241421879635613485972789623514245917368357198426892764153164352789',
  },
  {
    name: 'Killer sudoku, with overlap',
    // Same as 'Killer sudoku, but with overlapping (redundant) sums.
    input:
      '.Cage~3~R1C1~R1C2.Cage~15~R1C3~R1C4~R1C5.Cage~25~R2C1~R2C2~R3C1~R3C2.Cage~17~R2C3~R2C4.Cage~9~R3C3~R3C4~R4C4.Cage~22~R1C6~R2C5~R2C6~R3C5.Cage~4~R1C7~R2C7.Cage~16~R1C8~R2C8.Cage~15~R1C9~R2C9~R3C9~R4C9.Cage~20~R3C7~R3C8~R4C7.Cage~8~R3C6~R4C6~R5C6.Cage~17~R4C5~R5C5~R6C5.Cage~20~R5C4~R6C4~R7C4.Cage~14~R4C2~R4C3.Cage~6~R4C1~R5C1.Cage~13~R5C2~R5C3~R6C2.Cage~6~R6C3~R7C2~R7C3.Cage~17~R4C8~R5C7~R5C8.Cage~27~R6C1~R7C1~R8C1~R9C1.Cage~8~R8C2~R9C2.Cage~16~R8C3~R9C3.Cage~10~R7C5~R8C4~R8C5~R9C4.Cage~12~R5C9~R6C9.Cage~6~R6C7~R6C8.Cage~20~R6C6~R7C6~R7C7.Cage~15~R8C6~R8C7.Cage~14~R7C8~R7C9~R8C8~R8C9.Cage~13~R9C5~R9C6~R9C7.Cage~17~R9C8~R9C9.Cage~9~R1C5~R2C5.',
    solution: '215647398368952174794381652586274931142593867973816425821739546659428713437165289',
  },
  {
    name: 'Killer sudoku, with gaps',
    // Same as 'Killer sudoku, but with gaps for the optimizer to fill.
    input:
      '.Cage~17~R2C3~R2C4.Cage~9~R3C3~R3C4~R4C4.Cage~22~R1C6~R2C5~R2C6~R3C5.Cage~4~R1C7~R2C7.Cage~16~R1C8~R2C8.Cage~15~R1C9~R2C9~R3C9~R4C9.Cage~20~R3C7~R3C8~R4C7.Cage~17~R4C5~R5C5~R6C5.Cage~20~R5C4~R6C4~R7C4.Cage~14~R4C2~R4C3.Cage~6~R4C1~R5C1.Cage~13~R5C2~R5C3~R6C2.Cage~6~R6C3~R7C2~R7C3.Cage~17~R4C8~R5C7~R5C8.Cage~27~R6C1~R7C1~R8C1~R9C1.Cage~8~R8C2~R9C2.Cage~16~R8C3~R9C3.Cage~10~R7C5~R8C4~R8C5~R9C4.Cage~12~R5C9~R6C9.Cage~6~R6C7~R6C8.Cage~20~R6C6~R7C6~R7C7.Cage~15~R8C6~R8C7.Cage~14~R7C8~R7C9~R8C8~R8C9.Cage~13~R9C5~R9C6~R9C7.Cage~17~R9C8~R9C9.',
    solution: '215647398368952174794381652586274931142593867973816425821739546659428713437165289',
  },
  {
    name: 'Anti-knight Anti-king',
    src: 'https://www.reddit.com/r/sudoku/comments/gk8si6/antiking_antiknight_sudoku_to_compliment_the/',
    input:
      '.AntiKnight.AntiKing.~R1C1_1~R1C7_5~R1C8_6~R1C9_7~R2C1_2~R2C2_3~R2C3_4~R2C9_8',
    solution: '198234567234567198567198234982345671345671982671982345823456719456719823719823456',
  },
  {
    name: '3-digit pill arrow',
    src: 'https://www.youtube.com/watch?v=kkHNFAFyAJ8',
    input: '.PillArrow~3~R1C1~R1C2~R1C3~R1C4~R1C5~R1C6~R1C7~R1C8~R1C9~R2C9~R2C8~R2C7~R2C6~R2C5~R2C4~R2C3~R2C2~R2C1~R3C1~R3C2~R3C3~R3C4~R3C5~R3C6~R3C7~R3C8~R3C9~R4C9~R4C8~R4C7~R4C6~R4C5~R4C4~R4C3~R4C2~R4C1~R5C1~R5C2~R5C3~R5C4~R5C5~R5C6~R5C7~R5C8~R5C9~R6C9~R6C8~R6C7~R6C6~R6C5~R6C4~R6C3~R6C2~R6C1~R7C1~R7C2~R7C3~R7C4~R7C5~R7C6~R7C7~R7C8~R7C9~R8C9~R8C8~R8C7~R8C6~R8C5~R8C4~R8C3~R8C2~R8C1~R9C1~R9C2~R9C3~R9C4~R9C5~R9C6~R9C7~R9C8~R9C9.X~R1C4~R1C5.X~R2C5~R2C6.X~R2C3~R3C3.X~R4C2~R5C2.X~R7C3~R8C3.X~R8C2~R8C1.X~R7C5~R8C5.X~R7C7~R7C8.X~R7C9~R6C9.X~R5C6~R5C5.X~R4C4~R4C5.V~R1C9~R2C9.V~R3C8~R3C7.V~R4C7~R4C8.V~R6C1~R6C2.StrictXV.~R9C9_9',
    solution: '387194562451628793269357148978465231635219487142783956796531824824976315513842679',
  },
  {
    name: 'Arrow killer sudoku',
    src: 'https://www.youtube.com/watch?v=MAxNNVEs7cE',
    input:
      '.Cage~35~R1C3~R1C2~R1C1~R2C1~R3C1~R3C2~R3C3.Cage~31~R4C3~R4C2~R4C1~R5C2~R6C2.Cage~36~R7C4~R7C3~R7C2~R8C2~R9C2~R9C3~R9C4.Cage~14~R5C4~R5C5.Cage~10~R9C8~R9C9.Thermo~R1C3~R1C2.Thermo~R8C8~R7C9~R8C9.Arrow~R2C2~R2C3~R2C4~R2C5.Arrow~R3C4~R4C4~R5C3~R6C4.Arrow~R9C6~R8C7~R8C8.Arrow~R7C6~R6C7~R5C7.Arrow~R4C6~R3C7~R2C7~R1C7.Arrow~R4C9~R5C9~R6C9.Arrow~R4C9~R3C8~R2C9.Arrow~R8C6~R8C5~R8C4',
    solution: '364792158982154673751863249618349527273685491495271386546917832839426715127538964',
  },
  {
    name: 'Kropki sudoku',
    src: 'http://www.cross-plus-a.com/html/cros7dots.htm',
    input:
      '.WhiteDot~R1C2~R1C3.WhiteDot~R1C4~R1C5.WhiteDot~R2C5~R3C5.WhiteDot~R2C1~R2C2.WhiteDot~R3C2~R2C2.WhiteDot~R4C4~R4C3.WhiteDot~R5C3~R4C3.WhiteDot~R4C1~R4C2.WhiteDot~R5C1~R6C1.WhiteDot~R5C2~R6C2.WhiteDot~R7C2~R7C3.WhiteDot~R8C1~R8C2.WhiteDot~R8C3~R8C4.WhiteDot~R7C5~R7C6.WhiteDot~R8C6~R9C6.WhiteDot~R9C6~R9C7.WhiteDot~R7C8~R8C8.WhiteDot~R6C7~R6C8.WhiteDot~R4C7~R5C7.WhiteDot~R4C8~R5C8.WhiteDot~R3C9~R4C9.WhiteDot~R2C9~R3C9.WhiteDot~R5C9~R6C9.BlackDot~R1C5~R1C6.BlackDot~R2C2~R2C3.BlackDot~R4C1~R5C1.BlackDot~R9C4~R9C5.BlackDot~R6C6~R7C6.BlackDot~R5C4~R5C5.BlackDot~R8C7~R9C7.BlackDot~R5C8~R6C8.BlackDot~R4C9~R5C9.BlackDot~R2C8~R3C8.BlackDot~R3C7~R4C7',
    solution: '167324958542869731839175462674518293395247186281693547723956814458731629916482375',
  },
  // This is the same as the 'Little Killer' above, but the 23 LK is replaced with a Sum.
  {
    name: 'Little killer - Sum',
    src: 'https://www.youtube.com/watch?v=y4eKdI3ZJ78',
    input:
      '.LittleKiller~22~R1C1.LittleKiller~28~R2C1.LittleKiller~26~R3C1.LittleKiller~34~R1C7.LittleKiller~40~R1C8.LittleKiller~42~R1C9.~R3C2_5~R3C7_2~R5C4_3~R5C5_7.Sum~23~R1C5~R2C4~R3C3~R4C2~R5C1',
    solution: '198235764427968531653714289732186945541379826986542173865421397279653418314897652',
  },
  // This little killer has short constraints which excersizes some more code
  // paths.
  {
    name: 'Little killer 2',
    src: 'https://www.youtube.com/watch?v=Kn-EI9ItMoU',
    input: '.LittleKiller~12~R9C8.LittleKiller~21~R9C7.LittleKiller~16~R9C6.LittleKiller~38~R9C5.LittleKiller~3~R2C9.LittleKiller~20~R3C9.LittleKiller~38~R5C9.LittleKiller~14~R1C2.LittleKiller~6~R1C3.LittleKiller~19~R1C4.LittleKiller~38~R1C5.LittleKiller~6~R8C1.LittleKiller~17~R7C1.LittleKiller~38~R5C1.~R1C1_4~R1C9_6~R2C8_7~R4C4_1~R5C5_2~R6C6_3~R8C2_4~R9C1_3~R9C9_2',
    solution: '483571926625948371179362854257189463834627519961453287798214635542736198316895742',
  },
  {
    name: 'Region sum lines, hard',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?chlang=en&id=00098I',
    input: '.RegionSumLine~R1C5~R1C6~R1C7~R2C7~R3C7~R2C8~R2C9.RegionSumLine~R1C4~R2C4~R3C4~R3C5~R4C5~R4C6~R3C6~R2C6~R2C5.RegionSumLine~R3C3~R4C4~R5C5~R6C6~R7C7.RegionSumLine~R6C7~R7C8~R7C9.RegionSumLine~R7C5~R7C6~R8C7.RegionSumLine~R9C2~R8C2~R7C3~R7C2~R7C1~R6C1~R5C1.RegionSumLine~R5C2~R6C2~R6C3~R6C4~R5C4~R5C3~R4C3~R4C2~R4C1.~R1C1_1~R6C9_4~R9C9_3~R9C6_5',
    solution: '163598247298417635547236198482159376671843529935762814354981762826374951719625483',
  },
  {
    name: 'XV-sudoku',
    src: 'https://sudoku.today/g-xv-sudoku/18394f5536c.html',
    input: '.V~R2C3~R2C4.V~R3C4~R3C5.V~R3C4~R4C4.V~R6C4~R6C5.V~R7C5~R7C6.V~R8C1~R9C1.X~R5C3~R5C4.X~R9C8~R9C9.X~R6C7~R6C8.~R1C2_3~R6C1_1~R6C2_8~R4C3_6~R7C3_8~R9C3_9~R9C1_2~R8C5_2~R7C5_1~R7C4_9~R9C8_6~R6C7_6~R4C8_3~R4C9_8~R3C5_4~R3C6_5~R2C5_8~R1C7_8~R3C7_2~R1C9_5',
    solution: '431692875592387416867145293726451938943768521185239647678914352314526789259873164',
  },
  {
    name: 'Strict kropki',
    src: 'https://www.youtube.com/watch?v=z6S0Dmc1EZA',
    input: '.BlackDot~R1C6~R1C7.BlackDot~R2C7~R1C7.BlackDot~R8C7~R9C7.BlackDot~R9C6~R9C7.BlackDot~R4C8~R5C8.BlackDot~R4C8~R4C9.BlackDot~R6C6~R6C5.BlackDot~R6C5~R7C5.BlackDot~R7C5~R7C4.BlackDot~R9C3~R9C4.BlackDot~R8C3~R9C3.BlackDot~R5C1~R5C2.BlackDot~R4C5~R5C5.WhiteDot~R1C1~R1C2.WhiteDot~R2C1~R2C2.WhiteDot~R1C8~R2C8.WhiteDot~R1C6~R2C6.WhiteDot~R3C5~R3C4.WhiteDot~R3C4~R4C4.WhiteDot~R4C4~R4C5.WhiteDot~R5C6~R5C7.WhiteDot~R4C7~R5C7.WhiteDot~R5C8~R5C9.WhiteDot~R7C8~R7C9.WhiteDot~R8C8~R8C9.WhiteDot~R8C5~R8C6.WhiteDot~R8C3~R8C2.WhiteDot~R7C1~R8C1.WhiteDot~R6C2~R6C3.WhiteDot~R5C2~R6C2.WhiteDot~R5C1~R6C1.WhiteDot~R5C2~R5C3.WhiteDot~R3C9~R4C9.StrictKropki.~R6C1_7',
    solution: '983162475451793862627458319169325748845917623732684951316249587298576134574831296',
  },
  {
    name: 'Strict XV',
    src: 'https://www.youtube.com/watch?v=1lMgsCRoD2g',
    input: '.X~R2C1~R3C1.X~R1C3~R2C3.X~R1C8~R1C9.X~R3C8~R3C9.X~R3C6~R3C7.X~R5C6~R5C5.X~R7C8~R8C8.X~R7C9~R8C9.X~R7C4~R7C5.X~R6C3~R6C4.X~R7C3~R8C3.X~R6C2~R7C2.X~R8C4~R9C4.V~R7C3~R7C4.V~R4C1~R5C1.V~R5C7~R5C8.V~R2C8~R2C9.StrictXV.~R8C5_2~R2C5_1',
    solution: '683472519947516832152983764361849275295637148478251396834195627516724983729368451',
  },
  {
    name: 'Hailstone - little killer',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=0008H3',
    input: '..Cage~14~R5C3~R5C4~R6C4.Cage~19~R6C6~R6C5~R7C5.Cage~14~R4C4~R4C5~R3C5.Cage~14~R4C6~R5C6~R5C7.Diagonal~1.Diagonal~-1.LittleKiller~47~R3C1.LittleKiller~49~R2C1.LittleKiller~30~R8C9.LittleKiller~45~R7C9.LittleKiller~43~R1C7.LittleKiller~44~R1C8.LittleKiller~34~R9C2.LittleKiller~52~R9C3',
    solution: '815432976763918245942567318278351694154896732396274581437685129681729453529143867',
  },
  {
    name: 'Hailstone (easier) - little killer',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=0008H3',
    input: '..Cage~14~R5C3~R5C4~R6C4.Cage~19~R6C6~R6C5~R7C5.Cage~14~R4C4~R4C5~R3C5.Cage~14~R4C6~R5C6~R5C7.Diagonal~1.Diagonal~-1.LittleKiller~47~R3C1.LittleKiller~49~R2C1.LittleKiller~30~R8C9.LittleKiller~45~R7C9.LittleKiller~43~R1C7.LittleKiller~44~R1C8.LittleKiller~34~R9C2.LittleKiller~52~R9C3.~R1C5_3~R9C5_4~R5C1_1~R5C9_2',
    solution: '815432976763918245942567318278351694154896732396274581437685129681729453529143867',
  },
  {
    name: 'X-Sum little killer',
    input: '.LittleKiller~23~R1C1.LittleKiller~12~R2C9.LittleKiller~23~R3C9.LittleKiller~25~R5C9.LittleKiller~12~R7C1.LittleKiller~25~R1C6.~R7C2_2~R7C8_5.XSum~C1~25~23.XSum~C5~12~25.XSum~C9~23~12',
    solution: '562831974837429165941576238195384726286715349473692581329168457758943612614257893',
  },
  {
    name: 'Skyscraper - all 6',
    src: 'https://sudokutheory.com/wiki/index.php?title=Snipes#Skyscrapers',
    input: '.Skyscraper~c1~6.Skyscraper~c3~6.Skyscraper~c6~6.Skyscraper~r5~6.Skyscraper~r8~6.Skyscraper~r1~0~6.Skyscraper~r4~0~6.Skyscraper~r7~0~6.Skyscraper~c2~0~6.Skyscraper~c4~0~6',
    solution: '491872653582631974673495218714986532356724189829513746968357421145268397237149865',
  },
  {
    name: 'Skyscraper - all 5',
    src: 'https://sudokutheory.com/wiki/index.php?title=Snipes#Skyscrapers',
    input: '.Skyscraper~C1~5~.Skyscraper~C4~5~.Skyscraper~C7~5~.Skyscraper~C9~5~.Skyscraper~R2~~5.Skyscraper~R5~~5.Skyscraper~R7~~5.Skyscraper~C6~~5.Skyscraper~C5~~5.Skyscraper~C3~~5.Skyscraper~C2~~5.Skyscraper~R8~5~.Skyscraper~R6~5~.Skyscraper~R4~5~.Skyscraper~R1~5~.',
    solution: '357486192498127365621395487234519678789643521516278934975864213163752849842931756',
  },
  {
    name: 'Renban skyscrapers',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?chlang=en&id=0007TV',
    input: '.Renban~R2C1~R3C1~R4C1~R4C2.Renban~R3C3~R4C3~R5C3~R6C3.Renban~R2C5~R3C5.Renban~R6C4~R5C4~R4C4~R4C5~R4C6.Renban~R9C1~R8C1~R8C2~R9C3.Renban~R9C7~R8C8~R8C9~R9C9.Renban~R7C4~R7C5~R7C6~R6C6~R5C6.Renban~R3C7~R4C7~R5C7~R5C8~R5C9.Renban~R2C7~R2C8~R2C9~R3C9~R4C9..Skyscraper~c2~3~4.Skyscraper~c4~0~3.Skyscraper~c6~4.Skyscraper~c7~5.Skyscraper~c8~4~4.Skyscraper~c9~0~5.Skyscraper~r1~3~6.Skyscraper~r3~4.Skyscraper~r5~3~3.Skyscraper~r6~5.Skyscraper~r8~4.Skyscraper~r9~4~3',
    solution: '359876142821943567674152389795634218183297456246518793932465871468721935517389624',
  },
  {
    name: 'Quadruple - repeated values',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=00022p&chlang=en',
    input: '.Quad~R1C1~1~2~3~4.Quad~R1C8~6~7~8~9.Quad~R2C2~4~5~6~7.Quad~R2C7~3~4~5~6.Quad~R3C3~1~3~5~6.Quad~R3C6~4~7~7~8.Quad~R6C1~4~5~5~9.Quad~R6C8~2~4~7~8.Quad~R7C3~3~4~6~8.Quad~R7C6~2~2~5~6',
    solution: '239456187147283569865197432926348715378521946451769328593812674784635291612974853',
  },
  {
    name: 'Heat up - global entropy',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=000FZ4',
    input: '.Thermo~R1C2~R2C2~R3C1.Thermo~R2C9~R2C8~R1C7.Thermo~R4C5~R5C6~R6C5~R5C4.Thermo~R8C1~R8C2~R9C3.Thermo~R9C8~R8C8~R7C9.Skyscraper~C4~5~0.Skyscraper~R6~5~0.Skyscraper~C6~0~5.Skyscraper~R4~0~5..GlobalEntropy',
    solution: '834159627659273841712486395967518432183942576425367918376824159241695783598731264',
  },
  {
    name: 'Miracle - skyscraper entropy',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=000GHN',
    input: '.GlobalEntropy.Skyscraper~R1~8~.Skyscraper~R6~~7.',
    solution: '234567819687193542915248376472915638361482957598736421726359184159824763843671295',
  },
  {
    name: 'Knight-arrows',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=000EBE',
    input: '.Arrow~R1C7~R1C6~R2C6~R3C6.Arrow~R3C1~R4C1~R4C2~R4C3.Arrow~R8C2~R9C1~R9C2.Arrow~R9C3~R9C4~R8C4~R7C4.Arrow~R8C8~R9C9~R9C8.Arrow~R7C9~R6C9~R6C8~R6C7.BlackDot~R4C3~R4C4.AntiKnight.Binary~EAEBEAAQAAAAE~~R3C6~R4C6.~R9C3_8~R5C5_5~R3C1_9~R1C7_6~R7C9_7',
    solution: '382971645716542389945683271234819756167254938859736412491368527673125894528497163',
  },
  {
    name: 'Nabner',
    src: 'https://sudokupad.app/fpmB4ppfMp',
    input: '.WhiteDot~R4C6~R4C7.BlackDot~R5C8~R6C8.~R6C9_9.BinaryX~8H-xf8H-xf8H-B~~R1C3~R1C2~R2C2~~R1C5~R1C4~R2C4~R3C4~~R1C6~R1C7~R1C8~R2C8~~R2C5~R3C5~R4C5~R4C6~~R2C6~R3C6~R3C7~R4C7~~R3C3~R4C4~R5C5~R6C4~~R4C1~R4C2~R4C3~~R5C1~R5C2~R5C3~R5C4~~R6C2~R6C3~R7C4~R8C3~~R6C1~R7C1~R7C2~R7C3~~R9C2~R9C3~R9C4~R8C4~~R7C5~R8C5~R9C5~R9C6~~R8C7~R9C7~R9C8~R8C9~~R8C6~R7C6~R6C7~R6C8~~R5C9~R5C8~R5C7~R6C6~~R4C8~R4C9~~R2C7~R3C8~R3C9~R2C9',
    solution: '385961472726453891941278653538692147194735268672814539813549726469127385257386914',
  },
  {
    name: 'Nabner thermo - easy',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=000EX5',
    input: '.Thermo~R3C2~R3C3~R3C4.Thermo~R3C7~R4C8~R5C7~R6C8.Thermo~R9C6~R8C6~R7C6.Thermo~R7C2~R8C2~R9C2.Thermo~R6C2~R7C3~R6C4~R7C5.WhiteDot~R9C7~R9C8.WhiteDot~R9C9~R9C8.BlackDot~R4C2~R5C2.BinaryX~8H-xf8H-xf8H-B~_Nabner~R4C1~R5C1~R6C1~R7C2~~R4C4~R5C4~R6C5~R6C6~~R2C4~R3C5~R3C6~R2C7~~R3C8~R4C9~R5C9~R6C9~~R6C8~R7C7~R7C8~R7C9~~R8C9~R8C8~R8C7~R9C6~~R3C2~R4C3~R5C3~R6C3.~R1C8_9~R6C8_4~R6C2_6',
    solution: '814576293379142586256938174741653829928417365563829741437295618182364957695781432',
  },
  {
    name: 'Beauty mark - nabner',
    src: 'https://sudokupad.app/TnR9996Ltn',
    input: '.RegionSumLine~R2C1~R3C1~R4C1~R5C1~R6C1.RegionSumLine~R3C2~R3C3~R2C3~R1C4~R1C5~R1C6~R2C6~R3C6~R4C6~R4C5~R4C4.RegionSumLine~R6C5~R6C6~R7C6~R8C6.RegionSumLine~R6C8~R6C9~R7C9~R8C9~R9C9.BlackDot~R2C6~R2C7.RegionSumLine~R8C2~R7C3~R6C3~R5C3~R4C3.BinaryX~8H-xf8H-xf8H-B~_Nabner~R1C1~R1C2~R1C3~R2C2~~R2C4~R2C5~R3C4~R3C5~~R5C2~R6C2~R7C2~R8C1~~R6C4~R7C4~R8C3~R9C2~~R7C8~R7C7~R8C7~R9C7~~R5C4~R5C5~R5C6~R6C7~~R1C7~R2C8~~R3C9~R4C9~R4C8~R4C7.',
    solution: '753418629218956347649732158382579416495163872176824935837645291564291783921387564',
  },
  {
    name: 'Zipper lines - easy',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?chlang=en&id=000FNA',
    input: '.Zipper~R5C1~R5C2~R5C3.Zipper~R7C2~R7C1~R8C1~R9C1~R9C2~R9C3~R8C3.Zipper~R8C2~R7C3~R6C4~R7C5~R8C6.Zipper~R8C5~R9C5~R9C6~R9C7~R8C7~R7C7~R7C6.Zipper~R4C8~R4C7~R5C7~R6C7~R6C8~R6C9~R5C9.Zipper~R2C9~R3C9~R3C8~R3C7~R2C7~R1C7~R1C8.Zipper~R2C6~R1C6~R1C5~R1C4~R2C4~R3C4~R3C5.Zipper~R2C5~R3C6~R4C5.',
    solution: '329764518547182396168359742695213487473598621281647935734825169856931274912476853',
  },
  {
    name: 'Sum lines',
    src: 'https://sudokupad.app/wya9lc53et',
    input: '.SumLine~10~R4C1~R3C2~R2C3~R1C4.SumLine~10~R4C2~R4C3~R4C4~R3C4~R2C4.SumLine~10~R2C5~R2C6~R3C6~R4C6~R4C7~R4C8~R5C8~R6C8~R6C7~R6C6.SumLine~10~R7C6~R8C6~R8C5~R8C4~R7C4~R6C4~R6C3~R6C2~R5C2.SumLine~10~R6C1~R7C2~R8C3~R9C4.SumLine~10~R4C9~R3C8~R2C7~R1C6.BlackDot~R4C2~R4C3.BlackDot~R4C8~R5C8.BlackDot~R7C7~R7C8.WhiteDot~R5C3~R5C4.WhiteDot~R8C1~R9C1.WhiteDot~R2C4~R3C4.',
    solution: '136895274492137586857264913521486739748953162963712845615379428384521697279648351',
  },
  {
    name: 'Sum lines - single line',
    input: '.SumLine~10~R1C1~R2C1~R3C1~R4C1~R5C1~R6C1~R7C1~R8C1~R9C1~R9C2~R8C2~R9C3~R8C3~R7C2~R6C2~R6C3~R5C3~R4C3~R3C4~R2C5~R2C6~R1C7~R2C7~R3C8~R2C9~R3C9~R4C9~R4C8~R4C7~R5C8~R6C7~R6C6~R5C7~R5C6~R4C6~R4C5~R4C4~R5C4~R5C5~R6C5~R6C4~R7C4~R8C4~R8C5~R8C6~R7C5~R7C6~R7C7~R8C7~R9C7~R9C8~R9C9~R8C9~R8C8~R7C8~R7C9.',
    solution: '324689751758412693196357842982164375475938216631275489269841537817523964543796128',
  },
  {
    name: 'Sum lines - long loop',
    // This puzzle broke when SumLine couldn't handle long loops.
    input: '.SumLine~10~R1C2~R1C3~R1C4~R1C5~R1C6~R2C6~R2C7~R2C8~R2C9~R3C9~R4C9~R4C8~R5C7~R5C6~R5C5~R6C5~R6C6~R6C7~R6C8~R6C9~R7C9~R8C9~R8C8~R8C7~R8C6~R9C6~R9C5~R9C4~R9C3~R8C3~R8C2~R8C1~R7C1~R7C2~R7C3~R7C4~R6C4~R5C4~R5C3~R5C2~R4C2~R4C1~R3C1~R3C2~R3C3~R3C4~R3C5~R2C5~R2C4~R2C3~R2C2~R2C1~R1C1~LOOP.~R4C5_2~R9C7_8~R1C8_1~R1C4_2~R1C5_7~R7C5_8~R7C6_4~R7C7_2~R3C9_2~R4C9_3~R6C2_5',
    solution: '648273519192856437537419682416928753723541968859367124361784295284695371975132846',
  },
  {
    name: 'Lockout double arrows',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=000GVU',
    input: '.Lockout~4~R1C2~R1C3~R2C3~R2C4~R3C4~R3C5.DoubleArrow~R3C5~R3C4~R2C4~R2C3~R1C3~R1C2.DoubleArrow~R3C1~R3C2~R4C2.DoubleArrow~R4C2~R5C2~R6C2~R7C2.DoubleArrow~R4C2~R4C3~R4C4~R4C5.DoubleArrow~R4C5~R4C6~R3C6~R3C7.DoubleArrow~R3C7~R2C7~R1C7~R1C8.DoubleArrow~R4C5~R5C5~R6C5~R7C5~R8C5.DoubleArrow~R9C5~R9C4~R9C3~R8C3.DoubleArrow~R7C8~R8C8~R8C7~R7C7.DoubleArrow~R7C7~R6C7~R6C8~R5C8.Lockout~4~R3C7~R2C7~R1C7~R1C8.Lockout~4~R4C5~R4C6~R3C6~R3C7.Lockout~4~R7C8~R8C8~R8C7~R7C7.Lockout~4~R7C7~R6C7~R6C8~R5C8.Lockout~4~R8C5~R7C5~R6C5~R5C5~R4C5.Lockout~4~R9C5~R9C4~R9C3~R8C3.Lockout~4~R7C2~R6C2~R5C2~R4C2.Lockout~4~R4C2~R4C3~R4C4~R4C5.Lockout~4~R4C2~R3C2~R3C1.',
    solution: '794261385153478962682359471529183647418796523376524819965812734237645198841937256',
  },
  {
    name: 'Ahhhh, look at the pretty colors',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=000GCP',
    input: '.Entropic~R2C4~R1C4~R1C5~R1C6~R2C6.Entropic~R4C8~R4C9~R5C9~R6C9~R6C8.Entropic~R8C6~R9C6~R9C5~R9C4~R8C4.Entropic~R4C1~R5C1~R6C1.Modular~2~R8C7~R8C8~R7C8.Modular~2~R1C2~R1C1~R2C1.Modular~2~R6C3~R7C3~R7C4.Modular~3~R8C1~R9C1~R9C2.Modular~3~R2C7~R2C8~R3C8.Modular~3~R3C4~R3C3~R4C3.Modular~4~R1C8~R1C9~R2C9.Modular~4~R7C6~R7C7~R6C7.Modular~4~R7C2~R8C2~R8C3.Binary~gH8gH8A4BP4BP~~R9C8~R9C9~R8C9~~R3C6~R3C7~R4C7~~R2C3~R2C2~R3C2~R4C2.~R1C1_1~R2C2_2~R3C3_5~R1C5_2~R1C9_6~R2C8_5~R3C7_2~R5C9_7~R9C9_9~R8C8_2~R7C7_6~R9C5_1~R7C3_1~R8C2_3~R9C1_2~R5C1_8',
    solution: '143529786629784153785136294516378942892451367374962815951243678438697521267815439',
  },
  {
    name: 'Event horizon',
    src: 'https://www.youtube.com/watch?v=gBXJpnHyZfE',
    input: '.Cage~20~R1C2~R2C2~R2C1.Cage~20~R4C2~R4C3~R4C4~R4C4.Cage~20~R8C2~R8C1~R9C1.Cage~10~R1C8~R2C8~R2C9.Cage~0~R6C6~R6C7~R6C8.Cage~70~R8C5~R7C5~R6C5~R5C5~R5C4~R4C5~R3C5~R2C5~R4C5~R5C5~R5C4~R6C5~R5C6~R5C6.Sum~30~R1C9~R2C8~R3C7~R7C3~R8C2~R9C1~R4C6~R5C5~R6C4~R4C6~R5C5~R6C4.Sum~30~R1C2~R2C3~R3C4~R4C5~R5C6~R6C7~R7C8~R8C9~R4C5~R5C6.LittleKiller~30~R1C6.BinaryX~eoH75ev378GvwD~_Renban%20-%20double~R4C6~R5C6~R5C5~R6C4~R6C5.BinaryX~_v-7-_v-7-_v-D~_Renban%20-%20single~R6C2~R7C3~R7C4~R3C6~R2C5.Binary~fwD-oH-ZP-7e-H~_Renban%20-%20mixed~R6C2~R4C6~~R6C2~R5C6~~R6C2~R5C5~~R6C2~R6C4~~R6C2~R6C5~~R7C3~R4C6~~R7C3~R5C6~~R7C3~R5C5~~R7C3~R6C4~~R7C3~R6C5~~R7C4~R4C6~~R7C4~R5C6~~R7C4~R5C5~~R7C4~R6C4~~R7C4~R6C5~~R3C6~R4C6~~R3C6~R5C6~~R3C6~R5C5~~R3C6~R6C4~~R3C6~R6C5~~R2C5~R4C6~~R2C5~R5C6~~R2C5~R5C5~~R2C5~R6C4~~R2C5~R6C5.',
    solution: '136847952892635714754129386415763298283914675679258143341576829967482531528391467',
  },
  {
    name: 'Duplicate cell sums',
    // Simplified 'Event Horizon' without renban.
    src: 'https://www.youtube.com/watch?v=gBXJpnHyZfE',
    input: '.Cage~20~R1C2~R2C2~R2C1.Cage~20~R4C2~R4C3~R4C4~R4C4.Cage~20~R8C2~R8C1~R9C1.Cage~10~R1C8~R2C8~R2C9.Cage~0~R6C6~R6C7~R6C8.Cage~70~R8C5~R7C5~R6C5~R5C5~R5C4~R4C5~R3C5~R2C5~R4C5~R5C5~R5C4~R6C5~R5C6~R5C6.Sum~30~R1C9~R2C8~R3C7~R7C3~R8C2~R9C1~R4C6~R5C5~R6C4~R4C6~R5C5~R6C4.Sum~30~R1C2~R2C3~R3C4~R4C5~R5C6~R6C7~R7C8~R8C9~R4C5~R5C6.LittleKiller~30~R1C6.~R4C5_6~R7C4_5~R2C5_3~R3C6_9',
    solution: '136847952892635714754129386415763298283914675679258143341576829967482531528391467',
  },
  {
    name: 'Jigsaw boxes, disconnected',
    src: 'http://forum.enjoysudoku.com/jigsaw-as-custom-extra-regions-sudoku-t39468.html#p311414',
    input: '.Jigsaw~001122222000103332100143332111143332504444462577748888577748668577768666555558866.~R1C1_4~R1C9_7~R3C1_1~R3C2_5~R3C9_4~R4C3_3~R4C7_7~R5C1_9~R5C3_1~R5C7_8~R5C9_6~R6C3_8~R6C7_4~R7C1_2~R7C9_8~R9C1_7~R9C9_9',
    solution: '432659187869714253157823964543968712921475836678231495216397548394582671785146329',
  },
  {
    name: 'Windoku',
    src: 'https://www.sudocue.net/windoku.php?id=fa4ce900-69cc-45d2-8b2d-1cae750c3a95',
    input: '.Windoku.~R2C6_5~R2C8_1~R3C5_2~R3C9_6~R4C7_4~R5C3_5~R5C7_6~R6C2_8~R6C6_7~R6C7_3~R7C4_2~R7C5_1~R7C6_4~R8C2_7~R8C9_2~R9C3_6~R9C8_4',
    solution: '792861534463975218158423796327196485945382671681547329539214867874639152216758943',
  },
  {
    name: 'Killer sudoku, with 0 cage',
    input: '.Cage~3~R1C1~R1C2.Cage~15~R1C3~R1C4~R1C5.Cage~17~R2C3~R2C4.Cage~22~R1C6~R2C5~R2C6~R3C5.Cage~4~R1C7~R2C7.Cage~16~R1C8~R2C8.Cage~15~R1C9~R2C9~R3C9~R4C9.Cage~8~R3C6~R4C6~R5C6.Cage~6~R4C1~R5C1.Cage~6~R6C3~R7C2~R7C3.Cage~27~R6C1~R7C1~R8C1~R9C1.Cage~8~R8C2~R9C2.Cage~16~R8C3~R9C3.Cage~10~R7C5~R8C4~R8C5~R9C4.Cage~12~R5C9~R6C9.Cage~6~R6C7~R6C8.Cage~20~R6C6~R7C6~R7C7.Cage~15~R8C6~R8C7.Cage~14~R7C8~R7C9~R8C8~R8C9.Cage~13~R9C5~R9C6~R9C7.Cage~17~R9C8~R9C9.Cage~0~R5C4~R5C3~R5C2~R6C2.Cage~0~R3C7~R3C8~R4C8.',
    solution: '215647398368952174794381652586274931142593867973816425821739546659428713437165289',
  },
  {
    name: 'Killer sudoku, with 0 cage, hard',
    src: 'http://forum.enjoysudoku.com/fast-web-based-solver-for-sudoku-variants-t39332.html#p312474',
    input: 'Z<<<<W<<<^0<<>^X<T>^j>>>^>^c^^<<>>^T^<<<^>>>^^S<<^<<0^>^L<<<^^<^>^U<>>^Q>>>^>>>>^',
    solution: '458723196936185274271496583392547618867931452514268739783612945645379821129854367',
  },
  {
    name: 'Owl',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=000CR0',
    input: '.Modular~2~R1C2~R2C2~R3C2~R4C2~R5C2~R6C2~R7C2.Modular~2~R1C8~R2C8~R3C8~R4C8~R5C8~R6C8~R7C8.Modular~2~R1C3~R2C4~R1C5~R2C6~R1C7.Modular~2~R5C3~R4C4~R5C5~R4C6~R5C7.Modular~2~R6C3~R7C3~R8C4~R7C5~R6C5.Modular~2~R6C7~R7C7~R8C6~R7C5.NumberedRoom~C1~1~1.NumberedRoom~R1~1~1.NumberedRoom~R4~1~1.NumberedRoom~C9~1~1.NumberedRoom~C3~2~.NumberedRoom~C5~2~.NumberedRoom~C7~2~.NumberedRoom~C4~~8.NumberedRoom~R5~5~9.',
    solution: '924365871813947526567182934752498163481536792396721485245679318639814257178253649',
  },
  {
    name: 'N is for Numbered Rooms',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=000B8L',
    input: '.NumberedRoom~C1~1~1.NumberedRoom~C2~1~5.NumberedRoom~C3~3~7.NumberedRoom~C4~3~.NumberedRoom~C5~5~.NumberedRoom~R1~4~4.NumberedRoom~R3~8~.NumberedRoom~R4~2~.NumberedRoom~R9~6~6.NumberedRoom~C6~7~.NumberedRoom~C7~7~7.NumberedRoom~C8~9~5.NumberedRoom~C9~9~9.NumberedRoom~R7~~2.NumberedRoom~R6~~8.',
    solution: '817593642532416879496827513658172394974365281321984765783249156145638927269751438',
  },
  {
    name: 'Full rank 2',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=000DHO',
    input: '.FullRank~C1~33~.FullRank~C2~30~.FullRank~C3~26~.FullRank~C4~24~.FullRank~C5~13~.FullRank~R4~1~.FullRank~R5~17~.FullRank~R6~~36.FullRank~C6~~35.',
    solution: '987642153621835974345971628179283546568794312234156789852367491496518237713429865',
  },
  {
    name: 'Full rank 3',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=0001RM',
    input: '.FullRank~C1~6~20.FullRank~C2~22~9.FullRank~R1~5~11.FullRank~R2~26~8.FullRank~R5~4~18.FullRank~R8~33~3.FullRank~R9~17~27.FullRank~C5~19~13.FullRank~C8~15~7.FullRank~C9~10~25.~R4C5_7~R6C5_3',
    solution: '268957143715483692349216758652174839183692475497538216871329564924765381536841927',
  },
  {
    name: 'Full rank 4',
    src: 'https://www.youtube.com/watch?v=74G7E0EW3-o',
    input: '.FullRank~C1~10~23.FullRank~C2~16~34.FullRank~C3~22~27.FullRank~C4~35~2.FullRank~C5~3~12.FullRank~C6~18~32.FullRank~C7~30~5.FullRank~C8~8~17.FullRank~C9~25~15.FullRank~R1~9~26.FullRank~R2~20~4.FullRank~R3~33~19.FullRank~R4~28~6.FullRank~R5~7~11.FullRank~R6~14~31.FullRank~R7~1~36.FullRank~R8~29~21.FullRank~R9~24~13.~R3C4_7~R4C4_8~R5C5_9~R6C6_6~R7C6_4',
    solution: '346915827572683491918742635763851942281497563459326178135264789824579316697138254',
  },
  {
    name: 'Indexing Parade',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?chlang=en&id=000EJJ',
    input: '.Renban~R1C1~R2C1.Renban~R2C3~R3C3~R4C3.Renban~R6C1~R7C1~R8C1.Renban~R8C3~R9C3.Renban~R9C4~R8C5~R7C5.Renban~R4C6~R4C5~R4C4~R5C4~R6C4~R6C5~R6C6.Renban~R3C5~R2C5~R1C6.Renban~R1C7~R2C7~R3C7.Renban~R6C7~R7C7.Renban~R5C8~R5C9.Renban~R9C9~R8C9~R7C9..Indexing~C~R1C1~R1C2~R1C3~R2C3~R2C2~R2C1~R3C1~R3C2~R3C3~R4C3~R4C2~R4C1~R5C1~R5C2~R5C3~R6C3~R6C2~R6C1~R7C1~R7C2~R7C3~R8C3~R8C2~R8C1~R9C1~R9C2~R9C3',
    solution: '321984567467152398985637421596713842132498756748265139879546213653821974214379685',
  },
  {
    name: 'Start with 1, not 0!',
    src: 'https://app.crackingthecryptic.com/2ng0dky96e',
    input: '.Cage~12~R1C1~R2C1~R3C1.Cage~12~R3C2~R3C3.Cage~8~R1C5~R1C6.Cage~18~R4C5~R5C5~R6C5.Cage~12~R4C4~R5C4.Cage~6~R4C2~R4C3.Cage~10~R5C1~R5C2.Cage~9~R7C1~R7C2.Cage~11~R9C1~R9C2.Cage~13~R7C4~R8C4~R9C4.Cage~8~R1C8~R2C8.Cage~13~R5C8~R5C9.Cage~17~R7C9~R8C9~R9C9..Indexing~C~R9C9~R8C9~R7C9~R6C9~R5C9~R4C9~R3C9~R2C9~R1C9~R1C5~R2C5~R3C5~R4C5~R5C5~R6C5~R7C5~R8C5~R9C5~R9C1~R8C1~R7C1~R6C1~R5C1~R4C1~R3C1~R2C1~R1C1',
    solution: '758926134162384957493157862924865371371492685685731429546213798219678543837549216',
  },
  {
    name: 'Papier-mache',
    src: 'https://www.youtube.com/watch?v=R6eWBSTcBOE',
    input: '.BlackDot~R3C1~R3C2.BlackDot~R2C5~R3C5.BlackDot~R3C8~R3C9.BlackDot~R6C2~R6C1.BlackDot~R7C1~R6C1.BlackDot~R9C2~R9C3.BlackDot~R8C3~R8C4.BlackDot~R8C6~R8C7.BlackDot~R6C7~R6C8.BlackDot~R6C9~R7C9.~R2C7_5.Indexing~R~10~R3C1~R3C2~R2C5~R3C5~R3C8~R3C9~R6C7~R6C8~R6C9~R7C9~R8C7~R8C6~R8C4~R8C3~R9C3~R9C2~R7C1~R6C1~R6C2',
    solution: '715634892693728541482519763369841257857263419241957638176385924538492176924176385',
  },
  {
    name: '2D 1-5-9',
    src: 'https://www.reddit.com/r/sudoku/comments/t5t825/my_second_sudoku_variant_puzzle_a_bit_more/',
    input: '.Thermo~R3C1~R4C1~R5C1~R6C1~R7C1..Indexing~R~R1C1~R1C2~R1C3~R1C4~R1C5~R1C6~R1C7~R1C8~R1C9~R5C1~R5C2~R5C3~R5C4~R5C5~R5C6~R5C7~R5C8~R5C9~R9C1~R9C2~R9C3~R9C4~R9C5~R9C6~R9C7~R9C8~R9C9.Indexing~C~R1C1~R2C1~R3C1~R4C1~R5C1~R6C1~R7C1~R8C1~R9C1~R1C5~R2C5~R3C5~R4C5~R5C5~R6C5~R7C5~R8C5~R9C5~R1C9~R2C9~R3C9~R4C9~R5C9~R6C9~R7C9~R8C9~R9C9',
    solution: '934852671675431298218976534341289756582617349796543182829765413453128967167394825',
  },
  {
    name: 'Pencilmark sudoku 2',
    src: 'http://forum.enjoysudoku.com/pencilmark-sudoku-t36694-45.html#p297310',
    input: '123456789.2345678...3456...123456..912345.7.9123456.89123456.89123456789123456.89.234..78..2345678...34.678.123456789123456789123456.89123456789.234.678..2345678..2345678...345678..23456789123456..91234567.9123456.8912345678912.4.67891234567891234567891234567891.34.6..91234.6...1234.678.1234.6.8.12345678912.4.....12345678.1.3456789..34567891.34567891234567891234567891234567891234567891234567891234567891.3456789..345678.1.345678912345678912345678912345678912.456789123456789123456789123456789.234567891234567891234567.9123456789123456.89123456789123456789123456789123456789.2.456789..3456789123456789.23456789123456789123456789123456789.23456789123456789.234567891.3456789123456789123456789123456.891234567891234.678.123456789',
    solution: '124356879356789124789412563213678945697541382548293617832964751465137298971825436',
  },
  {
    name: 'Pencilmark sudoku 3',
    src: 'http://forum.enjoysudoku.com/pencilmark-sudoku-t36694-45.html#p286504',
    input: '1.3.5.7.91234567891234567891234567891.3.5.78.1.3.567891.34567..123.56789123456789..345.7.9123456..9.234567891234567.9123456789..345...9123456789.2345.7.912345.7891234567891..4.6..9.2.4.6.8912.456.89123456789.23456789123456.8.12345678912.4.678.12345678912.456.89.2.456.89123456789123456789..34567.9..34567.9.23...789123456789123.5678912...6...12.456.8912.45...91234567891.3456.891234.6.89123.5678912...6789123.5.78.12345678912345678912345.78912345678.1234567891234.6789..3....89123...7891.34567..12345678912345678912345678912345678.1.345678....456...1234567891...5678.12345678912.4.6.89.2.4.6.89.2.4...891234..78912345678912345678912345678912.456789123.567891234.6789.234.678912345.789123...78.123456789..345678..23.56789123456789',
    solution: '123456789456789123798132546215893674364271958879564231531628497682947315947315862',
  },
  {
    name: 'Normal Lunchbox 2',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=0003IV',
    input: '.Lunchbox~0~R2C1~R3C1~R4C1~R4C2~R5C2.Lunchbox~5~R1C4~R2C4~R3C4~R3C3.Lunchbox~0~R1C8~R1C9~R2C9~R3C9.Lunchbox~7~R1C7~R1C6~R2C6~R3C6~R3C7.Lunchbox~12~R4C8~R5C8~R5C9~R6C9.Lunchbox~20~R4C7~R4C6~R5C6~R5C5~R6C5.Lunchbox~27~R4C5~R4C4~R5C4~R6C4~R7C4~R7C5~R7C6~R8C6~R8C7.Lunchbox~0~R7C8~R7C9~R8C9~R9C9~R9C8.Lunchbox~16~R8C2~R8C3~R8C4~R9C4~R9C5~R9C6.Lunchbox~21~R8C1~R7C1~R6C1~R6C2~R6C3~R5C3.',
  },
  {
    name: 'Extreme Lunchbox',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=0003HB',
    input: '.Lunchbox~3~R6C2~R6C1~R5C1~R4C1.Lunchbox~2~R6C4~R6C3~R5C3~R5C2~R4C2.Lunchbox~29~R4C4~R3C4~R2C4~R1C4~R1C3~R1C2~R2C2.Lunchbox~23~R1C7~R1C8~R2C8~R3C8~R4C8~R5C8~R5C7~R6C7~R7C7.Lunchbox~0~R7C9~R8C9~R9C9.Lunchbox~20~R8C2~R8C3~R9C3~R9C4~R9C5.Lunchbox~12~R8C8~R8C7~R9C7~R9C6.Lunchbox~8~R6C5~R7C5~R8C5~R8C4.Lunchbox~8~R3C6~R4C6~R5C6~R6C6~R7C6.Lunchbox~23~R3C7~R2C7~R2C6~R2C5~R3C5~R4C5~R5C5.',
    solution: '586792143719346582423581967174923658368475291952168734841657329697234815235819476',
  },
  {
    name: 'Extreme Lunchbox 2',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=0004JX',
    input: '.Lunchbox~19~R1C3~R1C2~R2C2~R2C1~R3C1.Lunchbox~14~R1C6~R1C7~R1C8~R1C9.Lunchbox~5~R2C4~R2C5~R2C6~R3C6~R3C7~R4C7.Lunchbox~16~R3C8~R4C8~R5C8~R5C7~R5C6.Lunchbox~8~R3C4~R4C4~R4C5~R5C5.Lunchbox~17~R7C1~R7C2~R7C3~R8C3~R9C3.Lunchbox~0~R8C4~R9C4~R9C5.Lunchbox~11~R7C6~R7C7~R8C7~R9C7.Lunchbox~6~R7C5~R6C5~R6C6~R6C7.Lunchbox~15~R6C9~R7C9~R8C9~R9C9~R9C8.Lunchbox~13~R3C3~R4C3~R5C3~R5C2.',
    solution: '172349865483651792965872314826534971397218456541796283254187639618923547739465128',
  },
  {
    name: 'Unbidden First Hidden',
    src: 'https://sudokupad.app/1i71uad30f',
    input: '.HiddenSkyscraper~C4~8~.HiddenSkyscraper~C5~8~.HiddenSkyscraper~C6~8~.HiddenSkyscraper~C7~6~.HiddenSkyscraper~R2~2~2.HiddenSkyscraper~R7~~5.HiddenSkyscraper~C2~~6.HiddenSkyscraper~C3~~7.HiddenSkyscraper~R1~3~.HiddenSkyscraper~R3~1~.HiddenSkyscraper~R4~7~.HiddenSkyscraper~R5~7~.HiddenSkyscraper~R6~7~.',
  },
  {
    name: 'Look-and-say',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=0007CP',
    input: '.ContainExact~6_7~R3C1~R2C1~R1C1.ContainExact~3_4_4~R1C3~R2C3~R2C4~R1C4.ContainExact~1~R1C7~R1C8.ContainExact~9_3~R2C9~R2C8~R3C8~R3C7~R3C6.ContainExact~5_5_5_8~R3C9~R4C9~R5C9~R5C8~R5C7~R6C7~R6C6.ContainExact~1_2~R7C9~R7C8~R8C8~R8C7~R9C7.ContainExact~3_3_1~R7C4~R8C4~R8C3~R8C2~R7C2.ContainExact~6_6~R7C5~R6C5~R6C4~R5C4.ContainExact~1_1_3~R6C2~R6C1~R7C1.ContainExact~8_8~R7C7~R7C6~R8C6~R9C6.ContainExact~4_2_2~R5C5~R4C5~R4C4~R4C3.ContainExact~9_9_9~R5C1~R6C2~R7C3~R8C4~R9C5.ContainExact~6_6~R6C9~R7C8~R8C7~R9C6.',
    solution: '893456712654217983721839465562741398948623571317985246179362854435178629286594137',
  },
  {
    name: 'Look-and-Say 2',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?chlang=en&id=0008M1',
    input: '.ContainExact~2~R1C2~R2C2~R3C2~R3C3.ContainExact~6_7~R2C7~R3C7~R3C8.ContainExact~5_5~R6C9~R7C9~R7C8.ContainExact~7_7~R8C2~R8C3~R9C3~R9C4~R9C2.ContainExact~1_1_2_2~R6C2~R7C2~R7C3~R7C4~R8C4.ContainExact~4_4_2~R5C5~R6C5~R7C5~R8C5~R7C6.ContainExact~3_3_3~R4C6~R4C7~R5C7~R6C7~R7C7~R6C8~R5C8.ContainExact~1~R1C7~R2C8~R3C9.ContainExact~8_8~R4C9~R3C8~R2C7~R1C6.ContainExact~4_4~R6C9~R5C8~R4C7~R3C6~R2C5~R1C4.ContainExact~3_3_3~R1C9~R2C8~R3C7~R4C6~R5C5~R6C4~R7C3~R8C2~R9C1.ContainExact~2~R1C1~R2C2~R3C3~R4C4~R5C5~R6C6~R7C7~R8C8~R9C9.ContainExact~1_1_1~R3C1~R4C2~R5C3~R6C4~R7C5~R8C6~R9C7.ContainExact~9~R4C1~R5C2~R6C3~R7C4~R8C5~R9C6.ContainExact~3~R1C4~R2C3~R3C2~R4C1.ContainExact~9_9~R1C6~R2C5~R3C4~R4C3~R5C2~R6C1.ContainExact~8_8_8~R1C7~R2C6~R3C5~R4C4~R5C3~R6C2~R7C1.',
    solution: '786412593543698712192357684259173468638549271417826935821964357975231846364785129',
  },
  {
    name: 'Look-and-Say 3',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=000AG9',
    input: '.ContainExact~3_3~R1C1~R2C2~R3C3~R4C4~R5C5~R6C6~R7C7~R8C8~R9C9.ContainExact~2~R1C4~R1C5~R2C5.ContainExact~3~R2C6~R3C6.ContainExact~2~R1C7~R1C8~R1C9~R2C9.ContainExact~4~R4C7~R4C8~R4C9~R5C9.ContainExact~1~R5C7~R6C7.ContainExact~2~R6C8~R6C9.ContainExact~6~R7C8~R7C9.ContainExact~2~R8C9~R9C9~R9C8.ContainExact~6~R7C6~R8C6.ContainExact~4~R8C4~R9C4~R9C5.ContainExact~5~R7C3~R8C3.ContainExact~7~R7C1~R8C1~R9C1.ContainExact~1~R6C1~R6C2.ContainExact~4~R5C4~R5C5~R4C5.ContainExact~6_6~R3C4~R3C3~R4C3.ContainExact~3~R2C2~R2C1~R3C1.ContainExact~7_7_7~R2C1~R3C2~R4C3~R5C4~R6C5~R7C6~R8C7~R9C8.ContainExact~4~R3C1~R4C2~R5C3~R6C4~R7C5~R8C6~R9C7.ContainExact~7_7~R4C1~R5C2~R6C3~R7C4~R8C5~R9C6.ContainExact~5~R5C1~R6C2~R7C3~R8C4~R9C5.ContainExact~8_8_8~R7C9~R6C8~R5C7~R4C6~R3C5~R2C4~R1C3.ContainExact~2~R1C3~R2C2~R3C1.ContainExact~4_4~R1C6~R2C5~R3C4~R4C3~R5C2~R6C1.ContainExact~4_4~R1C9~R2C8~R3C7~R4C6~R5C5~R6C4~R7C3~R8C2~R9C1.ContainExact~5_5~R9C4~R8C5~R7C6~R6C7~R5C8~R4C9.ContainExact~5~R9C5~R8C6~R7C7~R6C8~R5C9.',
    solution: '658194237349827651271653894926318745583742169417965328794231586835476912162589473'
  },

  //////////////////////////////////////////////////////////////////////////////
  // Long sums
  //////////////////////////////////////////////////////////////////////////////
  // From the CTC discord, sum constraints which have more than 16 cells.
  {
    name: 'Long sums 1',
    input: '.PillArrow~2~R7C4~R7C5~R8C5~R8C6~R9C6~R9C7~R9C8~R9C9~R8C9~R7C9~R7C8~R6C8~R6C9~R5C9~R5C8~R5C7~R4C7~R4C8~R4C9~R3C9~R3C8~R3C7~R3C6~R2C6~R2C5~R2C4~R3C4~R4C4~R4C3~R5C3~R5C2~R6C2~R7C2~R7C1.AntiKing.',
    solution: '231869574457321689896475321672198453913547268548236917125984736364712895789653142',
  },
  {
    name: 'Long sums 2',
    input: '.PillArrow~2~R6C5~R5C5~R4C5~R4C4~R5C4~R5C3~R5C2~R6C2~R6C3~R7C3~R7C4~R8C4~R9C4~R9C5~R8C5~R7C5~R7C6~R8C6~R8C7~R7C7~R6C7~R5C7~R5C8~R4C8~R4C9~R3C9~R2C9~R2C8~R3C8~R3C7~R2C7~R2C6~R3C6~R3C5.DisjointSets.',
    solution: '123465987965873421478921635859316742634297518712584396591638274386742159247159863',
  },
  {
    name: 'Long sums 3',
    input: '.PillArrow~2~R1C9~R1C8~R1C7~R1C6~R1C5~R2C4~R2C3~R2C2~R2C1~R3C1~R4C1~R4C2~R5C2~R5C1~R6C1~R6C2~R7C2~R7C1~R8C1~R8C2~R8C3~R7C3~R7C4~R6C4~R6C3~R5C3~R5C4~R5C5~R6C5~R7C5~R7C6~R6C6~R6C7~R6C8.',
    solution: '765432198432198765198765432219876543543219876876543219654321987321987654987654321',
  },

  //////////////////////////////////////////////////////////////////////////////
  // Snipes
  //////////////////////////////////////////////////////////////////////////////
  {
    // Full rank snipe by sigh: https://sudokutheory.com/wiki/index.php?title=Snipes#Full_Rank
    name: 'Full rank - 6 clue snipe',
    src: 'https://discord.com/channels/709370620642852885/721090566481510732/1258800235594125352',
    input: '.FullRank~R5~17~.FullRank~R4~1~.FullRank~C2~32~.FullRank~C3~28~.FullRank~C4~23~.FullRank~R1~34~.',
    solution: '987624153654381972231975648179842536568793214423156789845267391396518427712439865',
  },
  {
    // https://sudokutheory.com/wiki/index.php?title=Snipes#Sandwich
    name: 'Sandwich snipe 18',
    src: 'https://www.f-puzzles.com/?load=N4IgzglgXgpiBcBOANCA5gJwgEwQbT2AF9ljSSzKLryBdZQmq8l54+x1p7rjtn/nQaCR3PgIm9hk0UM6zR4rssX1wAQwB22AO4QAxgAswAVwC2+UPpgAbGwhAAlAAwBhAIwhUAN3U2TcPAg7gAcIBQg1nYOLq4ATF4gvv6BwWERUfZBsQDMickBDqHhpJG2WU5uACz5foVBxRnlMW4ArLUpRemlmS2uAOwd9WklVs3Z7q7OQ6mNPeNOcVMzXaNl0dk5yz51s91jG05V20m7q02Hjq0nBXtrvdkAbDdnDfvrFbGIK2/htERAA',
    input: '.Sandwich~18~C1.Sandwich~18~C2.Sandwich~18~C3.Sandwich~18~R1.Sandwich~18~R2.Sandwich~18~R3.Sandwich~18~R4.Sandwich~18~R5.Sandwich~18~R6.Sandwich~18~C4.Sandwich~18~C5.Sandwich~18~C7.Sandwich~18~C9.',
    solution: '584137269239684157167592843396751428845923671721846935952478316673219584418365792',
  },

  //////////////////////////////////////////////////////////////////////////////
  // Slow case examples (some no longer slow).
  //////////////////////////////////////////////////////////////////////////////
  {
    name: 'Anti-Knight, slow',
    input: '.AntiKnight.~R1C2_3~R1C9_7~R3C6_9~R3C7_2~R4C1_6~R4C4_4~R5C9_5~R6C2_4~R7C1_3~R8C5_6~R8C8_5~R9C2_6~R9C3_4~R9C4_3',
  },
  {
    name: 'Arrow, slow',
    input: '.Arrow~R1C2~R2C1~R3C1.Arrow~R1C3~R2C2~R1C1.Arrow~R2C5~R1C5~R2C4.Arrow~R3C7~R2C7~R1C8.Arrow~R3C9~R2C8~R3C8~R2C9.Arrow~R3C6~R4C6~R5C7.Arrow~R4C2~R4C3~R3C2.Arrow~R5C1~R5C2~R5C3.Arrow~R6C2~R7C3~R7C4.Arrow~R7C2~R6C3~R5C4.Arrow~R2C3~R3C4~R4C5~R5C6.Arrow~R7C1~R8C1~R9C2.Arrow~R9C3~R8C2~R9C1.Arrow~R9C4~R9C5~R9C6~R9C7.Arrow~R8C7~R8C8~R8C9.Arrow~R7C8~R6C7~R7C6.Arrow~R5C8~R6C8~R7C7.Arrow~R5C5~R6C6~R7C5.',
  },
  {
    name: 'Little killer, slow',
    src: 'https://www.youtube.com/watch?v=RjznoTdOHRM',
    input: `.LittleKiller~20~R1C4.LittleKiller~10~R1C5.LittleKiller~21~R1C6.LittleKiller~5~R2C9.LittleKiller~12~R3C9.LittleKiller~13~R8C1.LittleKiller~16~R7C1.LittleKiller~31~R9C3.LittleKiller~15~R9C4.LittleKiller~16~R9C5`,
  },
  {
    name: 'Sandwich, partial, slow',
    input: '.Sandwich~8~C1.Sandwich~4~C2.Sandwich~17~C3.Sandwich~3~C7.Sandwich~10~C8.Sandwich~25~C9.Sandwich~4~R1.Sandwich~33~R2.Sandwich~17~R4.Sandwich~16~R7.',
  },
  {
    name: 'Anti-consectutive, hard',
    src: 'http://forum.enjoysudoku.com/sudokuncexplainer-to-solve-and-rate-sudoku-non-consecutive-t36949.html#p285907',
    input: '.AntiConsecutive.~R1C2_3~R2C3_6~R3C4_5~R3C8_7',
  },
  {
    name: 'White Room  - killer sudoku',
    src: 'http://forum.enjoysudoku.com/new-killer-setter-t38092-15.html#p306873',
    input: '.Cage~7~R2C2~R3C2~R4C2.Cage~5~R2C6~R2C7.Cage~6~R3C7~R3C8.Cage~6~R4C6~R4C7.Cage~15~R7C9~R6C9.Cage~3~R9C7~R9C6.Cage~17~R8C3~R7C3.Cage~23~R6C3~R6C4~R7C4.',
  },
  {
    // From gracefu.
    name: 'Skyscaper 2-3',
    input: '.Skyscraper~C8~3~2.Skyscraper~R6~2~3.Skyscraper~R8~~3.Skyscraper~C7~~3.Skyscraper~C4~~3.Skyscraper~C5~~3.Skyscraper~C2~~3.Skyscraper~C3~3~2.Skyscraper~R2~3~2.Skyscraper~R1~3~3.Skyscraper~R4~3~.Skyscraper~C1~2~3.Skyscraper~R9~3~.Skyscraper~R7~2~3.Skyscraper~C6~3~.Skyscraper~C9~3~.Skyscraper~R5~~3.Skyscraper~R3~2~2.',
  },
  {
    // From CTC discord discussion.
    name: 'Zero solution: Renban',
    input: '.Renban~R7C2~R8C1~R9C2~R8C3.Renban~R7C5~R8C6~R9C5~R8C4.Renban~R8C7~R9C8~R8C9~R7C8.Renban~R6C8~R5C9~R4C8~R5C7.Renban~R3C2~R2C1~R1C2~R2C3.Renban~R3C5~R2C4~R1C5~R2C6.Renban~R2C7~R1C8~R2C9~R3C8.Renban~R5C4~R4C5~R5C6~R6C5.Renban~R4C2~R5C1~R6C2~R5C3.',
  },
  {
    // From CTC discord discussion.
    name: 'Zero solution: Little Killer',
    input: '.LittleKiller~49~R1C9.LittleKiller~49~R1C8.LittleKiller~49~R9C2.LittleKiller~49~R9C3.LittleKiller~49~R7C9.LittleKiller~49~R1C1.LittleKiller~49~R2C1.LittleKiller~49~R3C1.',
  },

  //////////////////////////////////////////////////////////////////////////////
  // Extreme killers.
  //////////////////////////////////////////////////////////////////////////////
  {
    name: 'Wecoc #1',
    src: 'http://forum.enjoysudoku.com/killing-with-flowers-t36181.html#p278651',
    input: '3x3::k:6150:6150:6401:6401:6401:6658:6658:6658:6658:6150:6401:6401:5123:4868:4868:4868:6661:6658:6150:5120:5120:5123:5123:5123:4868:6661:6661:6150:5120:5127:3336:2313:2313:5130:5130:6661:6155:5120:5127:3336:0000:1299:5130:5134:6661:6155:5127:5127:4367:4367:1299:5130:5134:6672:6155:6155:5393:5138:5138:5138:5134:5134:6672:6156:6155:5393:5393:5393:5138:6413:6413:6672:6156:6156:6156:6156:6413:6413:6413:6672:6672:',
    solution: '821376945795481362634529718183654297956712834247893156519267483478135629362948571',
  },
  {
    name: 'Wecoc #1 mod A',
    src: 'http://forum.enjoysudoku.com/killing-with-flowers-t36181-15.html#p279072',
    input: '3x3::k:6144:6144:6401:6401:6401:6658:6658:6658:6658:6144:6401:6401:5123:4868:4868:4868:6661:6658:6144:5126:5126:5123:5123:5123:4868:6661:6661:6144:5126:5127:3336:2313:2313:5130:5130:6661:6155:5126:5127:3336:1555:1555:5130:5133:6661:6155:5127:5127:4366:4366:1555:5130:5133:6671:6155:6155:5392:5137:5137:5137:5133:5133:6671:6162:6155:5392:5392:5392:5137:6412:6412:6671:6162:6162:6162:6162:6412:6412:6412:6671:6671:',
    solution: '821376945795481362634529718183654297956712834247893156519267483478135629362948571',
  },
  {
    name: 'Wecoc #1 mod B',
    src: 'http://forum.enjoysudoku.com/killing-with-flowers-t36181-15.html#p279072',
    input: '3x3::k:6144:6144:6401:6401:6401:6658:6658:6658:6658:6144:6401:6401:5123:4868:4868:4868:6661:6658:6144:5126:5126:5123:5123:5123:4868:6661:6661:6144:5126:5127:3342:2312:2312:5130:5130:6661:6155:5126:5127:3342:4627:1289:5130:5133:6661:6155:5127:5127:4627:4627:1289:5130:5133:6671:6155:6155:5392:5137:5137:5137:5133:5133:6671:6162:6155:5392:5392:5392:5137:6412:6412:6671:6162:6162:6162:6162:6412:6412:6412:6671:6671:',
  },
  {
    name: 'Wecoc #2',
    src: 'http://forum.enjoysudoku.com/killing-with-flowers-t36181-15.html#p279065',
    input: '3x3::k:2561:5122:5122:6403:6403:6403:6403:2820:2820:2561:5122:5122:6403:5125:5125:5125:5126:5126:6410:5129:6408:6408:6408:5125:6407:5126:5126:6410:5129:5129:6408:6407:6407:6407:6415:6415:6410:5129:6411:6408:524:6413:6407:5134:6415:6410:6410:6411:6411:6411:6413:5134:5134:6415:5397:5397:6411:5139:6413:6413:6413:5134:6415:5397:5397:5139:5139:5139:6418:5137:5137:2832:2580:2580:6418:6418:6418:6418:5137:5137:2832:',
    solution: '863145792247869315591372486126987543739524168485631279672493851358716924914258637',
  },
  {
    name: 'tarek unsolvable #41',
    src: 'http://forum.enjoysudoku.com/killing-with-flowers-t36181-15.html#p279032',
    input: '3x3::k:7168:7168:4866:4866:4866:6149:6149:6149:5128:4873:7168:7168:7168:4866:4866:6149:5128:5128:4873:4873:5908:5908:5908:5908:4888:5128:6682:4873:7196:5908:6174:4888:4888:4888:5128:6682:7196:7196:8230:6174:6174:6174:4888:6682:6682:7196:6190:8230:8230:8230:6174:7475:6682:4917:7196:6190:8230:7475:7475:7475:7475:4917:4917:6190:6190:5697:5442:5442:7236:7236:7236:4917:6190:5697:5697:5697:5442:5442:5442:7236:7236:',
    solution: '283197546967542813415368729591726384876439152324851967149275638752683491638914275',
  },


  //////////////////////////////////////////////////////////////////////////////
  // Hard puzzles for benchmarks
  //////////////////////////////////////////////////////////////////////////////
  {
    name: 'Hard renban 1',
    input: '.Renban~R2C1~R1C2.Renban~R3C2~R2C3~R1C4.Renban~R3C4~R2C5~R1C6.Renban~R3C6~R2C7~R1C8.Renban~R2C8~R3C9.Renban~R3C7~R4C8~R5C9.Renban~R3C5~R4C6~R5C7.Renban~R3C3~R4C4~R5C5.Renban~R3C1~R4C2~R5C3.Renban~R6C1~R5C2.Renban~R7C1~R8C2~R9C3.Renban~R7C2~R6C3~R5C4.Renban~R7C3~R8C4~R9C5.Renban~R7C5~R8C6~R9C7.Renban~R7C7~R8C8~R9C9.Renban~R6C8~R7C9.Renban~R7C6~R6C7~R5C8.Renban~R5C6~R6C5~R7C4.~R6C4_1~R4C5_2',
    solution: '521863974387941625469275381953726148176384592842159763215698437638417259794532816',
  },
  {
    name: 'Hard renban 2',
    input: '.Renban~R2C1~R1C2.Renban~R3C2~R2C3~R1C4.Renban~R3C4~R2C5~R1C6.Renban~R3C6~R2C7~R1C8.Renban~R2C8~R3C9.Renban~R3C7~R4C8~R5C9.Renban~R3C5~R4C6~R5C7.Renban~R3C3~R4C4~R5C5.Renban~R3C1~R4C2~R5C3.Renban~R6C1~R5C2.Renban~R7C1~R8C2~R9C3.Renban~R7C2~R6C3~R5C4.Renban~R7C3~R8C4~R9C5.Renban~R7C5~R8C6~R9C7.Renban~R7C7~R8C8~R9C9.Renban~R6C8~R7C9.Renban~R7C6~R6C7~R5C8.Renban~R5C6~R6C5~R7C4.Thermo~R9C1~R8C1.AntiKing.',
    solution: '827519346396274581145836729531492867982367415764158293259643178618725934473981652',
  },
  {
    name: 'Hard renban 3',
    input: '.Renban~R2C1~R2C2~R2C3~R3C4~R3C5~R3C6.Renban~R4C1~R3C2~R4C3~R4C4~R5C3~R6C4.Renban~R4C2~R5C2~R6C2~R7C3~R8C3~R9C3~R9C4.Renban~R1C4~R2C4~R1C5.Renban~R1C6~R1C7~R2C7~R3C7~R4C8~R5C8~R6C8.Renban~R6C9~R7C8~R6C7~R6C6~R5C7~R4C6.Renban~R8C9~R8C8~R8C7~R7C6~R7C5~R7C4.Renban~R9C6~R8C6~R9C5.Thermo~R9C2~R8C2.',
    solution: '123564897654789312978231546586412973249357168731896425465978231897123654312645789',
  },
  // From https://sudokutheory.com/wiki/index.php?title=Snipes#Thermo
  // Also see this thread: 'http://forum.enjoysudoku.com/minimal-futoshiki-sudoshiki-puzzles-t32904-30.html#p322490'
  {
    name: 'I want to break free',
    src: 'https://www.f-puzzles.com/?load=N4IgzglgXgpiBcBOANCALhNAbO8QEkACAdQEMA7NQtAe0ICEAnGUga0IDFm5VSBXNAAsajBCAAKgiFggAHQgDkYAdwC2FEKkZ8cYGGjEKR6rITB8AJjVZ9C23YVKzZWAJ4A6QgBEIAc0xgjlg05L7UgjCMqjSq+pGBqnxgVBDkAMbMpHqEAGaMMYQARjqF1HQYsu6aIL6MEBYIANqNoP4AbjDk4p1p0gCypIysYAjkOlgAvsitEB1dPf2Dw6PjUzNz3emLQyPwY1iT0zWznZu9WAM7KwdrxxsLF0u7+4frpw+Xy3urR+3vW48rt8br8TvMAZ9nj83uDzpDrpMALrIFp3f5wp4I25/WHbL4vbFgs54qEgmHEwH46Fo3GU0mvGkU+HAhk4pmYlmE+4QjkE0HcjFAgnI1Fsj686linlCyVE8UysmM+VUxVSwUq1ly6UarnoklY/l6ukG8nK+kTEWm7Xmw205l8q3qm2O/Wc23shWagWuh1K60mv1OgNqn2rS2B0OqrVBt0u42xiPx30hpOy72pqPp+1po3ZzO5iU3cMpvNegue3V2wtlqsV91m4PRyM1j06+v+hMl6sWlFx0uV1vOxP99sx5NNjMthudicjvvd0fNnui2cL+d19dtzdDrsb4dr/d73dbw864uro8Xk/HndX29Zg83xsPy8v693rGI5HoCJRGJxUR4FRGRyBgXZmhAAAlABGABhAA2apIIAJgQkAv1uECwKaRooLggAOJDUMQdDEUw1JsKA3DIIAZlgwjUBQ2CAHZSPI0DwOoxB6KQ/CWLYo4sM4qDmJ4xi+JIjDBIo4TIPgsSoIAVn4qTQCEnCoIAFgUyDlMksjpI4jSYNg5CiNgmiBLUmTjLoszGNQ6CrJAdSqK00ykOUpzVJcmy3LkjzGOUyyfNciDINE+yoL4kKDOsoz/O4qLIL47y4t8hLwvkxTPNgzTnLC6jRJy8S8oKvzwrokqoNQnLQoq6iqvM/L6syri0NKxCMO/CwIDAUhChwCxgn8NImm/NBtBgNIKF6ixSDQMCaFkDAQnAsigA==',
    input: `
    .Thermo~r1c2~r2c3.Thermo~r3c2~r2c1.Thermo~r4c2~r5c1.Thermo~r6c2~r5c3
    .Thermo~r7c2~r8c3.Thermo~r9c2~r8c1.Thermo~r1c6~r2c6.Thermo~r3c5~r2c4
    .Thermo~r3c5~r2c5.Thermo~r6c5~r5c4.Thermo~r7c5~r8c4.Thermo~r9c6~r8c6
    .Thermo~r1c8~r2c9.Thermo~r3c8~r2c7.Thermo~r4c8~r5c9.Thermo~r6c8~r5c7
    .Thermo~r7c8~r8c9.Thermo~r9c8~r8c7`,
    solution: '953874162816235497472916538265398741794621385138457629387169254529743816641582973',
  },
  {
    name: 'A kind of magic',
    src: 'https://www.f-puzzles.com/?load=N4IgzglgXgpiBcBOANCALhNAbO8QEEACAaQgDsATQgewDNCBZAQwHMIBjEVJgVzQAtqAJwQgACvwhYIAB0IA5GAHcAtkzKF1VIQE9qAa2o8w/JlxBCeOMDDSj5wtVkIBlHhQM9Cl65pkysHQA6QgAdMgARCDY0MBoNARghFWoVWyS4lWM0QnJ2IRgmG0JaIVTCRMIAIysqiuoK/hgK2SDzFiEICgQAbR7QNgA3GDIxEfYpZiF9MAQyKywAX2QBiGHR8cmmadn4eawllZAhkbGyCawpmbmF5dX1s4ur3f3D+9PNy+3rvdujk425y2OxuBzuxzWHyBXxBvzB/0hgKe3xef3eSOBP1eiwAush+hCHp9nqC3oSocjYdiEUToSS4WSAY9Maj4ejmTCsWjyRjOazGYiOfTqeziSjSeCmWKqbc8QSpXTxQzJYLpVy2TyhUqRZq1fyVbTKeqBYaWRKaRSzcqLbzhdyFUb9XLRYqZRqHVadR6+eaXY7fbrXcaDZafda/Z77aqg/qbVq3UtnYH/eHk5H3dGU17M+mTaG7RnTWHs0WC3nbdqo6XK2Ck96yyGKwnG/Hg3G9QH6zXy63YxHi1X892Wx3lXWcwPC0Pm+2Y52Jw3Z1nB022/3F+vh0vc7j8ZuZ/u12nJz3RyXp0euwfjxub1vD0693fr1fLwv78+39WX++f9+vxefafk6eLoE0ySpOkIjwAS0hkDAux9CAABKACMADCAAs5jIQATFhIA4ji4JwQhvQ9ChiAEagyEABwEURJHkGRMEUchADs6EAGw4Zx7GEcRRykYhbFUfxNH0TxjFCcxIkoRhuE4fhADMAlMfBcnIcp6GKTR+GoWpMkaeRKGYTpOEAKzoQZ0mgMJJnIVx5k0VZqm2SA9msShnG6Sh9E2YJdmyQ5VG+XR6FuYFHnBV5WncUp6EWYZQXGbFTk8S5iXJdFqVIchVEZX5WXuZ5eUYbRCX8SVMV5dpFV6ehiDZaVbFmfVKFWVVUUtShTntchVlNdVuVsZx/X0V16ksXlVHjY1amgRQEBgEwVQ4BQWDUGwnAwSA7DUGQaBCEwS3sBgB2zKBR08DA7BaF0TBoAh1AyOdZCIXt1CbQU3TEUAA==',
    input: `
    .Thermo~R1C2~R2C3.Thermo~R3C2~R2C1.Thermo~R4C2~R5C1.Thermo~R6C2~R5C3
    .Thermo~R7C2~R8C1.Thermo~R9C2~R8C3.Thermo~R9C4~R8C4.Thermo~R9C6~R8C5
    .Thermo~R9C7~R8C6.Thermo~R9C8~R8C9.Thermo~R7C8~R8C7.Thermo~R7C6~R7C7
    .Thermo~R6C6~R5C5.Thermo~R6C8~R5C9.Thermo~R4C8~R5C7.Thermo~R3C8~R2C9
    .Thermo~R1C8~R2C7.Thermo~R3C6~R2C5.Thermo~R1C4~R2C4.`,
    solution: '953218746816374529274956381621749835385162497749835162132687954497523618568491273',
  },
  {
    name: 'Bicycle race',
    src: 'https://www.f-puzzles.com/?load=N4IgzglgXgpiBcBOANCALhNAbO8QCEIBjATyJwAIAlAQyLlRoFc0ALAewCcEQAFViFggAHCgDkYAdwC2NAHYhUnJjjAw0PMV1lYKYJgBN2AayYVlqijWHCsJAHQUAIhADmmMFazs5rqxTYYTml2aXUgimkmMDQKCDkiThgaNQoAM05QigAjFWyA9gCRe0UQV04IAwQAbWrQdwA3GDleZqJBAFkaTmMwBDkVLABfZHqIJpa2zu7e/sGRsYnWhOmevvgBrGHRsvHm5fasLrW5rYXdpamjmfXN7cX9q+PZjfmdxseV65PXs/e9yZfZ63N4PQGHYGnYYAXWQdQunwhNyh5w+4NWLzuqIBBwxIL+YNx30xoIR6OJ+PuZKJkN+VLRNORdOxlyBTKx/1ZSJ+WNh8IZT3ZpIFbJ5wpxgrFBOpkpJ0pF3Ll9IloqVLMReJRnI1FK1hNllKGfP1qsN2vJtI5JsVZutmuZ5sZUuVXPtVplpr1HptXoVbvmxu9/vlKp9DrtuvDQcj7r9MfFrvjIcTloTOtTyfTQrOgbjGZdWed6ot2YLJaLjoNvtDwbLTrVlc9UbzpaNcIj+eL9dt0c7jbDsZrSbrVebQ77Hdb/drbf546nk4ri4by57LaXvYXm4365X27VufnO6Pe93a5P55TW7P1avx7vp4vKOhsPQrCCITCaCCNVAQjkMDrLUIBUAAjAAwgA7KUVAAEzgQAbCAL7nP+gE1NUIGQVBMEAByIch0KofE6HwMBVAAMzgbBMHwRRhHEQBQGYVQiDgQALHh4EAKwMTsaHMVh1FcfRKH8SRgmscJqBUPhoF8X+EkYUJuFcdBYmKUxylSapMn4YgCkgAJ2kIdJIHceB8kaUZSlkSx7FmVQFmiUR4laXZIGmdBMkWUh1nGR5VAOfRPkcYZAXkVRnEyfBvH+bZ5GmdF5k8eFCUsRBukgfBBnxe5kXgVlcE4XlpHkQ5RUWblrmaWVLGmZVJU1TZ+UZY58FWURr4GBAYA0NkOAGN47hEDUr5oMoMBEPIPUGDQ35gOwwgYD4QFEUAA===',
    input: `
    .Thermo~R1C2~R2C1.Thermo~R3C2~R2C3.Thermo~R4C2~R5C3.Thermo~R4C3~R5C4
    .Thermo~R6C2~R5C1.Thermo~R7C2~R8C3.Thermo~R9C2~R8C1.Thermo~R9C4~R8C5
    .Thermo~R7C7~R8C6.Thermo~R7C8~R8C7.Thermo~R9C8~R8C9.Thermo~R6C7~R5C6
    .Thermo~R6C8~R5C7.Thermo~R4C8~R5C9.Thermo~R3C8~R2C7.Thermo~R1C8~R2C9
    .Thermo~R1C7~R2C6.Thermo~R3C4~R2C5.Thermo~R6C4~R5C5.`,
    solution: '561798243784263915239541687472916538618352794953487162146825379395174826827639451'
  },

  //////////////////////////////////////////////////////////////////////////////
  // 16x16
  //////////////////////////////////////////////////////////////////////////////
  {
    name: '16x16: Sudoku X',
    src: 'http://forum.enjoysudoku.com/giant-sudokus-t39758-30.html#p320617',
    input: `
      .Shape~16x16
      .Diagonal~1.Diagonal~-1
      .~R1C1_5~R1C2_12~R1C3_16~R1C4_3~R1C5_7~R1C6_1~R1C7_4~R1Cb_11~R1Cd_9~R1Cf_8~R2C2_7~R2C3_15~R2C7_16~R2Ca_10~R3C6_3~R3C7_14~R4C1_14~R4C5_5~R4C9_8~R4Ca_9~R4Ce_7~R4Cf_16~R4Cg_11~R5C4_11~R5C8_3~R5C9_12~R5Ca_13~R5Cd_5~R5Ce_10~R5Cf_2~R6C2_8~R6C3_1~R6C5_12~R6C8_7~R6Cb_4~R6Cd_6~R6Cg_3~R7Ca_8~R7Cb_10~R7Ce_12~R7Cf_13~R7Cg_7~R8C5_10~R8C6_14~R8Ca_7~R8Cd_11~R8Ce_1~R9C3_8~R9C4_12~R9C7_5~R9Cb_13~R9Cc_9~RaC1_3~RaC2_2~RaC3_14~RaC6_15~RaC7_7~RbC1_16~RbC4_10~RbC6_12~RbC9_6~RbCc_5~RbCe_2~RbCf_3~RcC2_6~RcC3_5~RcC4_1~RcC7_13~RcC8_4~RcC9_2~RcCd_12~RdC1_4~RdC2_3~RdC3_2~RdC7_6~RdC8_13~RdCc_10~RdCg_14~ReCa_15~ReCb_8~RfC7_1~RfCa_6~RfCe_15~RfCf_12~RgC2_10~RgC4_15~RgC6_8~RgCa_2~RgCb_1~RgCc_4~RgCd_16~RgCe_6~RgCf_11~RgCg_9
    `,
    solution: 'ELPCGADFONKBIMHJBGOHMIPKAJELCDNFKMJIHCNODPFGBEALNADFEBJLHICMOGPKGNIKDFOCLMPAEJBHJHABLMKGIEDNFPOCFPCDIEBAKHJONLMGLOMEJNHPCGBFKAIDODHLCJEBNAMIGKFPCBNMFOGHJKLPDIEAPKGJALINFDOEHBCMIFEAKPMDBCGHLNJODCBPOKFMELIJAHGNAEFNPGLIMOHKJCDBHIKGBDAJPFNCMOLEMJLONHCEGBADPFKI',
  },
  {
    name: '16x16: Sudoku X, very hard',
    src: 'http://forum.enjoysudoku.com/giant-sudokus-t39758-30.html#p321047',
    input: `
      .Shape~16x16
      .Diagonal~1.Diagonal~-1
      .~R1C5_16~R1C6_12~R1Cb_7~R1Cc_3~R2C6_2~R2C8_7~R2C9_4~R2Cb_11~R3C4_6~R3C5_11~R3C6_1~R3C7_15~R3C8_10~R3C9_9~R3Ca_5~R3Cb_2~R3Cc_8~R3Cd_14~R4C3_1~R4C8_3~R4C9_6~R4Ce_7~R5C1_10~R5C3_9~R5C8_12~R5C9_5~R5Ce_4~R5Cg_2~R6C1_8~R6C2_14~R6C3_3~R6C8_2~R6C9_1~R6Ce_13~R6Cf_5~R6Cg_7~R7C3_4~R7Ce_16~R8C2_6~R8C3_16~R8C4_5~R8C5_3~R8C6_13~R8Cb_8~R8Cc_14~R8Cd_1~R8Ce_11~R8Cf_12~R9C2_2~R9C3_5~R9C4_13~R9C5_9~R9C6_11~R9Cb_1~R9Cc_16~R9Cd_8~R9Ce_15~R9Cf_4~RaC3_8~RaCe_12~RbC1_1~RbC2_12~RbC3_10~RbC8_6~RbC9_14~RbCe_5~RbCf_9~RbCg_11~RcC1_3~RcC3_11~RcC8_1~RcC9_8~RcCe_2~RcCg_13~RdC3_14~RdC8_5~RdC9_3~RdCe_8~ReC4_9~ReC5_14~ReC6_7~ReC7_2~ReC8_11~ReC9_16~ReCa_10~ReCb_13~ReCc_1~ReCd_4~RfC6_9~RfC8_16~RfC9_2~RfCb_14~RgC5_12~RgC6_4~RgCb_5~RgCc_6
    `,
    solution: 'NEBHPLFDMAGCKIJOICOPHBEGDNKJMAFLLGMFKAOJIEBHNCPDKDAJMNICFLPOEGBHJMIAGFNLEPCKODHBHNCODPKBAFILJMEGGKDLAEHIJMOBFPCNBFPECMJOGDHNAKLIFBEMIKGNLCAPHODJOPHNECDMKBJIGLAFALJGBHPFNODMCEIKCIKDJOLAHGFEPBNMMONBFJAECKLDIHGPEHLINGBKPJMADFOCDAFCOIMPBHNGLJKEPJGKLDCHOIEFBNMA',
  },

  //////////////////////////////////////////////////////////////////////////////
  // Other shapes
  //////////////////////////////////////////////////////////////////////////////
  {
    name: '6x6: Full rank',
    src: 'https://discord.com/channels/709370620642852885/709373384437268530/1249572584211611688',
    input: '.FullRank~C2~9~.FullRank~C3~1~.FullRank~R6~24~..Shape~6x6',
    solution: '531246426315342561165432214653653124',
  },
  {
    name: '6x6: Between Odd and Even',
    src: 'https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?chlang=en&id=000ED6',
    input: '.Between~R6C3~R5C2~R4C2.Between~R3C1~R2C2~R3C3~R3C4.Between~R1C3~R2C4~R3C3~R4C3.Between~R4C6~R4C5~R5C4~R5C3~R6C4.~R4C3_2_4_6~R1C3_2_4_6~R6C4_2_4_6~R4C6_2_4_6~R2C2_2_4_6~R2C3_2_4_6~R3C1_1_3_5~R3C4_1_3_5~R2C4_1_3_5~R2C5_1_3_5~R4C2_1_3_5~R6C3_1_3_5.Shape~6x6',
    solution: '314625526314163542452136235461641253'
  },
  {
    name: '6x6: Little Killer',
    src: 'https://www.youtube.com/watch?v=V-iY2ISw6tE',
    input: '.LittleKiller~8~R1C4.LittleKiller~9~R3C1.LittleKiller~26~R5C6.LittleKiller~17~R6C2..Shape~6x6',
    solution: '462135513624236541145362321456654213',
  },
];

for (const puzzle of EXAMPLES) {
  if (puzzle.name) {
    PUZZLE_INDEX.set(puzzle.name, puzzle);
  }
}

const HARD_THERMOS = [
  'I want to break free',
  'A kind of magic',
  'Bicycle race',
];

const EXTREME_KILLERS = [
  'Wecoc #1',
  'Wecoc #1 mod A',
  'Wecoc #1 mod B',
  'Wecoc #2',
  'tarek unsolvable #41',
];

const HARD_RENBAN = [
  'Hard renban 1',
  'Hard renban 2',
  'Hard renban 3',
];

// 1 to 42 from: http://rcbroughton.co.uk/sudoku/forum/viewtopic.php?f=3&t=434#p2453
const TAREK_ALL = [
  'G<<L<K<L<^G>^>^E^^>^IJ<G^<G^>^^I^<>^HC<C^<B^N^^G^<>^>^^E^<DF<^PG^<>^^J<^^<H<<>^>^',
  'G<<M<L<M<^O>^>^C^^>^FF<G^<C^>^^H^<>^FE<E^<C^M^^H^<>^>^^E^<FH<^MH^<>^^L<^^<D<<>^>^',
  'G<<N<J<H<^O>^>^K^^>^GI<A^<L^>^^E^<>^FF<E^<C^I^^E^<>^>^^C^<GH<^QF^<>^^E<^^<J<<>^>^',
  'G<<P<N<H<^N>^>^E^^>^GH<B^<K^>^^I^<>^IC<G^<C^L^^A^<>^>^^C^<EK<^KJ^<>^^I<^^<D<<>^>^',
  'L<<H<N<L<^L>^>^D^^>^BJ<I^<I^>^^G^<>^FF<F^<C^H^^I^<>^>^^I^<FE<^MD^<>^^H<^^<G<<>^>^',
  'L<<Q<J<G<^N>^>^J^^>^C8<H^<F^>^^I^<>^FC<D^<I^L^^H^<>^>^^E^<AG<^PG^<>^^I<^^<G<<>^>^',
  'M<<L<O<F<^J>^>^H^^>^KE<C^<M^>^^I^<>^CC<C^<E^K^^I^<>^>^^E^<FA<^OH^<>^^J<^^<E<<>^>^',
  'N<<K<H<I<^I>^>^J^^>^CL<C^<L^>^^G^<>^9H<G^<C^J^^I^<>^>^^G^<IF<^LK^<>^^K<^^<7<<>^>^',
  'A<H<MA<A<^P<<^N<<^E^E<^L<^E^^^^^^^^^M<<9<K<<<G^N<^F<SB^<^^L^^^^I<E>^>>^D^^^<^F<>^',
  'E<8<ID<E<^N<<^L<<^A^Q<^K<^D^^^^^^^^^L<<G<I<<<K^C<^O<FB^<^^N^^^^M<C>^>>^K^^^<^B<>^',
  'F<9<IF<K<^L<<^I<<^C^N<^N<^6^^^^^^^^^H<<I<I<<<9^K<^O<OA^<^^L^^^^R<F>^>>^G^^^<^6<>^',
  'F<B<HB<K<^U<<^I<<^C^E<^I<^E^^^^^^^^^H<<G<M<<<C^R<^O<L6^<^^O^^^^K<A>^>>^F^^^<^B<>^',
  'C<5<KD<I<^O<<^P<<^F^R<^C<^9^^^^^^^^^K<<H<I<<<A^X<^Q<IB^>^^I^^^^I<^>^>>^J^^6<^B<>^',
  'C<9<L8<I<^P<<^L<<^C^J<^L<^E^^^^^^^^^N<<H<H<<<7^S<^J<PC^>^^G^^^^Q<^>^>>^G^^A<^9<>^',
  'C<A<O7<G<^K<<^R<<^C^O<^G<^C^^^^^^^^^P<<B<M<<<B^V<^N<M8^>^^J^^^^J<^>^>>^F^^7<^C<>^',
  'D<6<KH<C<^Q<<^P<<^E^M<^G<^9^^^^^^^^^H<<E<J<<<7^U<^Q<V8^>^^N^^^^K<^>^>>^C^^D<^5<>^',
  'E<8<KF<F<^T<<^J<<^6^O<^F<^F^^^^^^^^^D<<E<R<<<A^W<^J<P9^>^^N^^^^N<^>^>>^E^^9<^7<>^',
  'E<D<KA<H<^J<<^O<<^E^I<^J<^C^^^^^^^^^F<<K<M<<<B^X<^I<R9^>^^I^^^^K<^>^>>^F^^A<^7<>^',
  'G<A<G6<M<^S<<^L<<^7^Q<^L<^7^^^^^^^^^J<<E<M<<<9^S<^J<T7^>^^J^^^^O<^>^>>^E^^9<^C<>^',
  'I<A<E9<H<^Q<<^U<<^9^H<^F<^F^^^^^^^^^L<<I<G<<<9^S<^I<WC^>^^M^^^^O<^>^>>^9^^9<^7<>^',
  'J<B<G9<G<^R<<^H<<^6^J<^R<^D^^^^^^^^^G<<E<O<<<9^T<^J<L9^>^^O^^^^N<^>^>>^F^^C<^A<>^',
  'B<7<JF<B<^T<<^V<<^A^L<^R<^8^^^^^^^^^G<<M0^C<<AS>^OF<SB^^^^^^^^^H^<<^>>^E^<9<^8<>^',
  'D<5<JE<H<^S<<^L<<^A^J<^M<^D^^^^^^^^^H<<N0^C<<CS>^KN<QD^^^^^^^^^9^<<^>>^A^<G<^9<>^',
  'D<C<OF<C<^K<<^R<<^7^P<^N<^A^^^^^^^^^C<<N0^C<<DV>^EI<NF^^^^^^^^^E^<<^>>^I^<A<^7<>^',
  'D<D<IB<9<^N<<^R<<^D^K<^S<^D^^^^^^^^^E<<N0^C<<6R>^KN<MD^^^^^^^^^F^<<^>>^G^<D<^6<>^',
  'H<B<J8<C<^K<<^U<<^7^K<^Q<^G^^^^^^^^^K<<N0^C<<6P>^OM<PB^^^^^^^^^M^<<^>>^9^<9<^9<>^',
  'D<A<GD<I<^S<<^H<<^B^P<^D<^B^^^^^^^F^E<N<<<<^<7^O<KO<NB^F^^^^^^^G^<<^>>^F^<D<^A<>^',
  'D<A<MC<D<^N<<^M<<^A^N<^F<^E^^^^^^^C^G<N<<<<^<7^K<MR<LA^F^^^^^^^L^<<^>>^E^<B<^9<>^',
  'G<9<M9<I<^T<<^J<<^A^G<^G<^9^^^^^^^E^E<T<<<<^<A^M<JK<OD^H^^^^^^^G^<<^>>^E^<9<^B<>^',
  'K<B<GA<A<^Q<<^M<<^8^G<^L<^B^^^^^^^G^E<P<<<<^<7^K<PO<I8^M^^^^^^^E^<<^>>^K^<A<^B<>^',
  'C<C<9C<I<^J<<^O<<^B^R<^Y<^A^^^^>^^^^P<<C<^9<<B^R<^M<QB^>^^L^^^^K<^>^>>^F^^A<^8<>^',
  'C<5<ED<H<^R<<^K<<^C^N<^J<^8^^^^P^^N^I<<>^<>^<B^O<^F<Q9^G^^F^^^^E^<<^>>^I^<D<^8<>^',
  'D<B<EE<B<^R<<^G<<^B^G<^J<^H^^^^P^^I^N<<>^<>^<B^J<^M<R8^I^^D^^^^H^<<^>>^D^<B<^B<>^',
  'E<9<D9<K<^P<<^G<<^C^K<^N<^9^^^^K^^P^K<<>^<>^<7^O<^L<K8^K^^I^^^^E^<<^>>^F^<E<^9<>^',
  'H<A<DE<B<^P<<^N<<^A^L<^F<^B^^^^J^^K^P<<>^<>^<9^L<^L<VC^F^^I^^^^C^<<^>>^F^<E<^3<>^',
  'RJJDEPGD<H```````^F````D```D``````9`L````HE``L`L`SJ```C```I````A``B`````^<```````',
  'ORH9GOCG<I```````^I````N```8``````9`I````DA``K`O`OL```C```L````I``3`````^<```````',
  'KNLDDMBC<M```````^J````L```A``````F`I````JF``D`I`IP```E```D````I``C`````^<```````',
  'QQH7IGID<H```````^N````O```8``````8`F````LG``M`S`IG```E```D````D``8`````^<```````',
  'H<S<<K<<LO^<<^<^>^^<R<<<Y^F^O^V>>^^^>^K^<<^>^^P^<<^S^M^^^>>>^>^>^IM<T<<^^>^<^<<^<',
  'S<J<<O<<KJ^<<^<^>^^<N<<<J^Q^S^O>>^^^>^W^<<^>^^O^<<^T^J^^^>>>^>^>^ML<S<<^^>^<^<<^<',
  'M<S<<H<<OM^<<^<^>^^<O<<<N^R^K^X>>^^^>^I^<<^>^^P^<<^I^N^^^>>>^>^>^RU<O<<^^>^<^<<^<',
];

// Hard killers generated using this solver by user Mathemagic:
// http://forum.enjoysudoku.com/the-hardest-killers-t39601.html#p313003
const MATHEMAGIC_KILLERS = [
  'R<<<M<<<U^M<<<^J>^R<<^S<^R^^P>>^>^^^^^<R5^>^MP^>^V<<^^^^^>^L>>^^<^K>^<<R^>>^<>>>^',
  'R<<<M<<<U^M<<<^J>^R<<^S<^R^^O>>^>^^^^^<R6^>^MP^>^V<<^^^^^>^L>>^^<^K>^<<R^>>^<>>>^',
  'S<<<K<<<U^N<<<^K>^P<<^U<^P^^O>>^>^^^^^<Q7^>^NL^>^V<<^^^^^>^N>>^^<^O>^<<P^>>^<>>>^',
  'R<<<M<<<U^M<<<^J>^R<<^S<^Q^^P>>^>^^^^^<R5^>^NP^>^V<<^^^^^>^L>>^^<^K>^<<R^>>^<>>>^',
  'R<<<M<<<U^M<<<^J>^R<<^S<^S^^P>>^>^^^^^<R5^>^LP^>^V<<^^^^^>^L>>^^<^K>^<<R^>>^<>>>^',
  'S<<<K<<<U^N<<<^L>^P<<^U<^O^^O>>^>^^^^^<Q7^>^NL^>^V<<^^^^^>^N>>^^<^O>^<<P^>>^<>>>^',
  'S<<<K<<<V^N<<<^K>^P<<^U<^P^^O>>^>^^^^^<Q7^>^NL^>^V<<^^^^^>^N>>^^<^O>^<<O^>>^<>>>^',
  'S<<<K<<<U^N<<<^K>^P<<^U<^O^^O>>^>^^^^^<Q7^>^NL^>^V<<^^^^^>^N>>^^<^P>^<<P^>>^<>>>^',
  'S<<<K<<<U^O<<<^K>^P<<^U<^P^^O>>^>^^^^^<Q7^>^NL^>^U<<^^^^^>^N>>^^<^O>^<<P^>>^<>>>^',
  'M<<<R<<<N^N<<<^Q>^N<<^O<^S^^L>>^>^^^^^<T6^>^NR^>^R<<^^^^^>^U>>^^<^N>^<<N^>>^<>>>^',
  'S<<<K<<<U^N<<<^K>^P<<^U<^P^^O>>^>^^^^^<Q7^>^NK^>^V<<^^^^^>^O>>^^<^O>^<<P^>>^<>>>^',
  'R<<<P<<<S^L<<<^V>^P<<^K<^M^^Q>>^>^^^^^<R7^>^ML^>^L<<^^^^^>^Q>>^^<^U>^<<Q^>>^<>>>^',
  'M<<<R<<<N^O<<<^Q>^N<<^O<^S^^L>>^>^^^^^<T6^>^NR^>^Q<<^^^^^>^U>>^^<^N>^<<N^>>^<>>>^',
  'M<<<T<<<O^O<<<^R>^N<<^N<^N^^N>>^>^^^^^<U7^>^OO^>^M<<^^^^^>^U>>^^<^R>^<<N^>>^<>>>^',
];

// See http://forum.enjoysudoku.com/human-solvable-zero-t33357.html for
// definition.
const HS_KILLERS = [
  ['3x3:d:k:3841:7705:7705:7705:7705:7705:26:3847:3847:3841:27:3846:3846:3846:7705:4361:3847:3848:3841:3843:4621:4876:28:4361:4361:4619:3848:29:3843:4621:4876:4876:5395:5395:4619:3848:3844:3843:4621:4114:4114:5395:4619:30:3850:3844:4878:4880:31:4114:3605:3605:3850:3850:3844:4878:4880:4880:4372:3350:3605:4632:32:4367:4878:33:4625:4372:3350:3350:4632:4632:4367:4367:4625:4625:4372:34:4375:4375:4375:',
    '875329146312674958469815372146298735253746819798153624687432591521987463934561287'],
  ['3x3:d:k:3587:14:15:16:17:18:19:3586:3586:3587:1543:1543:20:21:22:23:1544:24:25:26:3338:27:28:3337:3337:1544:29:30:31:3338:32:33:34:35:36:37:38:39:40:41:42:43:44:45:46:47:48:49:4365:4365:50:3596:51:52:53:1541:3339:3339:54:55:3596:56:57:58:1541:59:60:61:62:1542:1542:3585:3588:3588:63:64:65:66:67:68:3585:',
    '872314695615972843394586721569241387487635219231897564146758932723469158958123476'],
  ['3x3::k:3595:3595:3844:3844:3090:3336:3336:2575:2575:3595:4620:4620:3348:3090:5:5648:5648:2575:3350:4620:4620:3348:3090:23:5648:5648:3841:3350:2581:24:3348:25:26:27:2579:3841:28:2581:29:30:4625:4625:4625:2579:31:3843:2581:32:33:34:35:36:2579:3335:3843:4878:4878:37:38:39:4618:4618:3335:3341:4878:4878:40:41:42:4618:4618:3593:3341:3341:3334:3334:43:3842:3842:3593:3593:',
    '279648531581739426463251798956483217128975643734162859812597364697324185345816972'],
  ['3x3:d:k:18:4619:4619:4619:8451:3850:3850:3850:19:5388:5388:8451:8451:8451:8451:8451:6671:6671:5388:5388:3076:3076:8451:3333:3333:6671:6671:6414:6414:3076:3076:7937:3333:3333:5904:5904:6414:6414:7937:7937:7937:7937:7937:5904:5904:4109:4109:5382:5382:7937:5895:5895:5137:5137:4109:4109:5382:5382:8194:5895:5895:5137:5137:20:21:8194:8194:8194:8194:8194:22:23:24:4873:4873:4873:8194:4616:4616:4616:25:',
    '527938614439621578681574329872465193914387256365219487256893741793142865148756932'],
  ['3x3:d:k:7707:21:28:4880:4880:4880:29:30:5401:31:7707:3339:3339:5140:3338:3338:5401:32:33:3084:7707:5140:5140:5140:5401:3337:34:5137:3084:7707:7707:5140:2586:5401:3337:6158:5137:3858:3858:3352:3352:3352:2586:2586:6158:5137:3334:3858:3858:4631:4886:4886:3335:6158:35:3334:5139:4631:4631:4886:36:3335:6158:37:5139:3333:3333:4886:3336:3336:38:39:5139:40:41:6927:6927:6927:6927:42:43:',
    '934865127256714983187239465843651279519427638762398541475182396398546712621973854'],
  ['3x3:d:k:9730:9730:9730:9730:9:6150:9987:9987:9987:9730:10:11:12:13:6150:6150:6150:9987:9730:14:15:16:17:6150:18:19:9987:5895:5895:5895:5895:5895:20:6150:21:9987:5895:22:23:24:25:5640:26:8453:8453:9985:27:28:29:5640:30:31:8453:8453:9985:32:33:5640:5640:5640:34:8453:9220:9985:35:36:37:5640:38:39:8453:9220:9985:9985:9985:40:41:9220:9220:9220:9220:',
    '396721845571864239824395617183547926265983471947216583639472158712658394458139762'],
  ['3x3:d:k:6926:6926:6926:7697:7697:7697:6676:6676:6676:6926:6171:797:797:7697:2078:2078:7450:6676:6926:1564:6171:6171:7697:7450:7450:1311:6676:7952:1564:6171:6171:7701:7450:7450:1311:6674:7952:7952:7952:7701:7701:7701:6674:6674:6674:7952:4119:6409:6409:7701:6412:6412:3862:6674:6927:4119:6409:6409:6419:6412:6412:3862:6925:6927:6409:4119:4119:6419:3862:3862:6412:6925:6927:6927:6927:6419:6419:6419:6925:6925:6925:',
    '539827641682145397417396528754268139168739452923451786846572913371984265295613874'],
  ['3x3::k:4369:3849:3849:3849:4111:6918:6918:6918:3858:7434:4369:3849:5141:4111:4111:6918:3858:2841:7434:7434:4369:5141:5141:4111:3858:2841:2841:7434:5910:5910:26:5141:27:28:29:2841:3854:3854:5910:5910:30:31:32:3341:3341:2824:3854:3854:33:7192:34:3341:3341:6924:2824:2824:3860:3600:7192:7192:4371:6924:6924:2824:3860:6919:3600:3600:7192:4363:4371:6924:3860:6919:6919:6919:3600:4363:4363:4363:4371:',
    '621953784873264951954871623746132895198547362532698147215786439369415278487329516'],
  ['3x3:d:k:26:27:3585:3586:3587:3588:4360:5129:5642:28:3585:3586:3587:3588:4360:5129:5642:29:3585:3586:3587:3588:4360:5129:5642:30:31:32:3585:3586:3587:3588:4360:5129:5642:33:2578:2578:2578:34:35:36:4633:4633:4633:37:4632:7191:6934:4373:5396:5651:2577:38:39:40:4632:7191:6934:4373:5396:5651:2577:41:4632:7191:6934:4373:5396:5651:2577:42:4632:7191:6934:4373:43:5396:5651:2577:44:',
    '894637125725418369316259487952143678163872594478965231631784952589321746247596813'],
].map(([input, solution]) => ({ input, solution }));

// From https://github.com/t-dillon/pencilmark_sudoku/tree/master/hard
const HARD_PENCILMARKS = [
  '..34..7.91.34567..1.34567.91234567891.3..6...1.34567....3.56.8.1.3..67891234567891234.67891234.67.9123..67891234567891.345678.123456789123456789123..678.12..56.891.345.7.912....7..12345678912345.7.91.34567..1..456789123456789123.5.78912..56789..34.....12345.7...2345678..234567891234567891234567891.3456789.23...7..12345678912345.7.912345678912345.78912345.7891.3456789.2...6.891.345.789123...7891234.67891234567.91234567...2.4567...2.456..9123456789.2.456789..345678.123456789.2.4567.912345678912345678.12..56.8.12345.7891234567..12.4567891.34.....123.5678912.456...12345.7..12345.78.12345678..2345.7.9123456789.2.4567891234567891234567.91234567891.345..891234567891.3456789...45...91.345678912345.789..345...91234567891..456.89',
  '12..5678912.4567..123.56.8912.4...891234567.912.456789.23...78912.4.678912.4....91234567891..456...1234567891.34.6.8.1234567891.34.6.891234567891.3456.8.123456789.2..567..123456789.23.5.7.912345678912..5.7.91.3456789.23.5.78912345678912345.78912.....89123.56789123.5678912345678912..567.91.3456789123.5.78912.45678912.45..8912345678912345678912345.789.2345.7.9.2345...91234567.91234567891..45....12345....1234567891.34.6.8..234.6.8..23456789.234567....34567.9.234.678.12345678.123456.8.1234567891..456...1.3456..912345678.12.45....12345678912345678912.4567..12.4567.9....56..91.3456789..345678.123456789123456789...45.7891234567891..4567.....45.7..123..67891.34567891234567891234..78912345678912345.789123..678912.4567891234..789',
  '123456789123456789.2345.789.2.4567891.345..891234.678...3.56789..3.56.8912345678912.456..912.45.78912.45.78912.45.7891..4...8.12.4567.9123456789123.56.891234567891.3.56...1234567.91234567891234567891234....91234.67..123.56789123456789.23.5....12345678.12345.789.2.45.78..2..5.78.123.56789.2345678.1.3.567891.3456789123.5.7..1234567891..45.7...2.45.7.9.2..5678912345678912.4567..1.....7891234567891234567891.3.567891.34567.9123456789123.567891.3..6.891234567891.3.56.891.3..6..91234567891.3456.8.1..4.678.123456789.2.45678.12345678.1.34567.....45.78.123456.8912345678.1234567891.3..67.9.234.678912345678912345.789.23..67...23.567891234.67.91234567.91.3.56.891.3456789123456.8912345678912345..8912345678.12345678912.4...8912.45..8.',
  '123456.89.2.4.67...234...891.345.78.123456789123456789.2.4.67891234.67891234567891.34.6.89123456789..34.6.891.34567891234567891.3456.89123456789.234.6.891234567.91.345678912345678.1234567891.3...7..1234567..12345.789123.567.912345678912345.7..12345678912.456789.234.6789123456789.2.4.67.9.2345678912.4.67891234.67891234..7..1...56..91..4567..1234567891.3456789.2.4567.91234567891234567891234.6.891234567891...56..9123456789123456.89123.56789.23456789..3.56.89123..6.89123....8.1234567891.3.56.8912.456789123456789123456789.2...6..91234567891...56.89123.5..891234567891234567891...5.78.12345.78912.45.78.12.45678912345678912345678912..5..8.12345..8.1.34567891234.6789.234..789123..6789.2.4.67...2345678912345678912345678912345.7..',
  '1.3.56789123456789123456789.234.6.89.2345..89.23456789.23456789123456789.234...891234567891...567..12..567.912345678912345678..2.4567.9123.5678.1234567..1234567891.3.567.91...5678.1...56..9123..6789123.567891234567891.3.5678.123456789123.5.789123.56789123.56789123456789.23..6.8.123456789123456789.23..678.123456789.23..67891.345..89123456789123456.891234.6.891.345..8.123456789123456789123456.8.123....891..45...91..45678912.456..91.34567891234567891..45.7.9....567891.34567..12345678912345.789.23.5.78.1234567.91.3..6.8.123456.891234.6789123..678912345678912...6.89123456789123456789.2..5...9123456789123456..91..4567.91234567891234567.91234567891.345.789...45.78..2345...91234..7891.345..8.1.345.7891234567891234567891234...89',
  '1.......91234567891.3.56.891234567891..45..89123456.891...567891234567891234567891.345...912345.789123456.8912345678.12345678..234...89123456789.2345.7.9.234567..1234567.9123456789123.567.912..5678.1234567.9123456789123.567..12345.7.9..3.567..123456789.234..789.23456789123456789123456789.2.4..7891234..789.2.4....9123456789123456789.23...789.23.56789123.56789123456789.23...789123...7891234..7.91234567891..456.891234567891234567.91...5678.1..4567..123456789123456789123456789123456...1.3456.891234567891234567891....678.1.3.567.91234567891...56789123456789123.56789123456789.234..78.12345678.1234567891234567891234..78912345678912.4..78.12345678.123456.89.2345678..23456...1234567891.3456...123456789123456789123456..9123456789',
  '1......8.12.4.6.8912345.7891.34.6.891234567891234.67891234567891234567891..456.891234...8.12345678912345.789123456789123456789.234..789.2345.78..234567..12345678912345678912.45678.12345678912345678.1..4567.9123456789123.5678..2.4567..12.4567..1234.6.8912345678912345.789123456.8.1..456.891234567891234567891234567891..45..891234567.91234567.9123.5.7.91234567.91.3456789123.5.7891.3.5.7891234567.91234567891234.6789.234.67..123456789123..6.8.12345678912345678912345678.12345678.1234567891.34.6...1234567891234567891.3456...1..456..9123456.891234567891234.67..123456789123456789.23456789.23.5.789123456789123456789.23.5.789..3...78.123456789123...789123456789.2.456789....5.78..2345678912.456789.2..5.789123.5.78912345678912..5.789',
];