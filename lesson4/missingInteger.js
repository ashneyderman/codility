const _ = require('lodash')

function solution(A) {
  const F = A.filter((v) => (v > 0));
  if(F.length === 0) {
    return 1;
  }

  const S = F.sort((l, r) => (l - r));
  if(S[0] !== 1) {
    return 1;
  }

  let result = -1;
  for(let i = 1; i < S.length; i++) {
    if(S[i] === S[i-1]) { continue; }
    if(S[i] !== (S[i-1] + 1)) {
      result=S[i-1] + 1;
      break;
    }
  }

  if(result == -1) {
    return S[S.length-1] + 1;
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