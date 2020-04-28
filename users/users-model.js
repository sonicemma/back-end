const db = require('../database/dbConfig');

module.exports = {
    find,
    findBy,
    addUser
}

function find() {
    return db('users').select('id', 'email', 'password');
};

function findBy(filter) {
    return db('users').where(filter).first();
};

function addUser(user) {
    return db('users').insert(user)
        .then(ids => {
            const [id] = ids;
            return findById(id)
        })
};