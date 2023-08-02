window.onload = () => {
    console.log("userList");
    console.log(userList);

    console.log("userList[0].username");
    console.log(userList[0].username);
    
    //출력이 어떻게 되는지 볼 것
    console.log("`username: userList[0].username`");
    console.log(`username: userList[0].username`);
    console.log("`username: ${userList[0].username}`");
    console.log(`username: ${userList[0].username}`); 
    //${}안에는 변수로 인식함
    //근데 왜 백쿼터를 써야하는데?
    
    loadUserList();

    const numbers = [1,2,3,4,5];
    const fx = (n) => {
        return n * 2;
    }
    const numbers2 = numbers.map(fx);
    //넘버스 2랑 3이랑 똑같다.
    const numbers3 = numbers.map((n) => {
        return n * 2;
    });

    console.log("`numbers: ${numbers}`");
    console.log(`numbers: ${numbers}`);

    console.log("numbers.join("-")");
    console.log(numbers.join("-"));

    console.log(`numbers2: ${numbers2}`);
    console.log(`numbers3: ${numbers3}`);



}

const userList = new Array();
userList.push({username: "aaa", password: "1111" });
 //*이 자체가 객체다. { key : value }형태
userList.push({username: "bbb", password: "2222" });
userList.push({username: "ccc", password: "3333" });
userList.push({username: "ddd", password: "4444" });
userList.push({username: "eee", password: "5555" });
userList.push({username: "fff", password: "6666" });

const loadUserList = () => {
    const userListTbody = document.querySelector(".user-list");

    //innerHTML : HTML안에 밑의 내용을 통째로 넣을 수 있다.
    // '${}' 형태 ->변수를 넣을 수 있다.
    for(let i = 0; i<userList.length; i++) {
        //반복돌면서 문자열이 추가된다
        userListTbody.innerHTML += ` 
        <tr>
            <td>${userList[i].username}</td>
            <td>${userList[i].password}</td>
        </tr>
        `;
    }

    //foreach
    //userList에서 

    /* const fx = (user) => {
        return `
            <tr>
                <td>${user.username}</td>
                <td>${user.password}</td>
            </tr>
        `
    } */
                //파란괄호 시작부터 위의 fx를 넣은거랑 똑같은 결과임.
                
    const mapTest = userList.map((user) => {
        return `
            <tr>
                <td>${user.username}</td>
                <td>${user.password}</td>
            </tr>
        `
    });
    
    console.log("mapTest");   
    console.log(mapTest);

    console.log("mapTest.join()");   
    console.log(mapTest.join(""));

};
