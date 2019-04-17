<template>
  <div class="footer flex-container">
      This is the footer component
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .flex-container{
        display: flex;
    }  
</style>
