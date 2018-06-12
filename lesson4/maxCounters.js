function solution(N, A) {
  let R   = new Array(N); 
  let max = 0;
  let floor = 0; 
  
  for(let i = 0; i < A.length; i++) {
    if (A[i] === N + 1) {
      R = new Array(N);
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

  for(let i = 0; i < R.length; i++) {
    if(R[i]) {
      R[i] = R[i] + floor;
    } else {
      R[i] = floor;
    }
  }

  return R;
}

console.log('5, [3, 4, 4, 6, 1, 4, 4]: ', solution(5, [3, 4, 4, 6, 1, 4, 4]));
console.log('1, [1]: ', solution(1, [1]));


