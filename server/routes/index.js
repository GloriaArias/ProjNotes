const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const emojieDataset = [
    '😎',
    '😛',
    '🤩',
    '👼',
    '🎈',
    '🎄',
    '🎀',
    '⏱',
    '🥩',
    '🏍',
    '🚩',
    '🌤',
    '🌚',
    '🌟',
    '⚡',
    '🌈',
    '💙',
    '🕳',
    '💨',
    '♻',
  ];
  const emojie =
    emojieDataset[Math.floor(Math.random() * emojieDataset.length)];
  res.render('index', {
    title: 'Express',
    author: 'Arias Utrera Gloria',
    emojie,
  });
});

module.exports = router;
