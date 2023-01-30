const Player = require('../models/players')

const getAllPlayers = async (req,res)=>{
    const players = await Player.find()
    res.json(players)
}

const getPlayer = async (req,res)=> {
    const id = req.params.id
    const player =  await Player.findById(id).exec()
    res.json({player})
}

const getPlayersByClub = async (req,res)=> {
    const club = req.params.club
    const players = await Player.find({club})
    res.send(players)
}

const createPlayer = async (req,res)=> {
    const player = await Player.create(req.body)
    res.status(201).json({player})
}

const updatePlayer = async (req,res) => {
    const playerID = req.params.id
    const playerInfo = req.body
    const updatedPlayer = await Player.findOneAndUpdate({_id: playerID},playerInfo, {
        new: true, 
        runValidators: true
    })
    res.json(updatedPlayer)
}

const deletePlayer = async (req,res)=> {
    const id = req.params.id
    const deletedPlayer = await Player.findOneAndDelete({_id: id})
    if(!deletePlayer){
        res.status(404).end(`There's no players with id: ${id}`)
    }
    res.status(200).json({deletedPlayer})
}

module.exports = {
    getAllPlayers,
    getPlayer,
    getPlayersByClub,
    createPlayer,
    updatePlayer,
    deletePlayer
}