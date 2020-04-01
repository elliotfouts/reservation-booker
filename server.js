// import packages 
const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
// instantiate express
const app = express();
// set default port number
const PORT = process.env.PORT || 8080;
// add static files
app.use(express.static("public"));
// set up express to handle data parsing 
app.use(express.urlencoded({ extended: true })); // decodes payload from POST request
app.use(express.json()); // turns decoded string into a json object 
// points server to a series of route files that contain server logic 
htmlRoutes(app);
apiRoutes(app);
// starts the server
app.listen(PORT, ()=>{
    console.log(`Server listening at Port: ${PORT}`);
});