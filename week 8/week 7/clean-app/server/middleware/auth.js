const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const header = req.header('authorization') || '';
  const token = header.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Missing token' });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (e) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

const adminOnly = (req, res, next) => {
  if (req.user && req.user.isAdmin) return next();
  return res.status(403).json({ error: 'Admin only' });
};

module.exports = { authMiddleware, adminOnly };
