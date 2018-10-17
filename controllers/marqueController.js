var mongoose = require('mongoose');

var marque_automatesController = {};
var Marque_automate = require ("../models/marque_automate"); 

marque_automatesController.list = function(req, res) {
    Marque_automate.find({}).exec(function(err, marque){
      if(err){
          console.log('Error : ', err);
      }else{
          console.log("->",marque);
          res.render("../views/marques/marque_automates",{marque : marque} );
      } 
  });
};

// Renvoit à la page d'ajout d'un modèle
marque_automatesController.create = function (req, res) {
    res.render("../views/marques/ajouter_marque");
};

// Enregistrer un modèle 
marque_automatesController.save = function (req, res) {
    var marque = new Marque_automate(req.body);
    marque.save(function (err) {
        if (err) {
            console.log(err);
            res.render("../views/marques/ajouter_marque");
        } else {
            console.log("creation marque OK");
            console.log(marque);
            res.redirect("/marques");
        }
    });
};

//listeajax
marque_automatesController.listeajax = function(req, res) {
    Marque_automate.find({}).exec(function(err, marque){
      if(err){
          console.log('Error : ', err);
      }else{
          console.log("->",marque);
          res.render("../views/marques/listselect",{marque : marque} );
      } 
  });
};


// Ne pas oublier l'export du module
module.exports = marque_automatesController;