import { Server, IncomingMessage, ServerResponse } from 'http';
import * as http from 'http';

const HostName: string = '127.0.0.1';
const PortNumber: number = 5000;

const server: Server = http.createServer((_request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "json");
    response.end("Welcome to my server");
});

server.listen(PortNumber, HostName, () => {
    console.log(`Server started on http://${HostName}:${PortNumber}`);
});
