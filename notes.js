console.log('Starting nodes.js')
const fs = require('fs');

// Get All notes from the file
let fetchNotes = () => {
    try{
        let prevNotes = fs.readFileSync('notes-data.json');
        return JSON.parse(prevNotes)
    }catch(e){
        return [];
    }
};

// Save a note into the file
let saveNote = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
};

// Add New Note
let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    }

    let duplicateNote = notes.filter((note) => note.title === title)

    if(duplicateNote.length === 0){
        notes.push(note)
        saveNote(notes)
        return note;
    }
};


let getAll = () => {
    return fetchNotes()
};

let getNote = title => {
    let notes = fetchNotes()
    let filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};


let removeNote = title => {
    // fetch notes
    let notes = fetchNotes()
    // filter notes, removing the one with title of argument
    let filteredNotes = notes.filter((note) => note.title !== title)
    // save new notes array
    saveNote(filteredNotes)
    return notes.length !== filteredNotes.length;
};

let logNote = (note) => {
    console.log('---')
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}