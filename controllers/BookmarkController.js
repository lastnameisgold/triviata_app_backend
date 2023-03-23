const { Bookmark } = require('../models')

//C
const createBookmark = async (req, res) => {
  try {
    let ownerId = parseInt(req.params.userId)
    let bookmarkContent = {
      ownerId,
      ...req.body
    }
    let bookmark = Bookmark.create(bookmarkContent)
    res.send(bookmark)
  } catch (error) {
    throw error
  }
}

//R
const getBookmarksAll = async (req, res) => {
  try {
    const result = await Bookmark.findAll()
    res.send(result)
  } catch (error) {
    throw error
  }
}

//D
const deleteBookmark = async (req, res) => {
  try {
    let bookmarkId = parseInt(req.body.bookmarkId)
    await Bookmark.destroy({
      where: { id: bookmarkId }
    })
    res.send(`Successfully deleted bookmark id of ${bookmarkId}.`)
  } catch (error) {
    throw error
  }
}

module.exports = {
  createBookmark,
  getBookmarksAll,
  deleteBookmark
}