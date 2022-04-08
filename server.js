const express = require('express')
const { auth } = require('express-openid-connect');
const db = require('./api/src/config/database/db')
const cors = require('cors')
const dotenv = require('dotenv')

const expressLayouts = require('express-ejs-layouts')



const route = require('./api/src/routes/index')


const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3030;

//morgan
// app.use(morgan('combined'))


app.use(express.static('public'))

//ejs
app.use(expressLayouts)
app.set("view engine", "ejs")
app.set("views", "./resources/views")

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

