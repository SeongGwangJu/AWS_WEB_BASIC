const sidebarToggleButtonOnClickHandle = () => {
    const sidebar = document.querySelector(".sidebar");
    const sidebarToggleButton = document.querySelector(".siderbar-toggle-button");

    if(sidebar.classList.contains("isSidebarOpen")) { //열려있으면
        sidebar.classList.remove("isSidebarOpen"); //닫는다(삭제한다)
        sidebarToggleButton.innerHTML = '▶'; 
    } else{ //닫혀있으면
        sidebar.classList.add("isSidebarOpen"); //연다(추가한다)
        sidebarToggleButton.innerHTML = '◀';
    }

}