const path = require("path");
const fs = require("fs");

// sends html file based on route hit 
module.exports = function(app){
    app.get("/reservations", (req, res)=>{
        day = req.query.day;
        time = req.query.time;
        if (day == undefined || time == undefined) {
            res.sendFile(path.join(__dirname, "../public/reservations.html"))
        } else {
            console.log(req.query.day);
            console.log(req.query.time);
            fs.readFile(path.join(__dirname, "../public/reservations.html"), (err, data)=>{
                if (err) {
                    // res.sendFile(path.join(__dirname, "../public/reservations.html"))
                    res.end("server error");
                    throw err
                } else {
                    let stringData1 = data.toString();
                    let stringData2 = stringData1.replace(`value="${day}"`, `value="${day}" selected`);
                    let stringDataFinal = stringData2.replace(`value="${time}"`, `value="${time}" selected`);
                    res.send(stringDataFinal);
                    res.end();
                }
            })
        }
    });

    app.get("/calendar", (req, res)=>{
        res.sendFile(path.join(__dirname, "../public/calendar.html"))
    })
}