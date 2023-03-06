const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    name : String,
    description: String,
    media: [],
    createur: {
        type : mongoose.Types.ObjectId,
        ref:'users',
        require:true
        //required true ya3ni kol post 
    //obligatoire ykoun 3andha createur
    }

})

module.exports = mongoose.model('posts',postSchema)
// l model howa schema mta3 l bd mte3na 