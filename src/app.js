require("./db/db-connection");
const port = process.env.PORT || 3001;
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/lesson-routes');
const userRoutes = require('./routes/user-routes');
//const admin = require('./routes/admin-route')
app.use(bodyParser.json());
app.use('/', routes);
app.use('/auth', userRoutes);
app.listen(port, () => {
    console.log('Server is running on port number ' + port);
});
