import express from "express";
var app = express();

//Added support for CORS for Dev/Testing purposes!
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
 });

const portNumber = process.env.PORT || 4041;

app.get("/", (_, res, next) => {
    res.json("I'm alive");
});

app.get("/names", (_, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food", "Sebas","Tian"]);
});

app.get("/courses", (_, res, next) => {
    res.json(["Course API", "Course B", "Course C", "Course D"]);
});

app.listen(portNumber, () => {
    console.log(`Server running on port: ${portNumber}` );
});