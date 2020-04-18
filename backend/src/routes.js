const express = require('express')
const { celebrate , Segments, Joi} = require('celebrate')

const OngController = require('./controllers/OngController.js')
const IncidentsController = require('./controllers/IncidentController.js')
const ProfileController = require('./controllers/ProfileController.js')
const SessionController = require('./controllers/SessionController.js')

const routes = express.Router()

routes.post('/sessions', SessionController.create)


routes.get('/ongs', OngController.findAll)
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}),OngController.create)

routes.get('/profile', ProfileController.find)

routes.post('/incidents', IncidentsController.create)
routes.get('/incidents', IncidentsController.findAll)
routes.delete('/incidents/:id', IncidentsController.delete)

module.exports = routes