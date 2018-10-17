var mongoose = require('mongoose');

var type_bassin = new mongoose.Schema({
    id: Number,
    nom: String,
});

module.exports = mongoose.model("type_bassin", type_bassin);