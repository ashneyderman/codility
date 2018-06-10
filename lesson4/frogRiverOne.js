// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  let startAt = 0;

  let Path = new Array(X);
  for(let j = 0; j < A.length; j++) {
    let position = A[j];
    if(position > X) {
      continue;
    }

    if(!Path[position-1]) {
      Path[position-1] = j;
    }
  }

  let result = -1;
  for(let j = 0; j < Path.length; j++) {
    if(Path[j] === undefined) {
      return -1;
    }

    if(Path[j] > result) {
      result = Path[j];
    }
  }

  return result;
}

console.log('[1, 3, 1, 4, 2, 3, 5, 4]: ', solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
console.log('[1, 3, 1, 4, 2, 3, 5, 4]: ', solution(3, [1, 3, 1, 4, 2, 3, 5, 4]));
console.log('[1, 3, 1, 3, 2, 1, 3]: ', solution(3, [1, 3, 1, 3, 2, 1, 3]));
console.log('[1, 2, 1, 2]: ', solution(3, [1, 2, 1, 2]));
console.log('[1]: ', solution(1, [1]));


