var express = require('express');
var router = express.Router();

var automates = require("../controllers/automatesController");

router.get("/", automates.list);

//accéder à la page d'ajout
router.get("/ajout", automates.create);

//Créer un modèle
router.post("/save", automates.save);

// editer un modèle
router.get("/edit/:id", automates.edit);

// Modifier un modèle 
router.post("/update/:id", automates.update);

// supprimer un modèle
router.get("/remove/:id", automates.remove);

//export du module router
module.exports = router;