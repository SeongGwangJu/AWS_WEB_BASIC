window.onload = () => {
    main();
}

function main(){
    var a = 10;
    let b = 20; //변수
    const c = 30; //상수

    console.log(a);
    console.log(b);
    console.log(c);
    
    var a = 40;
    console.log(a);
    // let b = 50; 오류
    b = 50;
    console.log(b);
    //c = 60; //상수라서 재할당 불가
    //console.log(c);

    let name = "김준일";
    let age = 30;
    let score = 80.5;
    let status =true;

    console.log("이름" +name + "type("+ typeof(name) + ")");
    console.log("나이" + age + "type("+ typeof(age) + ")");
    console.log("성적" +score  + "type("+ typeof(score) + ")");
    console.log("상태" + status + "type("+ typeof(status) + ")");

    console.log("10" == 10); //값만 비교
    console.log("10" === 10); //값+ 자료형 비교
    console.log("10" !== 10); //값이 같지 않거나, 자료형이 같지 않으면 true.

    let count;
    console.log(count);
    let count2 = null;
    console.log(count2);

    if(count === undefined 
        || count ===null
        || count ===0
        || count==="")
        { console.log("긴if문"+true);}

    //자바스크립트는 값이 undefined,null,0,""이면 false 결과를 반환.
    if(!count) {
        console.log("짧은if문"+true);
    }

    if(!!count) {
        console.log("값이 있음");
    }
 }
