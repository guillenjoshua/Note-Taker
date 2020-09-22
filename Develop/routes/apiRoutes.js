
const fs = require('fs')
const path = require('path');
const uniqid = require('uniqid')

// const notesApp = require("../db/db.json");
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


      app.post("/api/notes", (req, res) => {

                const addNote = req.body

                    addNote.id = uniqid()
                    notesApp.push(addNote)
                    addToDb();
                });

                
                app.get(".api/notes/:id", (req, res) => {

                    res.json(notesApp[req.params.id]);
                })

       
                
                    function addToDb() {
                      const dataJSON = JSON.stringify(notesApp)
                      fs.writeFileSync('Develop/db/db.json', dataJSON, err => {
                        if (err) throw err;
                        return true;
                      })
                      
                  }
                        

}

    