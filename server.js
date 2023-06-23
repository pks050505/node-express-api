const express = require("express");
const app = express();
const PORT = process.env.PORT || 5500

app.get('/', (req, res) => {
    res.send('dhiraj  bro  kya hal h? CICD sikhh gaye h github->cloudBuild ->DockerImage generate -> Cloud Run (Google Cloud)-> display on server');
});
app.get("/hello", (req, res) => {
    res.json({ "hello": "wordl" });
});


app.listen(PORT, () => {
    console.log('LINTENING ON PORT');
});
