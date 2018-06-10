function solution(A) {
  const S = A.sort((l, r) => (l - r));

  if(S[S.length - 1] !== S.length) {
    return 0;
  }

  if(S[0] !== 1) {
    return 0;
  }

  for(let i = 0; i < S.length; i++) {
    if(S[i] !== i + 1) {
      return 0;
    }
  }

  return 1;
}

console.log('[4, 1, 3, 2]:', solution([4, 1, 3, 2]));
console.log('[4, 1, 3]:', solution([4, 1, 3]));
console.log('[]:', solution([]));
console.log('[1, 1, 2, 3]:', solution([1, 1, 2, 3]));
console.log('[2, 3]:', solution([2, 3]));
console.log('[2, 3, 1]:', solution([2, 3, 1]));