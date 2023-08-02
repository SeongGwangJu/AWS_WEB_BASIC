
const signinButtonOnClickHandle = () => {
   AccountService.getInstance().signin(); //싱글톤
};

class AccountService {
    
    authUsername = "aaa";
    authPassword = "1234";

    // 변수명 앞에 # 붙이면 private 접근지정자
    static #instance = null;

    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new AccountService();
        }
        return this.#instance;
    }

    signin() {
        //객체 2개 들고오고 출력
        const usernameInput = document.querySelector(".username-input");
        const passwordInput = document.querySelector(".password-input");
        const username = usernameInput.value;
        const password = passwordInput.value;

        console.log(usernameInput.value);
        console.log(passwordInput.value);
        
        if(username !== this.authUsername || password !== this.authPassword) {
            alert("사용자 정보를 확인하세요.");
            return;
        }

        alert("로그인 성공");
        
    }
}