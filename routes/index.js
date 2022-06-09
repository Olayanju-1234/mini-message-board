var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "What's up?",
    user: "Joe",
    added: new Date()
  },
  {
    text: "How are you doing?",
    user: "Logan",
    added: new Date()
  },
  {
    text: "Hi, I'm going",
    user: "Carter",
    added: new Date()
  },
  {
    text: "Hi, Leave!",
    user: "James",
    added: new Date()
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});


router.post('/new', (req, res) => {
  const userName = req.body.name;
  const userMessage = req.body.message;
  
  
  messages.push({user: userName, text:userMessage, added: new Date()})
  
  res.redirect('/')
})




module.exports = router;
