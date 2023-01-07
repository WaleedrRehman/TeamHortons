const express = require('express');
const app = express();
const port = 3000;

app.use("/scripts", express.static("public/scripts"));
app.use("/styles", express.static("public/styles"));
app.use("/images", express.static("public/images"));
app.use("/html", express.static("app/html"));
app.use("/text", express.static("app/text"));

app.listen(3000, () => {
    console.log(`App listening at http://localhost:${port}`);
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/src/index.html')
});