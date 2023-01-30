const express = require('express')
const PlayersRouter = require('./routes/Players')
const app = express()
const connectDB = require('./db/connect')
const PORT = process.env.PORT || 8000
require('dotenv').config()

app.use(express.json())
app.use('/api/v1/players',PlayersRouter)



// app.listen(PORT, ()=>console.log('Server is listening'))

async function start () {
    try{    
        await connectDB(process.env.MONGODB_URI).then(()=>console.log('DB Connection stablished'))
        app.listen(PORT, ()=>console.log(`Server is listening on http://localhost:${PORT}`))
    }catch(error) {
        console.error(error)
    }
}

start()