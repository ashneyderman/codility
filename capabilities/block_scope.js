function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

console.log("let i");
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1);
}

// versus
sleep(100).then(() => {
  console.log("const j");
  for (var j = 0; j < 5; j++) {
    setTimeout(() => console.log(j), 1);
  } 
})
