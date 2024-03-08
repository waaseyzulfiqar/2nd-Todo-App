const input = document.querySelector('#input')

const ol = document.querySelector('ol')

const todo = []


function renderTodo(){

    ol.innerHTML = ''

    for(let i = 0; i < todo.length; i++){
        ol.innerHTML = ol.innerHTML + `<li id="todoJs">${todo[i]}

        <div>
        <button onclick = "liDelBtn(${i})" class= "del-btn()">Delete</button>
        <button onclick = "liEditBtn(${i})" class= "edit-btn()">Edit</button>
        </div>

        </li>`
    }

}


function showTodoList(){

    todo.push(input.value)

    input.value = ''

    renderTodo()
}



function liDelBtn(index){

    todo.splice(index, 1)

    renderTodo()
}



function liEditBtn(index){

    const userInput = prompt('Enter the value...')

    todo.splice(index, 1, userInput)

    renderTodo()

}