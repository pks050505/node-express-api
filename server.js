const express = require("express");
const app = express();
const PORT = process.env.PORT || 5500

app.get('/', (req, res) => {
    res.send('Hello, World! bro ');
});
app.get("/hello", (req, res) => {
    res.json({ "hello": "wordl" });
});


app.listen(PORT, () => {
    console.log('LINTENING ON PORT');
});
