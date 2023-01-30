const express = require('express')
const { getAllClubs, createClub, getClub, deleteClub, updateClub } = require('../controllers/clubs')

const ClubsRouter = express.Router()

ClubsRouter.route('/').get(getAllClubs).post(createClub)
ClubsRouter.route('/:id').get(getClub).delete(deleteClub).patch(updateClub)

module.exports = ClubsRouter