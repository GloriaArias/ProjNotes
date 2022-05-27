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
    author: 'Gloria Arias',
    emojie,
  };
  res.render('home/indexView', viewModel);
};

// URL: Get /about
const about = (req, res) => {
  res.render('home/aboutView', {
    name: 'PhD Gloria Arias',
    email: 'ariasutreragloria@gmail.com',
    url: 'https://github.com/GloriaArias/ProjNotes/commits/dev',
    description:
      'Aplicación que te permite registrar ideas de proyectos. PwpcII-2022A',
    version: '0.0.alpha',
  });
};

export default {
  // Action Methods
  index,
  about,
};