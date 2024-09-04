<template>
    <header>
  <!-- Fixed navbar -->
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand text-bold" href="#">NEWS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/article" class="nav-link">Artikel</router-link>
          </li>
          </ul>
          <div class="d-flex">
            <div v-if="!isLoggedIn" class="nav-item">
            <router-link to="/login" class="btn btn-primary">Login</router-link>
            <router-link to="/register" class="btn btn-success">Register</router-link>
            </div>
            <div class="nav-item" v-else>
            <button @click="logout" class="btn btn-danger nav-link">Logout</button>
            </div>
          </div>
      </div>
    </div>
  </nav>
</header>
<div class="container">
    <router-view/>
</div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            isLoggedIn: false,
        }
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
header {
    margin-bottom: 100px;
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
