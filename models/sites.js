var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var siteSchema = new mongoose.Schema({
    id: Number,
    nom: String,
    adresse: String,
    telephone: String,
    id_bassin:[{ type: Schema.Types.ObjectId, ref: 'bassin' }],
});

module.exports = mongoose.model("site", siteSchema);