<template>
  <div id = "top" :class="{ active: cursor }">
  <StartButton  :success=this.connection :error=!this.connection v-if="state == 'start'" @setState = "setState" @setCursor = "setCursor" @showClock = "showClock"/>
  <LoadingAnimation v-if="state == 'load'"/>
  <ClockDisplay v-if="state == 'clock'"/>
  <h4 v-if="state == 'exit'" class="errorh4">Aborted</h4>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import ClockDisplay from './components/ClockDisplay.vue';
import StartButton from './components/StartButton.vue';
import LoadingAnimation from './components/LoadingAnimation.vue'
import SocketioService from './services/socketio.service.js';
export default {
  name: 'App',
  data: ()=> {
    return {
      cursor: false,
      state: "start",
      connection: false,
    }
  },
  created() {
    SocketioService.setupSocketConnection();
    SocketioService.subscribeToSearch((err, data) => {
          console.log(data);
          this.connection = (data=='true');
          if(this.connection){
            setTimeout(() => {
              this.start();
            },300);
          }
    });
    SocketioService.subscribeToQuit((err, data) => {
          if(data)window.close();
          this.state = "exit";
    });
  },
  beforeUnmount() {
    SocketioService.disconnect();
  },
  methods: {
    start(){
        this.setCursor(true);
        this.showClock();
        if (document.documentElement.requestFullScreen) {  
            document.documentElement.requestFullScreen();  
        } else if (document.documentElement.mozRequestFullScreen) {  
            document.documentElement.mozRequestFullScreen();  
        } else if (document.documentElement.webkitRequestFullScreen) {  
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
        }  
    },
    setCursor(value){
      this.cursor = value;
    },
    setState(value){
      console.log(value)
      this.state = value;
    },
    showClock(){
      this.setState("load")
      setTimeout(() => {
        this.state = "clock"
      }, 3000);
    },
  },
  components: {
    // HelloWorld,
    StartButton,
    LoadingAnimation,
    ClockDisplay,
},
  sockets:{

  }
}
</script>

<style lang="scss">
.errorh4{
  color: red;
}
#top {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: radial-gradient(
    rgba(255,255,255,0.1) 9%,
    transparent 9%
  );
  background-position: 0% 0%;
  background-size: 3vmin 3vmin;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
  background-color: #181818;
  height: 100vh;
  width: 100%;
}
.active {
  cursor: none;
}
body {
  overflow: hidden;
  margin: 0px;
}

</style>
