const Club = require("../models/clubs");
const asyncWrapper = require("../middleware/async");
const { CustomAPIError } = require("../errors/custom-error");

const getAllClubs = asyncWrapper(async (req, res) => {
  const clubs = await Club.find();
  res.json({ clubs });
});

const getClub = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const club = await Club.find({ _id: id });
  if (club.length === 0) {
    throw new CustomAPIError(`No club with id ${id}`, 404);
  }
  res.status(200).json({ club });
});

const createClub = asyncWrapper(async (req, res) => {
  const club = await Club.create(req.body);
  res.status(200).json(club);
});

const updateClub = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const updatedClud = await Club.findOneAndUpdate({ _id: id }, req.body, {
    runValidators: true,
    new: true,
  });

  if (!updatedClud) {
    throw new CustomAPIError(`There's no club with id ${id}`, 404);
  }
  res.status(200).json({ updatedClud });
});

const deleteClub = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const deletedClub = await Club.findOneAndDelete({ _id: id });
  if (!deletedClub) {
    throw new CustomAPIError(`There's no club with id ${id}`, 404);
  }
  res.status(200).json({ deletedClub });
});

module.exports = { getAllClubs, getClub, createClub, updateClub, deleteClub };
