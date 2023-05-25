
<template>
  <app-Form>
    <template v-slot:help>
      <p>{{ help }}</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="email">
      <input type="text" placeholder="username">
      <input type="password" placeholder="password">
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
    <p>Dummy text</p>
  </app-Form>

  <app-Form>
    <template v-slot:help>
      <p>Contact help text.</p>
    </template>
    <template  v-slot:fields>
      <input type="text" placeholder="name">
      <input type="text" placeholder="message">
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </app-Form>

</template>

<script>
import AppForm from './components/Form.vue'


export default{
  name: 'App',
  components:{
    AppForm,
  },
  data(){
    return{
      help: 'this is some help text.'
    }
  }
}

</script>
