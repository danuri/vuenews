<template>
    <div class="row justify-content-md-center">
        <div class="col-md-6">
    <div class="card card-body">
        <img :src="getImageUrl(article.id)" class="card-img-top" alt="Gambar">
        <h1>{{ article.title }}</h1>
        <p>{{ article.body }}</p>
        <CommentSection :article-id="article.id"/>
    </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
import CommentSection from './CommentSection.vue';

export default {
    components: {
        CommentSection
    },
    data() {
        return {
            article: {}
        }
    },
    created() {
        const articleId = this.$route.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/posts/${articleId}`)
            .then(response => {
                this.article = response.data;
            });
    },
    methods: {
        getImageUrl(id) {
            return `https://picsum.photos/seed/${id}/500/200`;
        }
    }
}
</script>
