import { Server } from 'socket.io';

class SocketService {
    private _io: Server;

    constructor() {
        console.log('Init Socket Service...');
        this._io = new Server();
    }

    get io() {
        return this._io;
    }

    public initListeners() {
        const io = this._io;
        io.on("connect", (socket) => {
            console.log('New Socket Connected', socket.id);
        })
    }
}

export default SocketService;