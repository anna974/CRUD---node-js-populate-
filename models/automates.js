var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var automateSchema = new mongoose.Schema({
    nom: String,
    id_marque:[{ type: Schema.Types.ObjectId, ref: 'marque_automate' }],
    // id_type: [{ type: Schema.Types.ObjectId, ref: 'type_automate' }],
    serial: String,
    configuration : String
});

module.exports = mongoose.model("automate", automateSchema);