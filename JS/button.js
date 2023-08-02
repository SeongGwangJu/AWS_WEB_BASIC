const plus = () => {
    //클래스 'Result'의 객체(정보)를 들고와라
    const resultObj = document.querySelector(".result");
    //HTML태그안에 들어있는 요소를 가지고와서 int로 변환해라
    let oldNumber = parseInt(resultObj.innerHTML);

    resultObj.innerHTML = oldNumber + 1;
}

const minus = () => {
    const resultObj = document.querySelector(".result");
    let oldNumber = parseInt(resultObj.innerHTML);

    resultObj.innerHTML = oldNumber - 1;
}