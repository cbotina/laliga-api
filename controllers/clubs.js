const Club = require('../models/clubs')

const getAllClubs = async (req,res)=>{
    res.end('getAllClubs')
}

const getClub = async (req,res)=> {
    const id = req.params.id
    res.json({id})
}

const createClub = async (req,res)=> {
    const club = await Club.create(req.body)
    res.status(200).json(club)
}

const updateClub = async (req,res)=> {
    const id = req.params.id
    res.json({message: "updated", id})
}

const deleteClub = async (req,res)=> {
    const id = req.params.id
    res.json({message: "deleted", id})
}

module.exports = {getAllClubs, getClub, createClub, updateClub, deleteClub}