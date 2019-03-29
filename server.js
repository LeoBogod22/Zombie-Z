const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5000;
var cors = require('cors'); //added by hu

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); //added by hu

// Import Routes directory
require('./api/getplaces')(app);
require('./api/getplaces2')(app);
require('./api/getplaces3')(app);
require('./api/getplaces4')(app);
require('./api/data')(app);
// app.get('/', (req, res) => {
//   res.sendfile('PORT 5000');
// });  app.use(express.static(path.join(__dirname, 'client/build')));
// Right before your app.listen(), add this:

  app.use(express.static(path.join(__dirname, '../build')));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../build", "index.html"));
});
app.listen(port, (err) => {
  if (err) { console.log(err); };
  console.log('Listening on port ' + port);
});
