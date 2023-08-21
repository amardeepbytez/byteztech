const express = require('express')
const app = express()
const port = 5000
const db = require('./config/byte.js')
const cors = require('cors')
app.use(express.json())
db()
app.use(cors())
app.use(express.urlencoded({ extended: true }));

const userRoutes = require('./routes/userRoutes/registration_router.js')

app.use("/user", userRoutes)



app.listen(port, () => console.log("running on port :", port))