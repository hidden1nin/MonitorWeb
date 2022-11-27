<template>
    <div class="border">
        <div class = "row">
            <input type="text" placeholder="PIN" :class="{ error: error, success: success}"  v-model=pin v-on:input="inputChange">
        </div>
        <!-- <button id="start"  @click="start">Start</button> -->
    </div>
    
</template>
<script>
import SocketioService from '../services/socketio.service.js';
export default {
  name: 'StartButton',
  props: ['error','success'],
  methods:{
    inputChange(){
        SocketioService.search(this.pin);
    }
  },
  data(){
    return {
        pin: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.border{
    position: relative;
    color: black;
    display: flex;    
    flex-direction: row;
    align-items: center;
    background-color: white;
    padding: 4px 16px 4px 16px;
    border-radius: 8px;

    .row{
        input{
            border: none;
            font-size: 16px;
            font-family: Quicksand,sans-serif;
            font-weight: 500;
            width: 80px;
            border-bottom: #1b1e23 solid 2px;
            &.error{
                border-bottom: red solid 2px;
            }
            &.success{
                border-bottom: green solid 2px;
            }
            margin-bottom: 8px;
            &:focus{
                outline: none;
            }
        }
        display: flex;    
    flex-direction: row;
    }
}
</style>