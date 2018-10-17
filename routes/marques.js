var express = require('express');
var router = express.Router();

var marques = require("../controllers/marqueController");

router.get("/", marques.list);

//accéder à la page d'ajout
router.get("/ajout", marques.create);

//Créer un modèle
router.post("/save", marques.save);

router.get("/list", marques.listeajax);

//export du module router
module.exports = router;