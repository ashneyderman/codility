
// reject
new Promise((resolve, reject) => {
  reject(1233);
}).catch(error => {
  console.log('error: ', error)
});

// resolve
new Promise((resolve, reject) => {
  resolve('test');
}).then(value => {
  console.log('value: ', value)
});

// resolve with timeout
new Promise((resolve, reject) => {
  setTimeout(() => resolve(456), 100);
}).then(value => {
  console.log('value: ', value)
});
