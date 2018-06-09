function solution(A) {
  if(A.length === 0) { return 1; }
  
  const sorted = A.sort((l, r) => (l-r))

  if(sorted[0] !== 1) { return 1; }

  for(let i = 1; i < sorted.length; i++) {
    if(A[i] !== (i + 1)) {
      return i + 1
    }
  }

  return sorted.length + 1;
}

console.log('[2, 3, 1, 5]: ', solution([2, 3, 1, 5]));
console.log('[]: ', solution([]));
console.log('[1, 2, 3]: ', solution([1, 2, 3]));
console.log('[1]: ', solution([1]));
console.log('[2]: ', solution([2]));
