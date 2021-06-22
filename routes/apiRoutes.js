// LOAD DATA
const path = require('path');
const fs = require('fs')
const notes = require('../db/db.json');

// ROUTING

module.exports = (app) => {

  app.get('/api/notes', (req, res) => res.json(notes));


  app.post('/api/notes', (req, res) => {
    let newNote = req.body;
    notes.push(newNote)
    notes.forEach((note, index) => {
        note.id = index + 1;
    });    
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (err) => {
        if (err) throw err;
      });
    res.end();
  });


};
