const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
require("dotenv").config();
require("./models/db.js")
const AuthRouter = require('./route/AuthRoutes.js');
const taskRoutes = require('./route/taskRoutes.js'); 
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/auth",AuthRouter);
app.use("/api",taskRoutes);


app.listen(PORT,(req,res)=>{
  console.log(`server is running at port ${PORT}`);
})