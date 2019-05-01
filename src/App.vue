<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style lang="css">


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin:0;
}

body {
    display: flex;
    flex-direction: column;
}

.content {
    flex: 1 0 auto;
}

.footer {
    flex-shrink: 0;
}

</style>
