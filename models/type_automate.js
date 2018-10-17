var mongoose = require('mongoose');

var type_automate = new mongoose.Schema({
    id: Number,
    nom: String,
});

module.exports = mongoose.model("type_automate", type_automate);