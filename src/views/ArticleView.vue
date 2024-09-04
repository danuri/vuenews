<template>
    <div class="container">
      <h1>Blog</h1>
      <div class="row">
          <div class="col-md-4" v-for="article in articles" :key="article.id">
              <div class="card">
                  <img src="https://via.placeholder.com/150" class="card-img-top" alt="">
                  <div class="card-body">
                      <h5 class="card-title">{{ article.title }}</h5>
                      <p class="card-text">{{ article.body.substring(0, 100) }}...</p>
                      <router-link :to="`/article/${article.id}`" class="btn btn-sim btn-primary">Read more</router-link>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
      return {
          articles: []
      }
  },
  created() {
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=6')
      .then(response => {
          this.articles = response.data;
      });
  }
}
</script>