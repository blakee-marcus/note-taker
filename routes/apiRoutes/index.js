const { validateNote, createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    // set id based on what the next index of hte array will be
    // req.body.id = crypto.randomBytes(5).toString("hex");
    // if any data in req.body is incorrect, send 400 error back
    // if(!validateNote(req.body)) {
    //     res.status(400).send('The note is not properly formatted');
    // } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    // }
});

module.exports = router;