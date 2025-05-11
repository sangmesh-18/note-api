const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware.js');
const { getNotes, createNote, updateNote, deleteNote } = require('../controllers/noteController.js');

router.route('/').get(protect, getNotes).post(protect, createNote);
router.route('/:id').put(protect, updateNote).delete(protect, deleteNote);

module.exports = router