const express = require('express');
const auth = require('../middlewares/auth.middleware');
const queueService = require('../services/queue.service');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: 'Content required' });
  }

  const message = {
    from: req.user.username,
    content,
    createdAt: new Date().toISOString(),
  };

  await queueService.pushMessage(message);

  res.json({
    status: 'OK',
    message: 'Message pushed to queue',
  });
});

module.exports = router;
