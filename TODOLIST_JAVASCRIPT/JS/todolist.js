const addTodoButtonOnClickHandle = () => {
    generateTodoObj();
}

const addTodoOnKeyUpHandle = (event) => {
    if (event.keyCode === 13) { //13 :ENTER
        generateTodoObj();
    }
}

const checkedOnChangeHandle = (target) => {
    TodoListService.getInstance().setCompletStatus(target.value, target.checked);
}

const modifyTodoOnClickHandle =(target) => {
    openModal();
    //const modal = document.querySelector(".modal");
    modifyModal(TodoListService.getInstance().getTodoById(target.value));
    console.log("modifyTodoOnClickHandle")
}

const deleteTodoOnClickHandle = (target) => {
    TodoListService.getInstance().removeTodo(target.value);
}

const generateTodoObj = () => {
    const todoContent = document.querySelector(".todolist-header-items .text-input").value;

    const todoObj = {
        id: 0,
        todoContent: todoContent,
        createDate: DateUtils.toStringByFormatting(new Date()),
        completStatus: false
    };

    console.log("executed: generateTodoObj()");
    console.log(todoObj);
    TodoListService.getInstance().addTodo(todoObj);
}

class TodoListService {
    //싱글톤
    static #instance = null;
    static getInstance() {
        if(this.#instance === null) {
            this.#instance = new TodoListService();
        }
        return this.#instance;
    }

    todoList = new Array();
    todoIndex = 1;

    constructor() {
        this.loadTodoList();
    }

    loadTodoList() {
        //데이터가 있으면(이중부정)? 가지고 오고, 아니면 새 배열로 만든다
        //JSON.parse(Json문자열) : JSON'문자열' => 객체로 변환
        //JSON.stringify(객체명) : 객체 -> 'JSON문자열'
        this.todoList = !!localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : new Array();
       
        /*this.todoList[this.todoList.length - 1]?.id = 배열의 마지막 id값인데,
        해당 요소가 존재하지 않을 경우에도 에러를 발생시키지 않고 undefined를 반환함 */
        //값이 있으면 id값을 Index에 넣고 없으면 false를 반환(!!붙였으니 boolean) 배열이 비어있으면 null이므로(에러), 1로 바꿈;
        this.todoIndex = !!this.todoList[this.todoList.length - 1]?.id ? this.todoList[this.todoList.length - 1].id + 1 : 1;
    }
    
    saveLocalStorage() {
        localStorage.setItem("todoList", JSON.stringify(this.todoList));
    }

    getTodoById(id) {
        
        //필터 : 괄호 안의 조건에 맞는 녀석만 배열에 넣어줌)
        //console.log(this.todoList);
        //console.log(this.todoList.filter(todo => todo.id === parseInt(id)));
        //console.log(this.todoList.filter(todo => todo.id === parseInt(id))[0]);
        return this.todoList.filter(todo => todo.id === parseInt(id))[0];
    }

    addTodo(todoObj) {
        //'todo'객체 만듬
        const todo = {
            ...todoObj, //깊은복사. todoObj의 함수 선언문 자체를 갖고온거랑 같음
            id: this.todoIndex
        }
        //console test
        console.log("executed: addtodo()\n todo ▼");
        console.log(todo);
        this.todoList.push(todo);
        //Key / Value : localStorage에서는 String만 쓸수있기 때문에, 배열(객체)를 문자열로 변환
        this.saveLocalStorage();
        this.updateTodoList();
        this.todoIndex++;
    }

    setCompletStatus(id, status) {
        console.log("setCompletStatus ▼");
        this.todoList.forEach((todo, index) => {
            if(todo.id === parseInt(id)) { //id = boolean이라, int로 변환 후 비교
                this.todoList[index].completStatus = status;
            }
        //console.log(this.todoList);
        });

        this.saveLocalStorage();
    }

    setTodo(todoObj) {
        for(let i = 0; i < this.todoList.length; i++) {
            if(this.todoList[i].id === todoObj.id) {
                this.todoList[i] = todoObj;
                break;
            }
        }
        this.saveLocalStorage();
        this.updateTodoList();
    }

    removeTodo(id) {
        console.log(this.todoList);
        this.todoList = this.todoList.filter(todo => {
            return todo.id !== parseInt(id); //아이디랑 같지 않은것 만 배열에 담는다(같은건 지워야겠지?)
        });
        console.log(this.todoList);
        console.log("비교해보고 없는 놈이 범인입니다");

        this.saveLocalStorage(); //저장
        this.updateTodoList(); //불러오기
    }

    updateTodoList() {
        const todoListMainContainer = document.querySelector(".todolist-main-container");

        todoListMainContainer.innerHTML = this.todoList.map(todo => {
            return `
              <li class="todolist-items">
							<div class="item-left">
								<input type="checkbox" id="complet-chkbox${todo.id}" class="complet-chkboxs"
                                ${todo.completStatus ? "checked" : ""} value="${todo.id}" onchange="checkedOnChangeHandle(this);">
								<label for="complet-chkbox${todo.id}"></label>
							</div>
							<div class="item-center">
								<pre class="todolist-content">${todo.todoContent}</pre>
							</div>
							<div class="item-right">
								<p class="todolist-date">${todo.createDate}</p>
								<div class="todolist-item-buttons">
									<button class="btn btn-edit" value="${todo.id}" onclick="modifyTodoOnClickHandle(this);">수정</button>
									<button class="btn btn-remove" value="${todo.id}" onclick="deleteTodoOnClickHandle(this);">삭제</button>
								</div>
							</div>
						</li>
                `;
        }).join("");

    }


}