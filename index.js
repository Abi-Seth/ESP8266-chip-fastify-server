const { logger } = require('./utils/logger.util');
const { responseToESP8266 } = require('./controllers/index')

const fastify = require('fastify')({
    logger: true
});

fastify.get('/', function (request, reply) {
    reply.send({ message: 'ESP8266 server running.' })
})

fastify.post('/message', function (request, reply) {
    responseToESP8266(request, reply);
})

fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }

    logger(`Server started and running on ${address}`, 'success');
})