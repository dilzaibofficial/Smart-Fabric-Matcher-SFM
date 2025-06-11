const express = require('express');
const router = express.Router();
const { predictPattern, predictType, predictColor, uploadMiddleware } = require('../controllers/predictionController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/pattern', authMiddleware, uploadMiddleware, predictPattern);
router.post('/type', authMiddleware, uploadMiddleware, predictType);
router.post('/color', authMiddleware, uploadMiddleware, predictColor);

module.exports = router;