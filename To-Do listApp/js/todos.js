const inputLi = document.querySelector(".input")
const addBtn = document.querySelector(".add-btn")
const todoLi = document.querySelector(".todul-li")

const today = new Date()  
let text = today.toLocaleDateString()
let time = today.toLocaleTimeString() 
//setDate.innerHTML = today.toLocalDateString( options);
document.getElementById("date").innerHTML = text
document.getElementById("clock").innerHTML = time

addBtn.addEventListener("click", addTo)
todoLi.addEventListener("click", deleteList)
 

function addTo(event) {
    event.preventDefault()

    if(inputLi.value === ""){
        return alert("you must write a task first!!")
    }
 
    const toDiv = document.createElement("div")
    toDiv.classList.add("todo-div")
   
    const newList = document.createElement("li")
    newList.innerText = inputLi.value
    newList.classList.add("todo-li") 
    toDiv.appendChild(newList)

    saveLocalTodos(inputLi.value) 
   
   const completeBtn = document.createElement("coBtn")
   completeBtn.innerHTML = '<i class= "fas fa-check"><i>'
   completeBtn.classList.add("coBtn")
   toDiv.appendChild(completeBtn)

   const deleteBtn = document.createElement("delBtn")
   deleteBtn.innerHTML = '<i class= "fas fa-trash"><i>'
   deleteBtn.classList.add("delBtn")
   toDiv.appendChild(deleteBtn)
   
   todoLi.appendChild(toDiv)
   inputLi.value = ""  
}
function deleteList(e){
    const item = e.target
    if(item.classList[0] === "delBtn"){
       const toDiv =  item.parentElement
       toDiv.classList.add("drop")
       toDiv.addEventListener('transitionend', function(){
        toDiv.remove()
    })
    }
    if(item.classList[0] === "coBtn"){
        const toDiv = item.parentElement
        toDiv.classList.add("completed")
        toDiv.addEventListener("transition", function(){
        toDiv.style()
    })
    }
}    
function saveLocalTodos(todo) {
    let todos

    if(localStorage.getItem('todo') === null){
       todos = []
    }else{
        todos = JSON.parse(localStorage.getItem('todo'));
    }
    todos.push(todo)
    localStorage.setItem('todo', JSON.stringify(todos));    
    
    JSON.parse(window.localStorage.getItem('todos'));
    console.log(todos)
}




























    
