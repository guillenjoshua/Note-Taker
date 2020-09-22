
const fs = require('fs')

const notesApp = require("../db/db.json");
// const indexJS = require("../public/assets/js/index");


module.exports = function(app) {

    app.get("/api/notes", (req, res) => {
        res.json(notesApp);
      });


      app.post("/api/notes", (req, res) => {
       
        const getNotes = () => {
          try {
              const dataBuffer = fs.readFileSync('../db/db.json')
              const dataJSON = dataBuffer.toString()
              return JSON.parse(dataJSON)
      
          } catch (e) {
              return []
          }
              
      }

      const saveNote = function (title, body) {
        const notes = getNotes()
        const duplicateNotes = notes.filter(function (note) {
                return note.title === title
        })
    
        if (duplicateNotes.length === 0) {
            notes.push({
                title: title, 
                body: body
            })
            saveNotes(notes)
            console.log('New Note Added')
        } else {
            console.log('Note Title Taken')
        }
        
    }

    const saveNotes = function (notes) {
      const dataJSON = JSON.stringify(notes)
      fs.writeFileSync('../db/db.json', dataJSON)
  }
        

      });

        // app.post("/api/clear", (req, res) => {
        //     // Empty out the arrays of data
        //     tableData.length = 0;
        //     waitListData.length = 0;
        
        //     res.json({ ok: true });
        //   });

}