var mongoose = require('mongoose');

var marque_automate = new mongoose.Schema({
    id: Number,
    nom: String,
});

module.exports = mongoose.model("marque_automate", marque_automate);