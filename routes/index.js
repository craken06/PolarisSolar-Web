const express = require("express");
const router = express.Router();

//IMPORTAR CONTROLADOR

const homeController = require("../controllers/homeController")

module.exports = function(){
    //RUTA HOME
    router.get("/",homeController.Home);

    //Nosotros
    router.get("/Nosotros",homeController.Nosotros);
    
    return router;
}