const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
const eventsRoute = require ('./routes/events');
const bodyParser = require ('body-parser');

require('dotenv').config();

app.use(bodyParser.json());
app.use('/events', eventsRoute);

mongoose.connect(
    process.env.dataBaseUrl,
    {useNewUrlParser: true},
    () => {console.log("connected to database")
});

app.listen(4000);
