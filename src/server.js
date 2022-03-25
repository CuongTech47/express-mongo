const express = require('express')
const { auth } = require('express-openid-connect');
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

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASEURL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUER,
  };


app.use(auth(config));


app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))



//
route(app)
app.listen(port, () => {
    console.log(`Server is runing is port ${port}`);
});

