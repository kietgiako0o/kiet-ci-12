function sayHello() {
  console.log("hello world");
}

document.getElementById("btnClickMe")
.addEventListener("click", function (evt) {
  console.log("hello world 2");
});

document.getElementById("btnClickMe")
.addEventListener("click", function (evt) {
  console.log("hello world 3");
});
