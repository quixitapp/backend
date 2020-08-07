const router = require('express').Router();
const db = require('./stripe-model');
const restricted = require('../../middlewares/restricted');
const axios = require('axios');

// Allows Contractors to connect their bank accounts with stripe.

router.post('/connect', restricted, async (req, res) => {
  console.log(req.body);
  try {
    const mediator = await db.getMediatorByEmail(req.body.email);
    if (mediator) {
      axios
        .post('https://connect.stripe.com/oauth/token', {
          client_secret: process.env.STRIPE_KEY,
          code: code,
          grant_type: 'authorization_code',
        })
        .then(async res => {
          const newStripeId = res.data.stripe_user_id;
          await db.updateStripeId(req.body.email, newStripeId);
          res.status(200).json('Your stripe account is now connected');
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err.message);
        });
    } else {
      res.status(404).json('the specified user does not exist');
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

module.exports = router;
