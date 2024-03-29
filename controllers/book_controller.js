const { Book } = require('../models/db_models');

exports.createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.listBooks = async (req, res) => {
  const query = {};
  try {
    if (req.query.title) query.title = req.query.title;
    if (req.query.author) query.author = req.query.author;
    if (req.query.isbn) query.isbn = req.query.isbn;

    const books = await Book.find(query);
    res.status(200).send(books);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.patchBooks = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send();

    Object.assign(book, req.body);
    await book.save();
    res.send(book);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).send();
    res.send(book);
  } catch (error) {
    res.status(500).send(error);
  }
};