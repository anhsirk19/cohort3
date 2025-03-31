// const { program } = require('commander');

// program
//   .option('--first')
//   .option('-s, --separator <char>');

// program.parse();

// const options = program.opts();
// const limit = options.first ? 1 : undefined;

// console.log(program.args[1].split(options.separator, limit));

const { Command } = require('commander'); // Import Commander
const program = new Command(); // Create a new command object
const fs = require('fs');

program
  .name('word counter') // Name the CLI program
  .description('CLI to file based tasks') // Add a description
  .version('0.8.0'); // Define the version

// Define a 'split' subcommand
program
  .command('count')
  .description('Split a string into substrings and display as an array') // Describe the subcommand
  .argument('<path>', 'file to count') // Define a required argument (the string to split)
  .action((path) => { // The action that runs when the 'split' command is invoked
    fs.readFile(path,'utf-8', (err, data) => {
        if(err){
            console.log(err);
        }else{
            const words = data.split(' ').length;
            console.log(`you have ${words} words in this ${path} file`);
        }
    })
  });

program.parse(); // Parse command-line arguments
