var Hapi = require('hapi'),
    server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 3000
});

//routes
server.route({
    method: 'GET',
    path: '/v1/heartbeat',
    handler: function(request, reply) {
        reply();
    }
});

server.start(function(error) {
    console.log("server started on localhost:3000");
});