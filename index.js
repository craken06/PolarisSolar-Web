const express = require("express");
const routes = require("./routes");
const path = require("path");
//Crear APP Express

const app = express();

//Archivos Estaticos
app.use(express.static("public"))
//Iniciar Pug
app.set("view engine", "pug");

//Carpeta Views
app.set("views",path.join(__dirname,"./views"));
app.use("/",routes());
app.listen(3000);
