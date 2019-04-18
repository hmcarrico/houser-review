const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const homesController = require('./controller/homesController')
require('dotenv').config()

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('connected to da coolest db ever')
});

app.get('/api/gethomes', homesController.getHomes);
app.post('/api/posthome', homesController.createHome);
app.delete('/api/deletehome', homesController.deleteHome);

const port = 6900;
app.listen(port, () => console.log(`on da coolest port around, ${port}`));