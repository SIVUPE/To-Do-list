let todoList = document.querySelector('[class="todolist"]')
let addBtn = document.querySelector('[addBtn]')
let task =[]

addBtn.addEventListener('click', function(){
    todoList.innerHTML += createToDo();


    let todoItem =document.querySelectorAll('[class="todoitem"]')
   
    for(let item in [...todoItem]){
        let todotask = [...todoItem][item]
        let InputElem = todotask.children[1]

        InputElem.value = todotask.getAttribute('holdValue')
        
        InputElem.oninput = function(){
            console.log('input is working')
            todotask.setAttribute('holdValue', InputElem.value ) 
            
        }
    }
})

//create todolist
function createToDo(){
    let item =`<li class="item">
    <input type="checkbox">
    <input type="text" placeholder  >
    </li>`;

    return item
}
function addedtask(){
    let addedtask = {
        id : task.length +1,
        name: capitalizedTask,
        createddate: new Date().toDateString(),
        completed: false
     }
 
     tasks.push(addedtask);
     input.value = '';
     getTasks
}


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];





console.log(addedtask)