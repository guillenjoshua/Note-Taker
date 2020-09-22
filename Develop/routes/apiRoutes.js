
const fs = require('fs')
const path = require('path');
const uniqid = require('uniqid')


    //parsing JSON file to use in GET/POST
        const dataBuffer = fs.readFileSync('Develop/db/db.json')
        const dataJSON = dataBuffer.toString()
        let notesApp = JSON.parse(dataJSON)




module.exports = function(app) {

    // fs.readFile("Develop/db/db.json", "utf8", (err, data) => {
    //     if (err) throw err;
    
    //     // let notesApp = JSON.parse(data);
    // })

    app.get("/api/notes", (req, res) => {
        res.json(notesApp);
      });

      //POST - Still need to complete
      app.post("/api/notes", (req, res) => {

                const addNote = req.body

                    addNote.id = uniqid()
                    notesApp.push(addNote)
                    addToNotes();
                });

                //GET id from notes
                app.get(".api/notes/:id", (req, res) => {
                    res.json(notesApp[req.params.id]);
                })

                //Need to add Delete???


                //Function to add to notes, which is called in POST
                    function addToNotes() {
                      const dataJSONAdd = JSON.stringify(notesApp)
                      fs.writeFileSync('Develop/db/db.json', dataJSONAdd, err => {
                        if (err) throw err;
                        return true;
                      })
                      
                  }
                        

}

    