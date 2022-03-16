<template>
  <div class="home" @mousemove="mousePosition">
    X座標:{{ pageX }}
    Y座標:{{ pageY }}
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="icon fa-3x">
      <i class="fa-solid fa-cog fa-spin fa-spin-reverse"></i>
    </div>
    <button type="button" class="pointer" :class="{'wait': isWait}" @click="goToAbout">about</button>
    <button type="button" class="pointer" :class="{'wait': isWait}" @click="goToContent">content</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      pageX: 0,
      pageY: 0
    }
  },
  computed: {
    isWait () {
      return this.$store.getters.isWait
    }
  },
  methods: {
    goToAbout () {
      setTimeout(() => {
        this.$router.push({ path: '/about' })
      }, 1000)
      this.$store.dispatch('mouse', true)
    },
    goToContent () {
      setTimeout(() => {
        this.$router.push({ path: '/content' })
      }, 1000)
      this.$store.dispatch('mouse', true)
    },
    mousePosition (event) {
      this.pageX = event.pageX
      this.pageY = event.pageY
      // console.log(event)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  .icon{
    height: 50px;
    width: 50px;
    background-color: #fa0;
  }
  .pointer {
    cursor: pointer
  }
  .wait{
    cursor: wait
  }
</style>
