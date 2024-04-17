const jwt = require('jsonwebtoken');
const config = require('../config');

const signJwt = (payload) => {
  return jwt.sign(payload, config.get('jwtSecretKey'), {
    expiresIn: '24h',
  });
};

module.exports = signJwt;
