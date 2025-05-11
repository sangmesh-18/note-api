const Note = require('../models/Notes.js');

const getNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user._id });
  res.json(notes);
};

const createNote = async (req, res) => {
  const { title, content, tags } = req.body;
  if (!title) return res.status(400).json({ message: 'Title is required' });

  const note = await Note.create({ user: req.user._id, title, content, tags });
  res.status(201).json(note);
};

const updateNote = async (req, res) => {
  const note = await Note.findOne({ _id: req.params.id, user: req.user._id });
  if (!note) return res.status(404).json({ message: 'Note not found' });

  const { title, content, tags } = req.body;
  note.title = title || note.title;
  note.content = content || note.content;
  note.tags = tags || note.tags;
  await note.save();
  res.json(note);
};

const deleteNote = async (req, res) => {
  const note = await Note.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  if (!note) return res.status(404).json({ message: 'Note not found' });
  res.json({ message: 'Note deleted' });
};

module.exports = { getNotes, createNote, updateNote, deleteNote };