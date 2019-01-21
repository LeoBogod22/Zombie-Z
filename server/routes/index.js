const fs = require('fs');
const path = require('path');

module.exports = (app) => {
    require(`../api/getchampions.js`)(app);
}