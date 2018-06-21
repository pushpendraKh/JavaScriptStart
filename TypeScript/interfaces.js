function showTodo(todo) {
    var finalTodo = todo.title + ": " + todo.description;
    console.log(finalTodo);
}
var myTodo = { title: "First item", description: "Timepass" };
showTodo(myTodo);
// interface is basically just typeDef
function showTodoInterface(todo) {
    var finalTodo = todo.title + ": " + todo.description;
    console.log(finalTodo);
}
showTodoInterface(myTodo);
