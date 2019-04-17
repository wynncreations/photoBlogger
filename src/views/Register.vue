<template>
  <div class="home">
    <Nav/>
        Register!
    <Footer/>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'


export default {
  name: 'Register',
  components:{
    Nav,
    Footer,
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
