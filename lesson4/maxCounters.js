const _ = require('lodash');

function solution(N, A) {
  let R   = {}; 
  let max = 0;
  let floor = 0;
  
  for(let i = 0; i < A.length; i++) {
    if (A[i] === N + 1) {
      R = {};
      floor = max;
    } else {
      let newVal = -1;
      if(R[A[i]-1]) {
        newVal = floor + R[A[i]-1] + 1;
      } else {
        newVal = floor + 1
      }

      if(newVal > max) { 
        max = max + 1;
      }

      R[A[i]-1] = newVal - floor;
    }
  }

  let result = new Array(N);
  for(let i = 0; i < result.length; i++) {
    if(R[i]) {
      result[i] = R[i] + floor;
    } else {
      result[i] = floor;
    }
  }

  return result;
}

console.log('5, [3, 4, 4, 6, 1, 4, 4]: ', solution(5, [3, 4, 4, 6, 1, 4, 4]));
console.log('1, [1]: ', solution(1, [1]));
console.log('1, [2]: ', solution(1, [2]));
console.log('999999, [1000000, 1000000, 1000000, 1000000]: ', solution(999999, _.fill(new Array(1000), 1000000)));



