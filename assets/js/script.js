let estrelas = document.getElementById("estrelas");
let moon = document.getElementById("moon");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let text = document.getElementById("text");
let btn = document.getElementById("btn");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  estrelas.style.left = value * 0.25 + "px";
  moon.style.marginLeft = value * 0.2 + "px";
  moon.style.marginTop = value * 0.7 + "px";
  num1.style.left = value * 0.25 + "px";
  num2.style.left = value * 0.4 + "px";
  num3.style.left = value * 0.2 + "px";
  num4.style.left = value * 0.1 + "px";
  text.style.marginBottom = value * 2 + "px";
  text.style.marginRight = value * 0.5 + "px";
  btn.style.marginTop = value * 0.25 + "px";
});
