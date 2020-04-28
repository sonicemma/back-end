const jwt = require('jsonwebtoken');

function genToken(user) {
    const jwtSecret = process.env.JWT_SECRET || 'secret';

    const payload = {
        users_id: users.id,
        email: users.email
    }

    const expire = {expiresIn: '7d'};

    const signedToken = jwt.sign(payload, jwtSecret, expire);

    return signedToken;
}

module.exports = genToken;