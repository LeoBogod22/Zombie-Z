const express = require('express');
const app = express();
const port = 5000;
var cors = require('cors'); //added by hu

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); //added by hu

// Import Routes directory
require('./api/getplaces')(app);
require('./api/getplaces2')(app);
require('./api/getplaces3')(app);
require('./api/data')(app);
app.get('/', (req, res) => {
  res.send('PORT 5000');
});

app.listen(port, (err) => {
  if (err) { console.log(err); };
  console.log('Listening on port ' + port);
});