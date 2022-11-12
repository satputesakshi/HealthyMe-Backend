const express = require('express')
var request = require('request')
const mongoose = require('mongoose')

const port = 8000
const dotenv = require('dotenv');
const routes= require('./routes/routes')
const cors = require("cors");


// app.get("/api/user", (req, res) => {
//   res.send("<h1>Success</h1>");
// });

const app = express()

async function connect(){
    dotenv.config();
mongoose
  .connect(process.env.MONGO_URI, {
    dbName:"HealthyMe",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb connected.."))
  .catch((err) => console.log(err.message));
}

connect();
app.use(cors());
app.use(express.json());
app.use("/api/users", routes);


app.listen(port, () => {
  console.log(`HealthyMe app listening on port ${port}`)
})