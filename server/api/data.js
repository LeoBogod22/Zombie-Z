


const fetch = require('node-fetch');

module.exports = (app) => {

  app.post('/search-data', (req, res) => {

    console.log(req);
    let lat = req.body.param.lat;//before: req.query.lat it's wrong

    let long = req.body.param.long;
    console.log(lat);



  const apiUrl = 'http://www.datasciencetoolkit.org/coordinates2statistics/' + lat + '%2c' + long+'?statistics=population_density';
        fetch(apiUrl).then(res=>res.json()).then(data=>{
       
            console.log(data)
               res.send({
                        data
                    });


})
	    .catch(err => {
			res.redirect('/error');
		});


       })

}