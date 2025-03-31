/*
Assignment #1 - Trying to code a todo app and store data into the array
*/

// import express module using require function and store it in express variable
const express = require("express");

// create an express application using express function
const app = express();

// Middleware to parse JSON data in the request body
app.use(express.json());

// To store the todos in memory, create an empty array
let todos = [];

/**
 * create a route handler for POST request
 *
 * Create a new todo object and add it to the todos array
 *
 * URL: localhost:3000/todos/create
 * Example: localhost:3000/todos/create
 */
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
    res.send("Added todo successfully!");
})

app.put("/todos/update/:id", (req, res) => {
    const tid = req.params.id.slice(1);
    const { todo } = req.body;
    if(!todo || todo.trim() === ""){
        return res.send("todo is empty");
    }
    let update = false;
    for(let i = 0 ; i < todos.length ; i++){
        if(todos[i].id === parseInt(tid)){
            todos[i].title = todo;
            update = true;
            break;
        }
    }
    if(update){
        return res.send("updated todo with id" + tid);
    }
    return res.send("Id not present in todos");
})

app.get("/todos/read/all", (req, res) => {
    if (todos.length === 0) {
        return res.send("No todos found");
    }
    res.send(todos);
})

app.get("/todos/read/:id", (req, res) => {
    const tid = req.params.id.slice(1);
    const todo = todos.find((todo) => {
        return todo.id === parseInt(tid)
    });
    console.log(todo);
    if(!todo){
        return res.send("todo not found with given id!")
    }
    res.send(todo);
})

app.delete("/todos/delete/all", (req, res) => {
    todos = [];
    res.send("all todos are deleted");
})

app.delete("/todos/delete/:id", (req, res) => {
    const id = req.params.id.slice(1);
    let deleted = false;
    let updatedTodos = todos.filter(todo => {
        if(todo.id === parseInt(id)){
            deleted = true;
            return false;
        }
        return true;
    });
    todos = updatedTodos;
    if(deleted){
        res.send("delted the todo with id" + id);
    }
    res.send("todo with given id is not found");
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})