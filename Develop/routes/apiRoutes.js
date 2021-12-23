const router = require('express').Router();
const saveData = require('../db/saveData');

// get request
router.get('/notes', (req, res) => {
    saveData
        .retrieveNote()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

// post request
router.post('/notes', (req, res) => {
    saveData
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

// delete request
router.delete('/notes/:id', (req, res) => {
    saveData
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});

module.exports = router;