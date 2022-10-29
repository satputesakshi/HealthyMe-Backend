const express = require('express')
var request = require('request')
const mongoose = require('mongoose')
const app = express()
const port = 5000
const dotenv = require('dotenv');

async function connect(){
    dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb connected.."))
  .catch((err) => console.log(err.message));
}
connect();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`HealthyMe app listening on port ${port}`)
})