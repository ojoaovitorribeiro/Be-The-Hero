const express = require("express");
const routes = express.Router();
// const connection = require("./Database/connection");
// const crypto = require("crypto");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

//Chamar função da para listar todas as ongs
routes.get("/lisOngs", OngController.index);
//Chamar função da para criar ongs
routes.post("/ongs", OngController.create);

// //Chamar função da para criar casos
routes.post("/incidents", IncidentController.create);
// //Chamar função da para listar os casos
routes.get("/listIncidents", IncidentController.index);
// //Chamar função da para deletar os casos
routes.delete("/incident/:id", IncidentController.delete);

///Listar os incidentes de uma ong apenas
routes.get("/profile", ProfileController.index);

/// Verifiar se a ong exste
routes.post("/sessions", SessionController.create);

module.exports = routes;
