<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/article">Artikel</router-link>
    <li v-if="!isLoggedIn" class="nav-item">
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </li>
    <li class="nav-item" v-else>
      <button @click="logout" class="btn btn-primary nav-link">Logout</button>
    </li>
  </nav>
</template>

<script>
export default {
  name: 'App',
  data() {
    false
  },
  created() {
    this.checkLoginStatus();
  },
  methods: {
    checkLoginStatus() {
      const user = JSON.parse(localStorage.getItem('user'));

      if(user && user.token) {
        this.isLoggedIn = true;
      }else{
        this.isLoggedIn = false;
      }
    },
    logout() {
      localStorage.removeItem('user');
      this.isLoggedIn = false;
      this.$router.push('/login');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
