const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}!`))

app.get("/", (req, res) => {
    res.send("Hola bitchez")
    console.log(knex.schema)
})