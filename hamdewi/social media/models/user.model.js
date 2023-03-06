const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    
    firstname : String,
    lastname :String,
    email : String,
    password: String,
    role: {
        type: String , 
        enum: ['admin', 'user'],
        default: 'user',
    } , 
    bio :String,
    picture: String,
    birthdate: Date,

})

module.exports = mongoose.model('users',userSchema)

// na3mlou exportation lel model bel module.export
// w users howa esm table elli bech tetsna3 
// , userSchema hia definiton mte3 table