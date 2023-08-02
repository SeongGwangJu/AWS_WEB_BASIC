window.onload = () => {
    loadBookList();
    loadBookList2();
    loadBookList3();
};

const bookList = new Array();

bookList.push({
    bookName: "자바의정석",
    author: "남궁석",
    publication: "모름ㅋ"
});
bookList.push({
    bookName: "자바스크립트의정석",
    author: "김준일",
    publication: "코리아it"
});
bookList.push({
    bookName: "자바의허접",
    author: "주성광",
    publication: "우리집"
});
bookList.push({
    bookName: "DoItHTML",
    author: "고경희",
    publication: "이지스 퍼블리싱"
});
bookList.push({
    bookName: "수학의정석",
    author: "홍성대",
    publication: "성지"
});

const loadBookList = () => {
    const bookListOl = document.querySelector(".book-list")
    bookListOl.innerHTML = ''; //초기화 후 대입하면 기존 클래스 아래를 '대체'함. 
    for(let i =0; i<bookList.length; i++) {
        bookListOl.innerHTML += `
        <li>
            <span>${bookList[i].bookName}</span>
            <span>${bookList[i].author}</span>
            <span>${bookList[i].publication}</span>
        </li>
        `;
    }
};

//강사님풀이(2)
const loadBookList2 = () => {
    const bookListOl2 = document.querySelector(".book-list2")

    bookListOl2.innerHTML = bookList.map(book => {
        return `
            <li>
                <span>${book.bookName}</span> 
                <span>${book.author}</span>
                <span>${book.publication}</span>
            </li>
        `;
    }).join("")
}

//강사님 풀이를 풀어서 이해해보자(3)
const loadBookList3 = () => {
    const bookListOl3 = document.querySelector(".book-list3")

    //위의 for문을 아래의 foreach로 바꿔보자
    const fx = (book) => {
        return `
            <li>
                <span>${book.bookName}</span> 
                <span>${book.author}</span>
                <span>${book.publication}</span>
            </li>
        `
    }

    const bookTest = bookList.map(fx);
    
    bookListOl3.innerHTML = bookTest.join("")
    
}


const addBook = () => {
    const bookNameInput = document.querySelector(".book-name");
    const authorInput = document.querySelector(".author");
    const publicationInput = document.querySelector(".publisher");

    bookList.push({
        bookName: bookNameInput.value,
        author: authorInput.value,
        publication: publicationInput.value
    });

    loadBookList2();

}

const addBookOnClickHandle = () => {
    const book = {
        bookName: document.querySelector(".book-name").value,
        author: document.querySelector(".author").value,
        publication: document.querySelector(".publisher").value
    }

    bookList.push(book)
    loadBookList2();

}