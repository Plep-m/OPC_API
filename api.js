var dboperation = require('./dboperation.js');
var city = require('./city.js');

var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
const { response } = require('express');
var app = express();
var router = express.Router();


app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());
app.use('/api', router);

router.use((request,response,next)=>{
    console.log('API requested');
    next();
});



router.route('/city/:id').get((request,response)=>{
    dboperation.getCity(request.params.id).then(result => {
        response.json(result[0]);
    })

});

router.route('/shop/:ville_name').get((request,response)=>{
    dboperation.getShop(request.params.ville_name).then(result => {
        response.json(result);
    })
});

var port = process.env.PORT || 8090;
app.listen(port);
console.log('OPC running on port ' + port);

