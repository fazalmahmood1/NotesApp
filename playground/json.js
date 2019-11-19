const fs = require('fs');

let originalNote = {
    title: "Some Title",
    body: "Some Body"
}


// OriginalNoteString
let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json')
let note = JSON.parse(noteString)

console.log(typeof note)
console.log(note.title)
console.log(note.body)


