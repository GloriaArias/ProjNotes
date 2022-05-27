// URL: Get /
const index = (req, res) => {
  // Calculando emojie
  const emojieDataset = [
    '💻',
    '👨‍💻',
    '🎈',
    '🎄',
    '🦺',
    '🎢',
    '🎁',
    '🚆',
    '🌍',
    '♥',
  ];
  const emojie =
    emojieDataset[Math.floor(Math.random() * emojieDataset.length)];
  // View-Models
  const viewModel = {
    title: 'Index Controller Working!!!',
    author: 'Ivan Rivalcoba',
    emojie,
  };
  res.render('index', viewModel);
};

// URL: Get /about
const about = (req, res) => {
  res.render('home/aboutView', {
    name: 'PhD Gloria Arias',
    email: 'ariasutreragloria@gmail.com',
    url: 'https://github.com/GloriaArias/ProjNotes/commits/dev',
  });
};

export default {
  // Action Methods
  index,
  about,
};
