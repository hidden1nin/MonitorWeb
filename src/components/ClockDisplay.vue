<template>
    <div>
      <div class="clock">
    <div class="clock__second"></div>
    <div class="clock__minute"></div>
      <div class="clock__hour"></div>
    <div class="clock__axis"></div>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
      <section class="clock__indicator"></section>
  </div>
    </div>
  </template>
  <script>
  export default {
    name: 'ClockDisplay',
    methods:{
    },
    mounted() {
          var currentSec = getSecondsToday();
  
          var seconds = (currentSec / 60) % 1;
          var minutes = (currentSec / 3600) % 1;
          var hours = (currentSec / 43200) % 1;
  
          setTime(60 * seconds, "second");
          setTime(3600 * minutes, "minute");
          setTime(43200 * hours, "hour");
  
          function setTime(left, hand) {
              document.getElementsByClassName("clock__" + hand)[0].style.animationDelay =""+ left * -1 + "s";
          }
  
          function getSecondsToday() {
          let now = new Date();
  
          let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
          let diff = now - today; 
          return Math.round(diff / 1000);
          }
    },
    
    data() {
      return {
      };
    }
}
</script>

<style lang="scss" scoped>

  .clock {
    height: 150px;
    width: 150px;
    border-radius: 150px / 2;
    display: flex;
    justify-content: center;
    position: relative;
    &__second,
    &__minute,
    &__hour, &__indicator {
      position: absolute;
      left: calc(50% - 1px);
      width: 2px;
      background: #f4eed7;
      transform-origin: bottom center;
      z-index: 2;
      border-radius: 1px;
    }
    &__second {
      height: #{(150px / 2) - 10};
      margin-top: 10px;
      background: #4b9aaa;
      animation: time 60s infinite steps(60);
      z-index: 3;
    }
    &__minute {
      height: #{(150px / 2) - 20};
      margin-top: 20px;
      opacity: 0.75;
      animation: time 3600s linear infinite;
    }
    &__hour {
      height: #{(150px / 2) - 40};
      margin-top: 40px;
      animation: time 43200s linear infinite;
    }
    &__indicator {
      height: #{(150px / 2) - 2};
      border-top: 2px solid #4b9aaa;
      background: none;
    }
    &__indicator:nth-of-type(5n) {
      opacity: 1;
      height: #{(150px / 2) - 7};
      border-top: 7px solid #f4eed7;
    }
    &__axis {
      background: #4b9aaa;
      width: 5px;
      height: 5px;
      border-radius: 3px;
      position: absolute;
      z-index: 4;
      top: #{150px / 2 - 3};
      
    }
  }
  
  @for $i from 1 through 60 {
    section:nth-of-type(#{$i}) {
      transform: rotateZ(calc(6deg * #{$i}));
    }
  }
  
  @keyframes time {
    to {
      transform: rotateZ(360deg);
    }
  }
  </style>
  