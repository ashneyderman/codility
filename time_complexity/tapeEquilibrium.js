function solution(A) {
  if(A.length === 1) { return Math.abs(A[0]); }
  if(A.length === 2) { return Math.abs(A[0] - A[1]); }

  let sumLeft = A[0];
  let sumRight = A.slice(1).reduce((acc, v) => (acc + v), 0);
  let result = Math.abs(sumLeft - sumRight);
  for(let p = 1; p < A.length - 1; p++) {
    let newSumLeft = sumLeft + A[p];
    let newSumRight = sumRight - A[p];
    if(Math.abs(newSumLeft - newSumRight) < result) {
      result = Math.abs(newSumLeft - newSumRight);
    }
    sumLeft = newSumLeft;
    sumRight = newSumRight;
  }

  return result;
}

console.log('[3, 1, 2, 4, 3]: ', solution([3, 1, 2, 4, 3]));
console.log('[3]: ', solution([3]));
console.log('[3, -4]: ', solution([3, -4]));
console.log('[3, -4, -5]: ', solution([3, -4, -5]));
console.log('[-10, -20, -30, -40, 100]: ', solution([-10, -20, -30, -40, 100]));
console.log('[-1, 1, -1, -1, -1]: ', solution([-1, 1, -1, -1, -1]));

