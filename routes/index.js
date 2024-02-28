var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', (req, res) => {
  res.render('form', { title: 'Add your Message:' });
});

router.post('/new', function (req, res, next) {
  const user = req.body.username;
  const message = req.body.message;
  messages.push({ text: message, user: user, added: new Date() });
  res.redirect('/');
});

module.exports = router;
