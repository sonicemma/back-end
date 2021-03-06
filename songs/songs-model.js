const db = require('../database/dbConfig');

module.exports = {
    saveSong,
    removeSong,
    updateSong,
    findSong,
    findSongById,
    getSong,
    update,
    add
};

function findSong() {
    return db('songs');
}

function update(id, changes) {
    return db('songs').where('id', id).update(changes);
  }

function getSong() {
    return db('saveSong');
}

function findSongById(id) {
    return db('songs').where({id});
}

function saveSong(song) {
    return db('saveSong')
        .insert(song)
            .then(ids => {
                const id = ids[0];

                return db('saveSong').where({ id }).first()
                    .then(song => {
                        return song;
                    })
            })
};

function removeSong(id) {
    return db('saveSong')
    .del()
    .where({id});
}

function updateSong(changes, id) {
    return db('saveSong')
    .update(changes)
    .where({id});
}

function add(song) {
    return db('songs')
    .insert(song);
}