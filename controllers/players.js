const Player = require('../models/players')

const getAllPlayers = async (req,res)=>{
    const players = await Player.find()
    res.json(players)
}

const getPlayer = (req,res)=> {
    const id = req.params.id
    res.json({playerID: id})
}

const getPlayersByClub = (req,res)=> {
    const club = req.params.club
    res.json({club})
}

const createPlayer = async (req,res)=> {
    const player = await Player.create(req.body)
    res.status(201).json({player})
}

const updatePlayer = (req,res) => {
    const playerInfo = req.body
    res.json(playerInfo)
}

const deletePlayer = (req,res)=> {
    const id = req.params.id
    res.json(id)
}

module.exports = {
    getAllPlayers,
    getPlayer,
    getPlayersByClub,
    createPlayer,
    updatePlayer,
    deletePlayer
}