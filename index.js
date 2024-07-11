// Create an empty array to store todos
const todoList = [{
    name:'write code', 
    dueDate:'2024-07-08'
},{
    name:'pray', 
    dueDate:'2024-07-09'
}];

renderTodoList();

function renderTodoList() {
    // Loop through the array and 
    // Generate the html using javascript
    let todoListHTML = '';
        todoList.forEach((todoObject, index) => {
            const {name, dueDate} = todoObject;
            // create html code for ach array
            const html= `
                <div>${name}</div>
                <div>${dueDate}</div>
                <button class="delete-todo-button js-todo-delete-button">Delete</button>
                `;
            // put the html on web page
            todoListHTML += html;
        })


        console.log(todoListHTML)

        document.querySelector('.js-todo-list').innerHTML = todoListHTML;

        document.querySelectorAll('.js-todo-delete-button').forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            })
        })
}



document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
})

function addTodo() { 
    // select input field
    const inputElement = document.querySelector('.js-name-input');
    // Get text from textbox
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name,
        dueDate,
    });
    console.log(todoList)

    // reset text box after each addition
    inputElement.value = '';  
    
    renderTodoList(); 
}




