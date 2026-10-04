const jsonServer= require('json-server')
const rbServer = jsonServer.create()
const router = jsonServer.router('db.json')
const middleware = jsonServer.defaults()

const PORT = 3001

rbServer.use(middleware)
rbServer.use(router)

rbServer.listen(PORT,()=>{
    console.log(`Rb server started running at PORT:${PORT} successfully...`)
})