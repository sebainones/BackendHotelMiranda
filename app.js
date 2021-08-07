const express = require("express");
var app = express();

const portNumber = process.env.PORT || 4041;

app.get("/", (_, res, next) => {
    res.json("I'm alive");
});

app.get("/names", (_, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.listen(portNumber, () => {
    console.log(`Server running on port: ${portNumber}` );
});
