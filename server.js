// Express Web Server
const express = require('express');
const app = express();
const mongodb = require('./db/connect');
const bodyParser = require('body-parser');
const cors = require('cors')
const contactsRoutes = require('./routes/contacts');
const homeRoutes = require('./routes/');


const port = process.env.PORT || 3000;

app.use(cors())
   .use('/', homeRoutes)
   .use('/', contactsRoutes);

mongodb.initDb((err, mongodb) => {
   if (err) {
      console.log(err);
   } else {
      app.listen(port, () => {
         console.log('Connected to db and listening on port ' + port);
      });
   }
});