const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const about = fs.readFileSync(path.join(__dirname, 'about.html'), 'utf8');
const services = fs.readFileSync(path.join(__dirname, 'services.html'), 'utf8');
const contact = fs.readFileSync(path.join(__dirname, 'contact.html'), 'utf8');

const server = http.createServer((req, res) => {
    console.log(req.url);
    const url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        res.end(home);
    } else if (url === '/about') {
        res.end(about);
    } else if (url === '/services') {
        res.end(services);
    } else if (url === '/contact') {
        res.end(contact);
    } else {
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1>');
    }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


//   This is the start of the nodemon shit