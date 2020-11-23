//Importando modulos
const express = require('express')
const api = express.Router()

//Importando el controller
const controller = require(`./controller`);

//Servicio  Example
api.get('/', controller.getAllPuntctuation);
api.get('/work' , controller.working);
api.get('/fake' , controller.fake);

module.exports = api