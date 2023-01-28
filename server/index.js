const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://wareio:bootstrapparadox@cluster0.sqmybub.mongodb.net/?retryWrites=true&w=majority")
    .then(
        () => {
            console.log("Connected")
        }
    ).catch(
        () => {
            console.log("Failed")
        }
    )