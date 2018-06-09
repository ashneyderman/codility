let s0 = Symbol(1123);
const f0 = (s) => {
  console.log('s === s0: ', s === s0);
}
f0(s0);
console.log('s0.toString(): ', s0.toString());

// with
console.log("\n\n\nWith:");
var obj = {
  [Symbol.toPrimitive](hint) {
    console.log('hint: ', hint);
    if (hint == 'number') {
      return 10;
    }
    if (hint == 'string') {
      return 'hello';
    }
    return true;
  },
  x: "X value - string"
};

console.log('+obj:', +obj);
console.log('`${obj}-adsfasd`:', `${obj}-adsfasd`);
console.log('0 + obj:', 3 + obj);
console.log('obj.x', obj.x);

// without
console.log("\n\n\nWithout:");
var obj = {
  x: "X value - string"
};

console.log('+obj:', +obj);
console.log('`${obj}-adsfasd`:', `${obj}-adsfasd`);
console.log('0 + obj:', 3 + obj);
console.log('obj.x', obj.x);

console.log("\n\n\nReplace With:");
class Replace1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.replace](string) {
    return `s/${string}/${this.value}/g`;
  }
}

console.log('foo'.replace(new Replace1('bar')));