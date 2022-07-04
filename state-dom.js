const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const todo = document.querySelector('.tasks')

const todoList = [
    {
        text: 'Поехать в интукод',
        done: false 
    },

    {
        text: 'Покушать в столовке',
        done: false 
    },

    {
        text: 'Решить тудушку',
        done: false 
    },

    {
        text: 'Полететь в космос',
        done: false 
    },

    {
        text: 'Поиграть в мафию',
        done: false 
    }
]

btn.addEventListener('click', () => {
    if (todoList.length < 7) {

        addTodo()
    }
})


const render = () => {
    todo.innerHTML = ''
    todoList.forEach((el, index) => {
        const todoContainer = document.createElement('div')
        const todoCheckbox = document.createElement('input')
        const todoText = document.createElement('p')
        const todoDelete = document.createElement('button')
        
        
        todoText.className = 'todo-tasks'
        todoContainer.style.display = 'flex'
        todoContainer.style.justifyContent = 'space-between'
        todoContainer.style.height = '40px'
    
        todoCheckbox.type = 'checkbox'
        todoDelete.textContent = 'Удалить'
        
        todoContainer.append(todoCheckbox, todoText, todoDelete)
        todo.append(todoContainer)
       
        todoText.textContent = el.text

        todoDelete.addEventListener('click', () => {
           remove(index)
        })
        
        todoCheckbox.addEventListener('change', () => {
            checkTodo(index)
        })
        
    })
    }
render()

const remove = (index) => {
    todoList.splice(index, 1)
    render()
}

const addTodo = () => {
    todoList.push({
        text : input.value, 
        done : false
    })
    render()
}

const checkTodo = (index) => {
    todoList[index].done = !todoList[index].done
   console.log(todoList)
 }