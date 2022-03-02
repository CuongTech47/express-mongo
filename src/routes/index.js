const categoryRouter = require('./category')
const brandRouter = require('./brand')
function route(app) {
  app.use('/api/v1/brand',brandRouter)
  app.use('/api/v1/category',categoryRouter)
  
  /* app.use("/auth",authRouter)
  app.use('/api/v1/user',userRouter) */

}

module.exports = route;