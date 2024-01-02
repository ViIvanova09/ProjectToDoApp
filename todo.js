let htmlList = document.getElementById("list");
let inputBox = document.getElementById("myInput");


htmlList.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
});

function addTask(taskText){
    if(taskText !== ''){
        let li = document.createElement("li");
        li.innerHTML = taskText;
        htmlList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
        inputBox.value = '';
    }
}

function buttonSave_onClick(){
    addTask(inputBox.value);
}

function textArea_onKeyPress(){
    var key = window.event.keyCode;
    if (key === 13) {
        addTask(inputBox.value);
    }
}
function getTodos(url){
fetch(url)
.then(r=> {
    if(!r.ok){
        throw Error(`Response not ok: ${r.status}`)
    }
    return r.json()
}) 
.then(data => {
    console.log(data);
    todos = data
})
.catch(err=>console.log(err))

}const basePath = 'http://localhost:3000'
const todos = []; 
getTodos(basePath + '/todos');

