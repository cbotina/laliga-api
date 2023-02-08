const { createCustomError } = require("../errors/custom-error");
const asyncWrapper = require("../middleware/async");
const Player = require("../models/players");

const getAllPlayers = asyncWrapper(async (req, res) => {
  const players = await Player.find();
  res.json(players);
});

const getPlayer = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const player = await Player.findById(id).exec();

  if (!player) {
    throw createCustomError(`No players with id: ${id}`, 404);
  }
  res.json({ player });
});

const getPlayersByClub = asyncWrapper(async (req, res) => {
  const club = req.params.club;
  const players = await Player.find({ club });
  if (!players) {
    throw (createCustomError(`Club doesn't exists: ${club}`), 404);
  }
  res.send(players);
});

const createPlayer = asyncWrapper(async (req, res) => {
  const player = await Player.create(req.body);
  res.status(201).json({ player });
});

const updatePlayer = asyncWrapper(async (req, res) => {
  const playerID = req.params.id;
  const playerInfo = req.body;
  const updatedPlayer = await Player.findOneAndUpdate(
    { _id: playerID },
    playerInfo,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedPlayer) {
    throw createCustomError(`There's no player with id: ${playerID}`, 404);
  }
  res.json(updatedPlayer);
});

const deletePlayer = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const deletedPlayer = await Player.findOneAndDelete({ _id: id });
  if (!deletedPlayer) {
    throw createCustomError(`There's no player with id: ${id}`, 404);
  }
  res.status(200).json({ deletedPlayer });
});

module.exports = {
  getAllPlayers,
  getPlayer,
  getPlayersByClub,
  createPlayer,
  updatePlayer,
  deletePlayer,
};
