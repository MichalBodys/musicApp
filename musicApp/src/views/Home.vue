<template>
  <main>
    <!-- Introduction -->
    <section class="mb-8 py-20 text-white text-center relative">
      <div
        class="absolute inset-0 w-full h-full  introduction-bg bg-cover bg-center"
        style="background-image: url(assets/img/theme.jpg)"
      ></div>
      <div class="container mx-auto">
        <div class="text-white main-header-content">
          <h1 class="font-bold text-5xl mb-5">{{ $t("home.listen") }}</h1>
          <p v-if="!userStore.userLoggedIn" class="w-full md:w-8/12 mx-auto">
           Register to upload your favorite music, add comments and share your music taste with others !
          </p>
          <p v-else>Hello have a good time! {{ userStore.name }} </p>
        </div>
      </div>


    </section>

    <!-- Main Content -->
    <section class="container mx-auto">
      <div class="bg-slate-200 relative flex flex-col">
        <div class="px-6 pt-6 pb-5 font-bold  border-gray-200" v-icon.right="'headphones-alt'">
          <span class="card-title">Songs</span>
          <!-- Icon -->

        </div>
        <!-- Playlist -->
        <ol id="playlist">
          <song-item v-for="song in songs" :key="song.docID" :song="song" />
        </ol>
        <!-- .. end Playlist -->
      </div>
    </section>
  </main>
</template>

<script>
import { songsCollection } from '@/includes/firebase'
import SongItem from '../components/SongItem.vue'
import { mapStores } from 'pinia';
import useUserStore from '@/stores/user';

export default {
  name: 'Home',
  components: {
    SongItem
  },
  computed: {
    ...mapStores(useUserStore)
  },
  data() {
    return {
      songs: [],
      maxPerPage: 10,
      pendingRequest: false
    }
  },
  async created() {
    this.getSongs()

    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener(scroll, this.handleScroll)
  },
  methods: {
    handleScroll() {
      const { scrollTop, offsetHeight } = document.documentElement
      const { innerHeight } = window
      const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight

      if (bottomOfWindow) {
        this.getSongs()
      }
    },
    async getSongs() {
      if (this.pendingRequest) {
        return
      }

      this.pendingRequest = true

      let snapshots

      if (this.songs.length) {
        const lastDoc = await songsCollection.doc(this.songs[this.songs.length - 1].docID).get()

        snapshots = await songsCollection
          .orderBy('modified_name')
          .startAfter(lastDoc)
          .limit(this.maxPerPage)
          .get()
      } else {
        snapshots = await songsCollection.orderBy('modified_name').limit(this.maxPerPage).get()
      }
      snapshots.forEach((document) => {
        this.songs.push({
          docID: document.id,
          ...document.data()
        })
      })
      this.pendingRequest = false
    }
  }
}
</script>
