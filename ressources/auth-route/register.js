const router = require('express').Router();
const admin = require('../../config/firebase-admin');
const db = require('./register-model');

router.post('/', async (req, res) => {
  try {
    const validToken = await admin
      .auth()
      .verifyIdToken(req.headers.authorization);
    if (!validToken) {
      res.status(400).json({ errorMessage: 'Invalid Token!' });
    } else {
      const foundUser = await db.getUserById(validToken.uid);
      if (!foundUser && validToken) {
        if (req.body && req.body.uid) {
          if (validToken.uid === req.body.uid) {
            const newUser = await db.addUser(req.body);
            res.status(201).json(newUser);
          } else {
            res
              .status(403)
              .json({ errorMessage: 'Forbidden access invalid token!' });
          }
        }
      } else {
        res.status(200).json(foundUser);
      }
    }
  } catch ({ message }) {
    res.status(500).json({ errorMessage: message });
  }
});

module.exports = router;
