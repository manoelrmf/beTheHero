const express = require('express')

const OngController = require('./controllers/OngController.js')
const IncidentsController = require('./controllers/IncidentController.js')
const ProfileController = require('./controllers/ProfileController.js')
const SessionController = require('./controllers/SessionController.js')

const routes = express.Router()

routes.post('/sessions', SessionController.create)


routes.get('/ongs', OngController.findAll)
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.find)

routes.post('/incidents', IncidentsController.create)
routes.get('/incidents', IncidentsController.findAll)
routes.delete('/incidents/:id', IncidentsController.delete)

module.exports = routes