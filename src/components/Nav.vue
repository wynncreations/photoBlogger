<template>
  <div class="nav">
    <ul>
        <li class="left"><a class="active" href="/">PhotoBlogger</a></li>

        <li class="right"><a href="/login">Login</a></li>
        <li class="right"><a href="/register">Register</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color:slategrey;
  display: flex;
  height: 40px;
}

li a {
  color: white;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}

.right {
  display: flex;
  justify-content: flex-end;
}
.left{
  display: flex;
  justify-content: flex-start;
}
</style>
