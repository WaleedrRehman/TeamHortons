const express = require('express');
const app = express();
const port = 3000;

app.listen(3000, () => {
    console.log(`App listening at http://localhost:${port}`);
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/src/index.html')
});