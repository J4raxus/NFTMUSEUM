var mongoose = require('mongoose')

const biblionftSchema = new mongoose.Schema({
    nom:{
        type: String,
        required: true
    },
    mdp:{
        type: String,
        required: true
    },
    image_nft:{
        type: String,
        required: true
    }
})

var userModel = mongoose.model('biblionft', biblionftSchema)
module.exports = userModel

//exemple pour postman :
// {
//     ",om":"Clement",
//     "mdp":"Mankowyt123",
//     "image_nft":"https://pbs.twimg.com/profile_images/1379453992456044547/PDFTYWJJ_400x400.jpg"
// }