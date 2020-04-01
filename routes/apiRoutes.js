const calendarData = require("../data/calendarData");
const reservationData = require("../data/reservationData");

module.exports = function(app) {
    app.get("/api/calendar", (req, res)=>{
        res.json(calendarData);
    });
    app.get("/api/reservation", (req, res)=>{
        res.json(reservationData);
    });

    app.post("/reservations", (req, res)=>{
        newReservation = req.body;
        let times = ["3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00"];
        for (let i = 0; i < calendarData.length; i++) {
            if (calendarData[i].day == newReservation.reservationDate) {
                for (let j = 0; j < 10; j++) {
                    if (times[j] == newReservation.reservationTime) {
                        let time = times[j];
                        reservationData.push(newReservation);
                        let bool = calendarData[i][time];
                       if (!bool) {
                            console.log(`a reservation has been made on ${calendarData[i].day} at ${time} pm`)
                            calendarData[i][time] = true;
                            res.json(true);
                       } else {
                            res.json(false);
                       }
                    }
                }
            }
        }
    });
}