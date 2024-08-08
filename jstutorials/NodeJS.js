// console.log("Hello World")
const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World this is Dikshith Manjunath and this is my first actual website till now I was using trash websites that made no sense and I was just wasting time on HTML and CSS');
  res.end(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kalnia+Glaze:wght@100..700&display=swap" rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Kalnia+Glaze:wght@100..700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
    <title>Set Intervals and Timeout using JavaScript</title>
    <style>
        body {
            background-color: cadetblue;
            border: 5px solid black;
        }

        .container {
            padding: 170px;
            font-size: 35px;
            justify-content: center;
            align-items: center;
            height: 53vh;
            font-family: 'Times New Roman', Times, serif;
            color: white;
            text-align: center;
            background-image: linear-gradient(to right, #3d1398, #009dff);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            overflow: hidden;
        }

        #time {
            font-size: 45px;
            font-family: 'Montserrat', sans-serif;
            justify-content: center;
            align-items: center;
            display: flex;
            padding: 100px;
        }
    </style>
</head>

<body>
    <div class="container">
        The Time Now is:
        <span id="time"></span>
    </div>
</body>
<script>
function displayTime(){
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(displayTime, 1000);

</script>

</html>`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});