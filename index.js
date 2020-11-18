// Your code goes here

document.addEventListener("DOMContentLoaded", function name() {
  console.log("The DOM has loaded");
  let p = document.getElementById("text");
  p.textContent = "This is really cool!";
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
