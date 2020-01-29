require("./db/db-connection");
const port = process.env.PORT || 3001;
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const lesson = require('./routes/lesson-route');

app.use(bodyParser.json());
app.use('/lessons', lesson);

app.listen(port, () => {
    console.log('Server is running on port number ' + port);
});
