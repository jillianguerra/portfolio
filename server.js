require('dotenv').config()
const app = require('./app-server')
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Welcome to the danger zone ${PORT}`)
})