const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    console.log("hello");
    res.send("Hello World"); // You must send a response
});

app.listen(3000, () => {
    console.log("listening");
});
