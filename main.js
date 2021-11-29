const todoList = [];
const todoForm = document.forms['todoForm']
const todoListEl = document.getElementById('todoList');
let search = ''

function clearList(){
  todoListEl.innerHTML=''
}

function addList(index, value){
  const wrapper = document.createElement('div')
  const button = document.createElement('button')
  button.onclick = function(){
    deleteTodo(index)
  }
  button.textContent = 'Done'
  const span = document.createElement('span')
  span.textContent= value
  
  wrapper.appendChild(button)
  wrapper.appendChild(span)
  todoListEl.appendChild(wrapper)
}

function generateList() {
  clearList()
  for(let i = 0; i<todoList.length;i++){
    const e = todoList[i]
    if (e.includes(search)) {
      addList(i,e)
    }
  }
}

todoForm.onsubmit = function(event) {
  event.preventDefault()

  const todo = todoForm['todo'];
  todoList.push(todo.value)
  generateList()
  todoForm.reset()
}

document.getElementById('filter').onkeyup = function(event) {
  search = event.target.value
  generateList()
}

function deleteTodo(index) {
  // delete todoList[key]
  todoList.splice(index,1)
  generateList()
}