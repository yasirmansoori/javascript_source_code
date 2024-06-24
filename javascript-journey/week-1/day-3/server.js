// Building a simple web server with Express
// 1. npm install express --save, in the terminal
// 2. Following code for server.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
// 3. Run node server.js in the terminal, by navigating to the directory where server.js is located and then running the command or by using the terminal in VS Code or you can use shortcut keys like Ctrl + Alt + n in VS Code.


