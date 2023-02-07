const mongoose=require("mongoose")
const cardsSchema=mongoose.Schema({
    name:String,
    image:String
})
module.exports =Cards=mongoose.model("data",cardsSchema,"data")