const http = require('http');
const fs = require('fs');
const path = require('path');

// Correct the path to the HTML file
const filePath = path.join(__dirname, '..', 'tutorials', 'tutorial35.html');
const fileContent = fs.readFileSync(filePath, 'utf8');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fileContent);
});

// Correct the server.listen method
server.listen(80, '127.0.0.1', () => {
    console.log("Listening on port 80.");
});
