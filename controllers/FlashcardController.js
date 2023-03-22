const { Flashcard } = require('../models')

//C
const createFlashcard = async (req, res) => {
  try {
    let ownerId = parseInt(req.params.user_id)
    let flashcardContent = {
      ownerId,
      ...req.body
    }
    let flashcard = await Flashcard.create(flashcardContent)
    res.send(flashcard)
  } catch (error) {
    throw error
  }
}
//right now this requires putting in the userId in to the JSON body in Insomnia, do we want to figure out how to not require this? it would be ideal if it is just automatically connected to the user's profile when they are logged in and their userId is then attached to the flashcard (i think something like this is covered in the auth lessons...)

//R
const getFlashcardsAll = async (req, res) => {
  try {
    let result = await Flashcard.findAll()
    res.send(result)
  } catch (error) {
    throw error
  }
}

//U
const updateFlashcard = async (req, res) => {
  try {
    let flashcardId = parseInt(req.params.flashcardId)
    let updatedFlashcard = await Flashcard.update(req.body, {
      where: { id: flashcardId },
      returning: true
    })
    res.send(updatedFlashcard)
  } catch (error) {
    throw error
  }
}

//D
const deleteFlashcard = async (req, res) => {
  try {
    let flashcardId = parseInt(req.body.flashcardId)
    await Flashcard.destroy({
      where: { id: flashcardId }
    })
    res.send(`Successfully deleted flashcard id of ${flashcardId}.`)
  } catch (error) {
    throw error
  }
}

module.exports = {
  createFlashcard,
  getFlashcardsAll,
  updateFlashcard,
  deleteFlashcard
}
