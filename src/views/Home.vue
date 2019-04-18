<template>
  <div class="home">
    <Nav/>
      <Welcome/>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import Welcome from '../components/Welcome.vue'

export default {
  name: 'Home',
  components:{
    Nav,
    Footer,
    Welcome
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
