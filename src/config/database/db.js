const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
let mongoUrl = process.env.MONGODB_URL
async function connect(){
    try {
        await mongoose.connect(`${mongoUrl}`,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex : true
        })
        console.log('Ket Noi Thanh Cong')
    } catch (error) {
        console.log('Ket Noi That bai')
    }
}

module.exports = { connect }