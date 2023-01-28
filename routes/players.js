const express = require('express')
const { getAllPlayers, getPlayer, getPlayersByClub, createPlayer, updatePlayer, deletePlayer } = require('../controllers/players')
const PlayersRouter = express.Router()

PlayersRouter.route('/').get(getAllPlayers).post(createPlayer)

PlayersRouter.route('/:club').get(getPlayersByClub)

PlayersRouter.route('/info/:id').get(getPlayer).patch(updatePlayer).delete(deletePlayer)





module.exports = PlayersRouter