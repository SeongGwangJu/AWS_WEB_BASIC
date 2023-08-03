console.log(document.getElementById("box1"));
console.log(document.getElementsByClassName("box2"));
console.log(document.getElementsByClassName("box2")[0]);
console.log(document.getElementsByTagName("div"));
console.log(document.getElementsByTagName("div")[0]);

console.log("============console test End=============")
//변수(상수)에 객체를 담는다.
const box1 = document.getElementById("box1");
const box2Array = document.getElementsByClassName("box2");
const divArray = document.getElementsByTagName("div");

box1.innerHTML = `<input type="password">`;
//box2Array[0].innerHTML =`<input type="text">`;
//why not '1' index?

const box1_qs = document.querySelector("#box1");

//box2안의 username-input객체를 셀렉트
const box2Array_qs = document.querySelectorAll(".box2");
const usernameInput = box2Array_qs[0].querySelector(".username-input");
const divArray_qs = document.querySelectorAll("div");

box2Array_qs[0].value = "input value";
console.log(box2Array_qs)

