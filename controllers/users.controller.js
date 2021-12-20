const bcryptjs = require("bcryptjs");
const { response } = require("express");
const User = require("../models/user");

const getUsers = async (req = request, res = response) => {
  const { limit = 5, skip = 0 } = req.query;
  const [total, users] = await Promise.all([
    User.countDocuments(),
    User.find({ state: true }).skip(Number(skip)).limit(Number(limit)),
  ]);
  res.json({ total, users });
};
const postUser = async (req, res = response) => {
  const { name, email, password, role } = req.body;
  const user = new User({ name, email, password, role });
  //encrypt password
  const salt = bcryptjs.genSaltSync(10);
  user.password = bcryptjs.hashSync(password, salt);
  //save
  await user.save();
  //response
  res.status(201).json({ message: "user created", user: user });
};
const putUser = async (req, res = response) => {
  const id = req.params.id;
  const { _id, password, google, ...bodyLeft } = req.body;
  //TODO validate id database
  if (password) {
    //encrypt password
    const salt = bcryptjs.genSaltSync(10);
    bodyLeft.password = bcryptjs.hashSync(password, salt);
  }
  const user = await User.findByIdAndUpdate(id, bodyLeft);
  res.json({ message: "user updated", user });
};
const deleteUser = async (req, res = response) => {
  const { id } = req.params;
  //fisic delete
  //const user = await User.findByIdAndDelete(id)
  const user = await User.findByIdAndUpdate(id, { state: false });
  res.json({ message: "user deleted", user });
};
module.exports = {
  getUsers,
  postUser,
  putUser,
  deleteUser,
};
