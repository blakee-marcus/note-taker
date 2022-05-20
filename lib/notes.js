const fs = require("fs");
const path = require("path");

function createNewNote(body, noteArray) {
    const note = body;
    noteArray.push(animal);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: noteArray }, null, 2)
    );
    return note;
}

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
}

module.exports = {
    validateNote,
    createNewNote
};