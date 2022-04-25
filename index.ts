import fastify, { FastifyRequest } from "fastify";
import { SocketStream } from "fastify-websocket";

const server = fastify();
server.register(require('fastify-websocket'));

server.get("/game", {websocket: true}, (connection: SocketStream, req: FastifyRequest) => {
    connection.socket.on('message', message => {
        connection.socket.send('hi from server');
    })
});

server.get('/ping', async (request, reply) => {
    return 'pong\n';
});

server.listen(8080, (err, adress) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${adress}`);
})