var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var villeSchema = new mongoose.Schema({
    id: Number,
    nom: String,
    code_postal: String,
    id_site: [{ type: Schema.Types.ObjectId, ref: 'site' }],
});

module.exports = mongoose.model("ville", villeSchema);