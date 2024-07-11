const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
const Auth_routes = require('./routes/auth');


connectToMongo();
const app = express()
const port = 5000;

app.use(cors())
app.use(express.json()); 

//Available routes
app.use('/api/auth', Auth_routes);

app.listen(port, () => {
  console.log(`connected to database inotebook app listening on port http://localhost:${port}`)
})