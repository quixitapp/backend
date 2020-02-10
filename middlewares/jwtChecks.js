const expressJwt = require('express-jwt');
const jwks = require('jwks-rsa');

const domain = process.env.AUTH0_DOMAIN;
const algorithms = process.env.AUTH0_JWCHECKS_ALGORITHMS;
const audience = process.env.AUTH0_AUDIENCE;

// Middleware that checks if there is a auth0 token type bearer in the req.headers.authorization issued by the appropriate auth0 account.

var jwtCheck = expressJwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${domain}/.well-known/jwks.json`
    }),
    audience,
    issuer: `https://${domain}`,
    algorithms
});

module.exports = jwtCheck;
