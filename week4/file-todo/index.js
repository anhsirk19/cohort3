const express = require("express");


const fs = require("fs");

const path = require("path");


const app = express();

app.use(express.json());

const filePath = path.join(__dirname, "todos.json");

function readTodosfromFile(){
    try{
        const data = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
    }catch{
        return [];
    }
    
}

function writeToFile(data){
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

app.post("/todos/create", function(req, res){
    const { todo } = req.body;
    const id = req.body.id;

    //if todo is empty
    if(todo.trim() === ""){
        return res.send("Todo cannot be empty!");
    }

    //if id is empty
    if(!id){
        return res.send("Id cannot be empty!")
    }
    const todos = readTodosfromFile();
    //search if todo is already present with the given id
    for(let i = 0 ; i < todos.length ; i++){
        if(todos[i].id === id){
            return res.send("Todo is already present with the given id" + id + " enter new id");
        }
    }

   
    //created new todo
    const item = {
        "title" : todo,
        "id" : id
    }

    todos.push(item);
    writeToFile(todos);
    res.send("Added todo successfully!");
})

app.put("/todos/update/:id", (req, res) => {
    const tid = parseInt(req.params.id);
    const { todo } = req.body;
    if(!todo || todo.trim() === ""){
        return res.send("todo is empty");
    }
    let update = false;
    const todos = readTodosfromFile();
    for(let i = 0 ; i < todos.length ; i++){
        if(todos[i].id === tid){
            todos[i].title = todo;
            update = true;
            break;
        }
    }
    if(update){
        writeToFile(todos);
        return res.send("updated todo with id" + tid);
    }
    return res.send("Id not present in todos");
})

app.get("/todos/read/all", (req, res) => {
    const todos = readTodosfromFile();
    if (todos.length === 0) {
        return res.send("No todos found");
    }
    res.send(todos);
})

app.get("/todos/read/:id", (req, res) => {
    const tid = req.params.id.slice(1);
    const todos = readTodosfromFile();
    const todo = todos.find((todo) => {
        return todo.id === parseInt(tid)
    });
    if(!todo){
        return res.send("todo not found with given id!")
    }
    res.send(todo);
})

app.delete("/todos/delete/all", (req, res) => {
    writeToFile([]);
    res.send("all todos are deleted");
})

app.delete("/todos/delete/:id", (req, res) => {
    const id = req.params.id.slice(1);
    let deleted = false;
    const todos = readTodosfromFile();
    let updatedTodos = todos.filter(todo => {
        if(todo.id === parseInt(id)){
            deleted = true;
            return false;
        }
        return true;
    });

    if(deleted){
        writeToFile(updatedTodos);
        res.send("delted the todo with id" + id);
    }
    res.send("todo with given id is not found");
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})
