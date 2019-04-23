<template>
  <div class="home">
    <Nav/>
        <form class='regForm' method="POST" action="/api/users/register">
          Email<input type="email" name="username" v-model="username" required>
          <input type="password" name="password" v-model="password" required>
          <input type="password" v-bind:class="[{equal: isEqual},{notEqual:!isEqual}]" name="cPassword" v-model="cPassword" required>
          <input type="text" name="firstName" v-model="firstName" required>
          <input type="text" name="lastName" v-model="lastName" required>
          <input type="hidden" name="fullName" v-model="fullName" required>
          <input type="hidden" name="dateCreated" v-model="date" required>
          <button type="submit" v-if="isEqual" v-on:click="register()">Register</button>
        </form>
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
  },
  data: function(){
    return{
      username:'',
      password:'',
      cPassword:'',
      firstName:'',
      lastName:''
    }
  },
  computed:{
    fullName: function (){//return the full name.
      return this.firstName + ' ' + this.lastName;
    },
    date: function(){//get the current date
      return Date.now();
    },
    isEqual: function(){//password and confirm password need to be equal
      if(this.password === this.cPassword){
        return true;
      }else{
        return false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.equal{
  background-color: green;
}
.notEqual{
  background-color: red;
}
</style>