const express = require('express')

const db = require('./config/database/db')
const cors = require('cors')
const dotenv = require('dotenv')
const route = require('./routes/index')
const app = express()
const port = process.env.PORT || 3030;

dotenv.config()
app.use(cors())
//connect db
db.connect()



app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))



//
route(app)
app.listen(port, () => {
    console.log(`Server is runing is port ${port}`);
});

