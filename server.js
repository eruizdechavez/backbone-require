var node_static = require('node-static');
var file = new(node_static.Server)('./public');

require('http').createServer(function(request, response) {
	request.addListener('end', function() {
		file.serve(request, response);
	});
}).listen(8080);
