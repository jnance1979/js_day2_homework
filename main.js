// element.addEventListener('action', callback_func)

// target the unordered list
let todoListElement = document.getElementById('todoList')

// function that creates event listeners
const createEvents = (el) => {
    // add mouseenter event listener
    el.addEventListener('mouseenter', (e) => {
        e.target.classList.add('active')
    })
    // add mouseleave event listener
    el.addEventListener('mouseleave', (e) => {
        e.target.classList.remove('active')
    })

    function lineThrough() {
        el.classList.remove('active')
        el.classList.add('disabled')
        el.style.textDecoration = 'line-through';        
    }

    function Undo() {
        // el.classList.remove('active')
        el.classList.remove('disabled')
        el.style.textDecoration = 'none';
    }

    // add click event listener
    el.addEventListener('click', (e) => {
        lineThrough()
        e.stopPropagation();
})

    document.addEventListener('click', Undo)

    // document.addEventListener('click', () => {
    //     for (i = 0; i < todoListElement.length; i++) {
    //         if (todoListElement[i].style.textDecoration === 'none') {
    //         } Undo();
    //     }
    // })

}

let clear = document.getElementById('clearAll');
let input = document.getElementById('todoInputField');
let form = document.getElementById('todoForm');


clear.addEventListener('click', (e) => {
    // prevent page refresh
    e.preventDefault();
    while (todoListElement.firstChild) {
    todoListElement.removeChild(todoListElement.firstChild);
    }
    console.log('clear')
})


form.addEventListener('submit', (e) => {
    // prevent page refresh
    e.preventDefault();
    console.log('hello')
    // create new dom element using JavaScript
    let li = document.createElement('li')
    let stuff = document.createElement('li')

    // add the nevessary classes to the list element
    li.classList.add('list-group-item')

    // set the intter text of the list element to the input field's value
    li.innerText = input.value

    // stick all of our events to the list item
    createEvents(li);

    // add the item into the unordered list
    todoListElement.appendChild(li);

    // clear the todo input field text
    input.value = '';
    
})
