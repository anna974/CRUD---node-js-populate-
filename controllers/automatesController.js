var mongoose = require('mongoose');

var automatesController = {};
var Automate = require ("../models/automates"); 
var Marque = require ("../models/marque_automate");

automatesController.list = function(req, res) {
    Automate.find({})
    .populate("id_marque")
    .exec(function(err, automate){
        // console.log(automate);
        if(err){
            console.log('Error : ', err);
        }else{
            // console.log("->", automate[4].id_marque[0].nom);
            res.render("../views/automates/automates",{automate :automate} );
  
        } 
    });
};


// Renvoit à la page d'ajout d'un modèle
automatesController.create = function (req, res) {
    res.render("../views/automates/ajouter");
};

// Enregistrer un modèle 
automatesController.save = function (req, res) {
    var automate = new Automate(req.body);
    automate.save(function (err) {
        if (err) {
            console.log(err);
            res.render("../views/automates/ajouter");
        } else {
            console.log("creation automate OK");
            console.log(automate.id_marque);
            res.redirect("/automates");
        }
    });
};

//edition d'un modèle par son id 

automatesController.edit = function (req, res) {
    var villa = new Automate(req.body);

    Automate.findOne({ _id: req.params.id }).exec(function (err, automate) {
        if (err) {
            console.log("Error ", err);
        } else {
            res.render("../views/automates/modifier", { automate: automate });
        }
    });
};

//   Modifier un modèle
automatesController.update = function (req, res) {
    Automate.findByIdAndUpdate(req.params.id, { $set: { nom : req.body.nom, id_marque : req.body.id_marque, serial: req.body.serial, configuration: req.body.configuration } }, { new: true }, function (err, automate) {

        if (err) {
            console.log(err);
            res.render("../views/automates/modifier", { automate: req.body });
        }
        res.redirect("/automates");

    });
};


//suppression d'un modèle 
automatesController.remove = function (req, res) {
    Automate.findByIdAndRemove(req.params.id, function (err, automate) {

        if (err) {
            console.log(err);

        }
        res.redirect("/automates");

    });
};




// Ne pas oublier l'export du module
module.exports = automatesController;