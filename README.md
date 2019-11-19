# NotesApp

A simple note app

---
## Requirements

For development, you will only need Node.js and node packages, lodash, nodemon and Yargs

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v12.11.1

    $ npm --version
    6.11.3

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

### Packages
- ### lodash
  After installing node, this project will need lodash too, so just run the following command.

    $ npm i --save lodash
      
- ### Yargs
 Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface

    $ npm i --save yargs

- ### Validator
 A library of string validators and sanitizers

    $ npm i --save validator

- ### Chalk
 Using chalk is pretty painless, it works by chaining together colors and styles, finally passing in the string you’d like styled

    $ npm install chalk --save    

---

## Install

    $ git clone https://github.com/fazalmahmood1/NotesApp.git
    $ cd notesApp
