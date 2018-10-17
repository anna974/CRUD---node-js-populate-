var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bassinSchema = new mongoose.Schema({
    id: Number,
    nom: String,
    id_site:[{ type: Schema.Types.ObjectId, ref: 'site' }],
    id_type: [{ type: Schema.Types.ObjectId, ref: 'type_bassin' }],
    id_automate:[{ type: Schema.Types.ObjectId, ref: 'automate' }],

});

module.exports = mongoose.model("bassin", bassinSchema);