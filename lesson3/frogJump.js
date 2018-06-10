function solution(X, Y, D) {
  if(X === Y) { return 0; }

  return Math.ceil((Y - X)/D);
}

console.log('10, 20, 3: ', solution(10, 20, 3));
console.log('10, 19, 3: ', solution(10, 19, 3));
console.log('10, 10: ', solution(10, 10, 3));