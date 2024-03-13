// console.log('Hello from server');

import http from 'http';
import SocketService from './services/socket';

async function init() {

    const socketService = new SocketService();

    const httpServer = http.createServer();
    const PORT = process.env.PORT ?? 8000;

    socketService.io.attach(httpServer);

    httpServer.listen(PORT, () => {
        console.log(`HTTP Server Started at PORT: ${PORT}`);
    })
}

init();