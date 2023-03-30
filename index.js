const express = require("express");
const app = express();
const userRouter = require("./routes/userControllers");
const helloMiddleware = require("./middleware/helloMiddle")

const variables = require("./config/variables")
console.log(variables.username)

app.use(helloMiddleware); //uses the helloMiddleware

app.use(express.json());

//create the sever
app.listen(3000);
//start in terminal with $ node index

app.get("/", (req, res) => {
    res.send("hello")
} );

app.use(userRouter);

