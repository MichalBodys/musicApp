<template>
  <div class="flex justify-between text-center mt-4 text-white z-10 px-5">
    <div class="flex w-1/3">
      <p class="my-auto">
        {{ $t("about.add") }}
      </p>
    </div>
    <div class="flex w-1/3">
      <h1 class="text-6xl uppercase text-white leading-normal">
        Listen to <br />your music <br />and<br />relax in<br />
        peace
      </h1>
    </div>
    <div class="flex w-1/3">
      <p class="my-auto mx-auto">
        {{ $t("about.register") }}<br />
        <button @click.prevent="toogleAuthModal"
          class="bg-white text-black uppercase rounded-full px-4 py-1 my-2 border-2 border-black drop-shadow-lg hover:bg-slate-600 hover:text-white transition-colors duration-300"
        >
          {{ $t("about.join") }}
        </button>
      </p>
    </div>

    <img
      class="absolute inset-0 -z-10 opacity-25 w-screen h-screen"
      src="../../public/assets/headphones.png"
      alt=""
    />
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import useModalStore from '@/stores/modal'


export default {
  name: 'About',
  computed: {
    ...mapStores(useModalStore)
  },
  methods: {
    toogleAuthModal(){
      this.modalStore.isOpen = !this.modalStore.isOpen
    },
  }
}
</script>
