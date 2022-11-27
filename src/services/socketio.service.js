import { io } from 'socket.io-client';

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT, {
        auth: {
          token: 'abc'
        }
    });
    
    this.socket.emit('my message', 'Hello there from Vue.');
    this.socket.on('my broadcast', (data) => {
        console.log(data);
    });
  }

  search(key){
    if(key.length<4){ this.$emit('connectionReady',false); return;}
    this.socket.emit('search',key);
  }
  subscribeToSearch(cb) {
    if (!this.socket) return(true);
      this.socket.on('search result', (data)=>{
      console.log(data);
      return cb(null, data);
    });
  }
  subscribeToQuit(cb) {
    if (!this.socket) return(true);
      this.socket.on('close-window', (data)=>{
      console.log(data);
      return cb(null, data);
    });
  }
  disconnect() {
    if (this.socket) {
        this.socket.disconnect();
    }
  }
}   

export default new SocketioService();