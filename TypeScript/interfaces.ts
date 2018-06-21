function showTodo(todo: {title: string, description: string}) {
    let finalTodo = `${todo.title}: ${todo.description}`
    console.log(finalTodo)
}

let myTodo = {title: "First item", description: "Timepass"}

showTodo(myTodo)

interface Todo {
    title: string
    description: string
}

// interface is basically just typeDef

function showTodoInterface(todo: Todo) {
    let finalTodo = `${todo.title}: ${todo.description}`
    console.log(finalTodo)
}

showTodoInterface(myTodo)