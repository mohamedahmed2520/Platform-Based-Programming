const userService = require('../services/userService');

const listUsers = async (req, res) => {
  const users = await userService.list();
  res.json(users.map(u => ({ id: u.id, email: u.email, name: u.name, isAdmin: u.isAdmin, createdAt: u.createdAt })));
};

const getUser = async (req, res) => {
  const user = await userService.getById(req.params.id);
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json({ id: user.id, email: user.email, name: user.name, isAdmin: user.isAdmin });
};

const updateUser = async (req, res) => {
  const updated = await userService.updateUser(req.params.id, req.body);
  res.json(updated);
};

const deleteUser = async (req, res) => {
  await userService.deleteUser(req.params.id);
  res.json({ success: true });
};

module.exports = { listUsers, getUser, updateUser, deleteUser };
