
const fs = require('fs')
const path = require('path');
const uniqid = require('uniqid')


    //parsing JSON file to use in GET/POST
        const dataBuffer = fs.readFileSync('./db/db.json')
        const dataJSON = dataBuffer.toString()
        let notesApp = JSON.parse(dataJSON)



module.exports = function(app) {

    
    app.get("/api/notes", (req, res) => {
        res.json(notesApp);
      });

      //POST - add to notes, function called from ln 46
      app.post("/api/notes", (req, res) => {

                const addNote = req.body

                    addNote.id = uniqid()
                    notesApp.push(addNote)
                    addToNotes();
                    res.send('this worked!')
                    return console.log("Added new note: " +addNote.title);
                });

                //GET id from notes
                app.get(".api/notes/:id", (req, res) => {
                    res.json(notesApp[req.params.id]);
                })

                //Delete notes with ID
                app.delete("/api/notes/:id", (req, res) => {
                    notesApp = notesApp.filter(
                        note => {
                            return note.id != req.params.id
                        }
                    )
                     addToNotes();
                     res.send('this worked!')
                    });

                //Function to add to notes, which is called in POST
                    function addToNotes() {
                      const dataJSONAdd = JSON.stringify(notesApp)
                      fs.writeFileSync('./db/db.json', dataJSONAdd, err => {
                        if (err) throw err;
                        return true;
                      })
                      
                  }
                        

}

    