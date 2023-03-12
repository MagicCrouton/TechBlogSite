const router = require('express').Router();
const { user } = require('../../models');

router.get('/loginPage' , async (req, res) => {
    // console.log('i got here')
    res.render('login')
})

router.get('/' , async (req, res) => {
  // console.log('i got here')
  res.render('signup')
})
// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await user.create({
      user_name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = dbUserData;
      res.redirect('/')
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await user.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = dbUserData;
      res
        .status(200)
        .redirect('/')
        // .render('homepage',{
        // loggedIn: req.session.loggedIn,
        // user_name: req.session.user.dataValues.user_name
        // })
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get('/dashboard', (req, res) => {
  if (req.session.loggedIn) {
    res.render('dashboard', {
      loggedIn: req.session.loggedIn,
      userName: req.session.user
    })
  }
  else {
    res.render('login')
  }
})

module.exports = router;
