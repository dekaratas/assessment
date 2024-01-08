const { User } = require("../models/db_models");

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.patchUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send();
    if (req.body.password) user.password = req.body.password;
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};