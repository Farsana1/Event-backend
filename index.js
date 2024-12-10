// import json library

const jsonServer = require('json-server')

// create server

const eventManager = jsonServer.create()

// create middleware

const middleware = jsonServer.defaults()

const router = jsonServer.router('db.json')

eventManager.use(middleware)
eventManager.use(router)

const PORT = 4000 || process.env.PORT

eventManager.listen(PORT,()=>{
    console.log(`Server running successful at port no: ${PORT}`);
    
})
