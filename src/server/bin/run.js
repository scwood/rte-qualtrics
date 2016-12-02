var app = require('../app.js');

var port = process.env.EXPRESS_PORT || 3000;
app.listen(port, function () {
	console.log('Listening on port ' + port);
});
