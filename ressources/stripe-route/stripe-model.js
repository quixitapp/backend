const db = require('../../data/dbConfig');

module.exports = {
  getMediatorByEmail,
  updateStripeId,
};

function getMediatorByEmail(mediatorEmail) {
  return db('users').where({ email: mediatorEmail });
}

function updateStripeId(mediatorEmail, newStripeId) {
  return db('users')
    .where({ email: mediatorEmail })
    .update({ stripe_id: newStripeId });
}
