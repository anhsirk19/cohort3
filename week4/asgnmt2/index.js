const { Command } = require('commander');
const fs = require('fs');

const program = new Command();
const file_Path = 'todos.json';

function loadTodos() {
    try {
      const data = fs.readFileSync(file_Path, 'utf-8'); // Read file synchronously
      return JSON.parse(data); // Parse the JSON data into a JavaScript array
    } catch (err) {
      // If the file doesn't exist or there's an error reading it, return an empty array
      return [];
    }
}


function saveTodos(data){
    fs.writeFileSync(file_Path, JSON.stringify(data, null, 2)); // Save todos as JSON with pretty print
}
program
  .name('Todos!') // Name the CLI program
  .description('CLI , filesystem based todo list') // Add a description
  .version('0.8.0');

program
    .command('add <todo>')
    .description("Add a new todo")
    .action((todo) => {
        const data = {
            task: todo,
            done: "false"
        };
        const todos = loadTodos();
        todos.push(data);
        saveTodos(todos);
        console.log("added todo");
    } )
program
    .command('list')
    .description("list all todos")
    .action(() => {
        const todos = loadTodos();
        if(todos.length === 0){
            console.log("no todos found");
            return;
        }
        for (let i = 0; i < todos.length; i++) {
            const ifDone = todos[i].done === true ? '[DONE]' : '[TODO]'
            console.log(i +" " + todos[i].task + " " + ifDone);
        }
    } )
program
    .command('delete <index>')
    .description("delete a todo")
    .action((index) => {
        const todos = loadTodos();
        const indx = parseInt(index);
        if(indx >= 0 && indx < todos.length){
            const [removed] = todos.splice(indx, 1);
            saveTodos(todos);
            console.log(`removed task ${removed.task}`)
        }else{
            console.log("incorrect index");
        }
    } )

program
    .command('done <index>')
    .description("done a todo")
    .action((index) => {
        const todos = loadTodos();
        const indx = parseInt(index);
        if(indx >= 0 && indx < todos.length){
            todos[indx].done = true;
            saveTodos(todos);
            console.log(`done task ${indx}`)
        }else{
            console.log("incorrect index");
        }
    } )
program.parse(); // Parse command-line arguments

