const express = require('express');
const Songs = require('./songs-model');

const router = express.Router();

router.get('/', (req, res) => {
    Songs.findSong()
    .then(songs => {
        res.json(songs);
    })
    .catch(err => {
        console.log(err.message, err);
        res.status(500).json({message: 'Failed to find songs'});
    })
})

router.get('/savedSongs', (req, res) => {
    Songs.getSong()
    .then(songs => {
        res.json(songs);
    })
    .catch(err => {
        console.log(err.message, err);
        res.status(500).json({message: 'error'});
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params;

    Songs.findSongById(id)
        .then(songs => {
            if (songs) {
                res.status(201).json(songs)
            } else {
                res.status(404).json({message: 'No song found'})
            }
        })
        .catch(err => {
            console.log(err.message)
        })
})


router.post('/save', (req, res) => {
    const songSave = req.body;
    Songs.saveSong(songSave)
        .then(song => {
            return res.status(200).json(song);
        })
        .catch(err => {
            console.log(err.message, err);
            res.status(500).json({ message: 'Unable to save song', error: err })
        })
});

router.post('/', (req, res) => {
    const songData = req.body;
    Songs.add(songData)
    .then(song => {
        res.status(201).json(song)
    })
    .catch(err => {
        console.log(err.message, err);
        res.status(500).json({message: 'Failed'})
    })
})

router.put('/:id', (req, res) => {
    Songs.update(req.params.id, req.body)
    .then(songs => {
        res.status(200).json(songs)
    })
    .catch(err => {
        console.log(err, err.message)
        res.status(500).json({message: 'Error with updating song', error: err.message, err})
    })
})


router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Songs.removeSong(id)
    .then(deleted => {
        if (deleted) {
            res.json({removed: deleted});
        } else {
            res.status(404).json({meesage: 'Could not find song with that ID'})
        }
    })
    .catch(err => {
        console.log(err, err.message);
        res.status(500).json({message: 'failed to delete song'})
    })
})


module.exports = router;