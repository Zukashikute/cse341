// Express Web Server
const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send("Jared Bala");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log('Web Server is listening at port ' + (port));
});