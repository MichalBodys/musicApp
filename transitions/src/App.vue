<template>
<!-- <button type="button" @click="flag = !flag">Toggle</button> -->

<!-- <transition name="fade" mode="out-in">
  <h2 v-if="flag" key="main">Helloo</h2>
  <h2 v-else key="secondary">Another helloo</h2>
</transition> -->

<!-- <transition name="zoom" type="animation" appear>
  <h2 v-if="flag">Heloo</h2>
</transition> -->

<!--
<transition
@before-eter="beforeEnter"
@enter="enter"
@after-enter="affterEnter"
@before-leave="beforeLeave"
@leave="leave"
@after-leave="afterLeave"
:css="true"
name="fade"
>
  <h2 v-if="flag">Hey</h2>
</transition> -->

<button @click="addItem">Add</button>

<ul>

  <transition-group name="fade">
    <li v-for="(number, index) in numbers" :key="number" @click="removeItem(index)" >{{ number }}</li>
  </transition-group>
</ul>

</template>


<script>
export default{
  name: "App",
  data(){
    return{
      flag:true,
      numbers:[1,2,3,4,5],
    };
  },
  methods: {
addItem(){
const num = Math.floor(Math.random() *100 + 1)
const index = Math.floor(Math.random() * this.numbers.length)
this.numbers.splice(index, 0, num)
},
removeItem(index){
this.numbers.splice(index, 1)
},

    beforeEnter(el){

    },
    enter(el){

      // const animation = el.animate([{transform: 'scale3d(0,0,0)'},{}],{
      //   duration: 1000,
      // });
      // animation.onfinish = () => {
      //   done()
      // }
    },
    affterEnter(el){

    },
    beforeLeave(el){

    },
    leave(el){
      // const animation = el.animate([{},{transform: 'scale3d(0,0,0)'}],{
      //   duration: 1000,
      // });
      // animation.onfinish = () => {
      //   done()
      // }
    },
    afterLeave(el){

    },

  }
}

</script>


<style>

li{
  font-size: 32px;
  cursor: pointer;
}
#app{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

h2{
  width: 400px;
  padding: 20px;
  margin: 20px;
}

.fade-enter-from{
  opacity: 0;

}
.fade-enter-active{
  transition: all 1s linear;

}


.fade-leave-to{
  transition: all 1s linear;
  opacity: 0;
}
.fade-leave-active{
  position: absolute;
}

.fade-move{
  transition: all 1s linear;
}

.zoom-enter-active{
animation:zoom-in 1s linear forwards ;
transition: all 1s linear ;
}
.zoom-leave-active{
animation: zoom-out 1s linear forwards;
}

.zoom-enter-from{
  opacity: 0;
}
.zoom-leave-to{
  opacity: 0;
transition:  all 1s linear;
}

@keyframes zoom-in {
  from{
    transform: scale(0,0);
  }
  to{
    transform: scale(1,1);
  }
}

@keyframes zoom-out {
  from{
    transform: scale(1,1);
  }
  to{
    transform: scale(0,0);
  }
}
</style>