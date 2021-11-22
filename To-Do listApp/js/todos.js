const inputLi = document.querySelector(".input")
const addBtn = document.querySelector(".add-btn")
const todoLi = document.querySelector(".todul-li")



//  const options = {weekday : "long", month : "short", day : "numeric"};
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



// function getTodos(){
//     let todos
//     if(localStorage,getItem('todos') === null){
//         todos = []
//     }else{
//         todos = JSON.parse(localStorage.getItem('todos'))
//     }
//     todos.forEach(function(todo) {
//         const toDiv = document.createElement('div')
//         toDiv.classList.add('todo')

//         const newList = document.createElement('li')
//          newList.innerText = todo
//         newList.classList.add('todo-il')
//         toDiv.appendChild(newList)
//     })
// }









    
//     addTo(todos)
//   }
  

// const saveListLocalStorage = () => {
//     localStorage.setItem("doList", todoLi.innerHTML)
// }

// addBtn.addEventListener('click', saveListLocalStorage)

// const savedTasks = localStorage.getItem("doList")

// if(savedTasks){
//     todoLi.innerText = savedTasks
// }
// localStorage.clear()























//  button.addEventListener("click", function(){

//     for(let i=0; i< itemList.length; i++){  
//         if(inputLi === "") {
//             alert("You must write a task!")
//         }else{     
//         itemList.push(inputLi.value)
//         inputLi.value = ""
//      ul.innerHTML = "<li>" + itemList[i] + "</li>"
//     let li = document.createElement("li")
//     li.textContent = myList[i]
//     todos.append(li)
//     } 
// }
// }) 










// function newList(){
//     const li = document.createElement('li')
//     const inputLi = document.getElementById("input").value
//     let list = document.createTextNode(inputLi) 
//    console.log(list)
//     li.append(list)
//     if(inputLi === ""){
//         alert("You must write a task!")
//     } else{
//         document.getElementsById("todos-li").append(li)
//     }
// } 




// addBtn.addEventListener("click", function(){
//     itemList.push(inputLi.value)
//     inputLi.value = ""
  
// })
 
  




   
    // for(let i=0; i< itemList.length; i++){  
    //     let li = document.createElement("li")
    //     li.textContent = itemList
    //     ul.append(li)  
    // itemList.push(inputLi.value)
    // inputLi.value = ""
    // console.log("just clicked")
//     }
// })

 










//  addBtn.addEventListener("click", function(){
//     myList.push(inputList.value)
   
// })
// function pencil(){
//     for(let i=0; i< myList.length; i++){
//     // todos.innerHTML = "<li>" + myList[i] + "</li>"
//     let li = document.createElement("li")
//     li.textContent = myList[i]
//     todos.append(li)
// }
// }




    
