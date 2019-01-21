const fetch = require('node-fetch');

module.exports = (app) => {

  app.post('/search-champs', (req, res) => {

    console.log(req);
    let lat = req.body.param.lat;//before: req.query.lat it's wrong

    let long = req.body.param.long;
    console.log(lat);

    const apiId = 'AIzaSyAeEPop5mofzDJhytOEMtxXaGWFqGB4Q3M';
    const urls = [
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + long + '&rankby=distance&type=hardware_store&key=AIzaSyAeEPop5mofzDJhytOEMtxXaGWFqGB4Q3M',
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + long + '&rankby=distance&type=home_goods_store&key=AIzaSyAeEPop5mofzDJhytOEMtxXaGWFqGB4Q3M'
    ];





    Promise.all(urls.map(url =>
      fetch(url)
        .then(checkStatus)
    )).then(data => {
      console.log(data.name)
      res.send({
        data
      });
    })
      .catch(error => console.log('There was a problem!', error))

  function checkStatus(response) {
            if (response.ok) {
                return Promise.resolve(response.json());
            } else {
                return Promise.reject(new Error(response.statusText));
            }
        }
  })
}