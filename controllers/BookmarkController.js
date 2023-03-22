const { Bookmark } = require('../models')

//R
const getBookmarksAll = async (req, res) => {
  try {
    const result = await Bookmark.findAll()
    res.send(result)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getBookmarksAll
}