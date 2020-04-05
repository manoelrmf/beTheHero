const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
    async findAll(req, resp) {
        const ongs = await connection('ongs').select('*')
        return resp.json(ongs)
    },

    async create(req, resp) {

        const { name, email, whatssap, city, uf } = req.body

        const id = crypto.randomBytes(4).toString('HEX')

        await connection('ongs').insert({
            id,
            name,
            email,
            whatssap,
            city,
            uf
        })


        return resp.json({ id })
    }
}