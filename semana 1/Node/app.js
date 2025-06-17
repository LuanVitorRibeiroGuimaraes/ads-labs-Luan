require("dotenv").config({path:".env"})

const express = require("express")
const { restaurantRouter } = require("./src/routes/restaurantRoutes")
const { clientRouter } = require("./src/routes/clientRoutes")
const app = express()

app.use(express.json())

app.use('/api/restaurant', restaurantRouter)
app.use('/api/client', clientRouter)

app.get('/', (res) => { res.send('Server is running!') })

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Servidor online na porta ${PORT}`))
