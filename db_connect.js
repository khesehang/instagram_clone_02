const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
.then(response => {
console.log('mongoDB connection established')
})
.catch(err => {
    console.log('mongoDB connection error: ' ,err)
})