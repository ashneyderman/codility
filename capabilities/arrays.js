console.log('REDUCE');
console.log(
  '[1, 2, 3].reduce((acc, v) => (acc + v), 0): ',
  [1, 2, 3].reduce((acc, v) => (acc + v), 0)
);

console.log('\n\nSORT');
console.log(
  ` Sort objects
  [{idx: 1, val: "idx - 1"},
   {idx: 3, val: "idx - 3"},
   {idx: 2, val: "idx - 2"},
   {idx: 0, val: "idx - 0"},
  ].sort(({idx: i0}, {idx: i1}) => (i0 - i1)): \n\n`,
  [{idx: 1, val: "idx - 1"},
   {idx: 3, val: "idx - 3"},
   {idx: 2, val: "idx - 2"},
   {idx: 0, val: "idx - 0"},
  ].sort(({idx: i0}, {idx: i1}) => (i0 - i1))
)

console.log('\n[0, 2, 1, 5, 4].sort(): ', [0, 2, 1, 5, 4].sort());
console.log(
  '\n["parameter", "abacus", "zipper", "moon", "shot"].sort(): ', 
  ["parameter", "abacus", "zipper", "moon", "shot"].sort()
);

console.log('\n\nMAP');