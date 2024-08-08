// there are 2 types of programs - 
// Synchronous and Asynchronous
// Synchronous program execution:
// it is where the program is executed line by line 

    // console.log('Start');
    // This line of code will execute before the next line
    // console.log('End');

// Asynchronous program execution:
// it is where the program does not necessarily run line by line

const fs = require ("fs");
fs.readFile("delete.txt","utf-8",(err,data) => {     //Here, the task is to read the file... since reading the file is a process that takes a while , the program proceeds further and displays the rest of the output and when it is ready with the task, it displays it. 
    console.log(data);
});
console.log("This is an asynchronous program execution: ");