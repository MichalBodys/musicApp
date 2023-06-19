
<template>
    <navigation></navigation>

    <router-view></router-view>


    <player />


    <auth></auth>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Player from './components/Player.vue';
import Auth from './components/Auth.vue';
import { mapWritableState } from 'pinia';
import useUserStore from "@/stores/user"
import { auth } from './includes/firebase';


export default{
  name: "App",
  components:{
    Navigation,
    Auth,
    Player,
  },
  computed:{
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  created(){
    if(auth.currentUser){
      this.userLoggedIn = true;
    }
  },
}
</script>