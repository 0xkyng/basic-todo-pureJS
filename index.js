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
        todoList.forEach(function(todoObject, index) {
            const {name, dueDate} = todoObject;
            // create html code for ach array
            const html= `
                <div>${name}</div>
                <div>${dueDate}</div>
                <button onclick="
                    todoList.splice(${index}, 1);
                    renderTodoList();
                " class="delete-todo-button">Delete</button>
                `;
            // put the html on web page
            todoListHTML += html;
        })


        // for (let i = 0; i < todoList.length; i++) {
        //     const todoObject = todoList[i];
        //     const {name, dueDate} = todoObject;
        //     // create html code for ach array
        //     const html= `
        //         <div>${name}</div>
        //         <div>${dueDate}</div>
        //         <button onclick="
        //             todoList.splice(${i}, 1);
        //             renderTodoList();
        //         " class="delete-todo-button">Delete</button>
        //         `;
        //     // put the html on web page
        //     todoListHTML += html;
        // }

        console.log(todoListHTML)

        document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

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




// const nums = [1, 2, 3];
//     let total = 0; 

//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         total += num;
//     }

//     const numsDoubled = [];

//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         numsDoubled.push( num * 2);
//     }