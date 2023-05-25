
<template>
  <h3>Hey!</h3>
  <greeting :age="age"></greeting>
  <user :age="age" @age-change="updateAge" :ageChangeFn="UpdateAgeCB"></user>
</template>




<script>
import Greeting from './components/Greeting.vue';
import User from './components/User.vue';
export default{
  name: 'App',
  components: {
    Greeting,
    User
  },
  data(){
    return{
      age: 20
    }
  },
  methods:{
    updateAge(num){
      this.age++
    },
    UpdateAgeCB(num){
      this.age += num
    }
  }
}

</script>

