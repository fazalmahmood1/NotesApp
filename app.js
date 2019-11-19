const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const titleOption = {
    describe: 'Title of node',
    demand: true,
    alias: 't'
}
const bodyOption = {
    describe: 'Body of node',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOption,
        body: bodyOption
    })
    .command('list', "List all notes")
    .command('read', 'Read a note', {
        title: titleOption
    })
    .command('remove', 'Remove a note', {
        title: titleOption
    })
    .help()
    .argv;
let command = process.argv[2];

switch(command){
    case "add":
        if(notes.isAlphaNumeric(argv.title)){
            let note = notes.addNote(argv.title, argv.body)
            if(note){
                console.log('Note created');
                notes.logNote(note)
            }else{
                console.log('Note title taken')
            }
        }else{
            console.log(notes.alphaNumericError);
        }
        break;
    case "list":
        let allNotes = notes.getAll()
        allNotes.forEach((note) => notes.logNote(note))
        break;
    case "read":
        if(notes.isAlphaNumeric(argv.title)){
            let noteRead = notes.getNote(argv.title)
            if(noteRead){
                console.log('Note found!')
                notes.logNote(noteRead);
            }else{
                console.log('Note not found!')
            }
        }else{
            console.log(notes.alphaNumericError);
        }
        break;
    case "remove":
        if(notes.isAlphaNumeric(argv.title)){
            let noteRemoved = notes.removeNote(argv.title)
            let message = noteRemoved ? 'Note was removed':'Note not found';
            console.log(message)
        }else{
            console.log(notes.alphaNumericError);
        }
        break;
    default:
        console.log('Command not recognized')        
}

