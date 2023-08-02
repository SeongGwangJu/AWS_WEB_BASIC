

function add(x, y) {
    return x + y;
}

console.log(add(10,20));

function sub(x,y) {
    return x-y;
}

console.log(sub(100,10));


//변수에 함수(익명함수 + 즉시실행함수)를 담았다
const printinfo = function() {
    console.log("정보출력");
};

// 변수 printinfo의 type은 함수
console.log(typeof(printinfo));

//함수의 매개변수에 printinfo변수를 담았다
function callback(fx) {
    console.log("콜백 함수");
    fx(); //매개변수인 함수가 실행된다.
}

callback(printinfo); //변수처럼 써먹는 함수!!


//익명함수
const fx1 = function(a) {
    console.log("a: " + a);
}
fx1(10);

//화살표 함수(람다) :함수이름 지우고 =>
const fx2 = (b) => {
    console.log("b: " + b);
}

fx2(20);

