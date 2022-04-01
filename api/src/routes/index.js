const categoryRouter = require('./category')
const brandRouter = require('./brand')
const productRouter = require('./product')
const authRouter = require('./auth')
function route(app) {
  
  //api
  app.use('/api/v1/auth',authRouter)
  app.use('/api/v1/product',productRouter)
  app.use('/api/v1/brand',brandRouter)
  app.use('/api/v1/category',categoryRouter)

  app.use('/',(req,res)=>{
    res.send("hello api")
  })
  
  /* app.use("/auth",authRouter)
  app.use('/api/v1/user',userRouter) */

}

module.exports = route;