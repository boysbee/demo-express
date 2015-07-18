var express = require('express');

var router = express.Router();

/ * GET API */
router.get('/', function(req,res,next){
	res.send('Hello this api page');
});

router.get('/userinfo/', function(req, res,next){
	var userid = req.param('id');

    console.log('get user id : ' + userid);

    var mockJson = {
    	id: userid,
    	name: 'Nattaporn',
    	facbook: 'https://www.facebook.com/nattaporn.chatmarairut'
    };

    res.type('application/json');
	res.json(mockJson);
});

router.post('/user/add', function(req, res, next){
	var id = req.body.id
	var name = req.body.name;
	
	var facbookUrl = req.body.facebook;
	
    console.log('id: %s, name: %s, facbook: %s',id,name,facbookUrl);
    res.type('application/json');
    res.json({
    	message: "Ok, I got your data."
    });
   
});

module.exports = router;