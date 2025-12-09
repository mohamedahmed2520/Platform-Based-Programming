const authService = require('../services/authService');

const register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({ id: user.id, email: user.email, name: user.name });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const login = async (req, res) => {
  try {
    const data = await authService.login(req.body);
    res.json(data);
  } catch (e) {
    res.status(401).json({ error: e.message });
  }
};

module.exports = { register, login };
