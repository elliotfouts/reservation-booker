// import packages 
const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
// instantiate express
const app = express();
// set default port number
const PORT = process.env.PORT || 8080;
// set up express to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// points server to a series of route files that contain server logic 
htmlRoutes(app);
apiRoutes(app);
// starts the server
app.listen(PORT, ()=>{
    console.log(`Server listening at Port: ${PORT}`);
});