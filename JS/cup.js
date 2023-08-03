window.onload = () => {
    const cupImg = document.querySelector(".img-border img");
    cupImg.src = "./images/cup2.jpg";
    
    //cupImg.onclick = cupImgOnClickHandle; 
    //위에랑 아래랑 똑같은거임. 
    document.onclick = () => {
        if(cupImg.src.includes("cup1")) {
            cupImg.src = "./images/cup2.jpg";
        }else {
            cupImg.src = "./images/cup1.jpg";
        }
    }



}

const cupImgOnClickHandle = (e) => { 
    if(e.target.src.includes("cup1")) { 
        e.target.src = "./images/cup2.jpg";
    }else {
        e.target.src = "./images/cup1.jpg";
    }
    //e : 모든 이벤트를 담은 이벤트 객체
    //e.tarket : 이벤트가 일어난 객체(HTML 요소)를 가리킴 즉 querySelector한거랑 같음.
    //즉 e.target = cupImg = document.querySelector(".img-border img")
    //e.target.src는 클릭 이벤트가 발생한 요소의 src 속성을 가리킴
}