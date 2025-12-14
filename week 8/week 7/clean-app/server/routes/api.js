const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authMiddleware, adminOnly } = require('../middleware/auth');

// public
router.get('/users', authMiddleware, userController.listUsers);
router.get('/users/:id', authMiddleware, userController.getUser);

// admin actions
router.put('/users/:id', authMiddleware, adminOnly, userController.updateUser);
router.delete('/users/:id', authMiddleware, adminOnly, userController.deleteUser);

module.exports = router;
