const {default:mongoose} = require('mongoose');

require('./conection');

//schema
const UrlSchema = new mongoose.Schema({
    ShortID :{type:String, required:true , unique:true},
    RedirectUrl :{ type: String, required: true }, 
});

//module//

const URL = mongoose.model('DBforShortURLGen',UrlSchema)
//exporting
module.exports = URL;



