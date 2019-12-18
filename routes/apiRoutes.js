var fs = require("fs").promises;

module.exports = function(app) {
    app.get("/api/notes", async function(req, res){
        try {
            let savedNotes = await fs.readFile("db/db.json", "utf-8");
            let arrNotes = savedNotes.length > 0 ? JASON.parse(savedNotes) : [];
            res.json(arrNotes);
        }catch (error) {
            console.log(error);
            return res.json(error);
        }
    });
}