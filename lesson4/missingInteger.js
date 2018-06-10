const _ = require('lodash')

function solution(A) {

  const F = A.filter((v) => (v > 0));

  if(F.length === 0) {
    return 1;
  }

  const S = F.sort((l, r) => (l - r));
  const D = S.reduce((acc, v) => {
    if(acc.length == 0 || acc[acc.length - 1] !== v) {
      acc.push(v); 
    }
    return acc;
  }, []);

  if(D[0] !== 1) {
    return 1;
  }

  let result = -1;
  for(let i = 1; i < D.length; i++) {
    if(D[i] !== i+1) {
      result=i+1;
      break;
    }
  }

  if(result == -1) {
    return D.length + 1;
  }

  return result;
}

console.log('[1, 3, 6, 4, 1, 2]: ', solution([1, 3, 6, 4, 1, 2]));
console.log('[1, 2, 3]: ', solution([1, 2, 3]));
console.log('[-1, -2, 2, 3]: ', solution([-1, -2, 2, 3]));
console.log('[-1, -2]: ', solution([-1, -2]));
console.log('[-1, -2, 1, 3, 4, 5]: ', solution([-1, -2, 1, 3, 4, 5]));
console.log('[-1, -2, 1, 2, 3, 4, 5]: ', solution([-1, -2, 1, 2, 3, 4, 5]));
console.log('Expecting 6: ', solution( _.shuffle(_.concat(_.range(-1, 6),_.range(7, 10))) ));