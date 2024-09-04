<template>
    <div class="card card-body">
        <h3>Komentar</h3>
        <div v-if="userLoggedIn">
            <div class="mb-3">
                <textarea class="form-control" v-model="newComment" placeholder="Add a comment"></textarea>
            </div>
            <button @click="submitComment" class="btn btn-primary">Kirim komentar</button>
        </div>
    </div>

    <div v-for="comment in comments" :key="comment.id" class="card card-body mt-2 bg-warning">
        <p>{{ comment.body }}</p>
        <small>{{ comment.time }}</small>
    </div>
</template>

<script>
export default {
    props: ['articleId'],
    data() {
        return {
            comments: [
                { id: 1, body: 'Ini adalah komentar', time: '' },
                { id: 2, body: 'Ini adalah komentar kedua', time: '' },
            ],
            newComment: '',
            userLoggedIn: false
        }
    },
    created() {
        this.checkLoginStatus();
    },
    methods: {
        submitComment() {
            if(this.newComment.trim() === '') return;
            const newComment = {
                id: this.comments.length + 1,
                body: this.newComment,
                time: Date(),
            };
            this.comments.push(newComment);
            this.newComment = '';

            console.log(newComment);
            
        },
        checkLoginStatus() {
            const user = JSON.parse(localStorage.getItem('user'));

            if(user && user.token) {
                this.userLoggedIn = true;
            }else{
                this.userLoggedIn = false;
            }
        }
    }
}
</script>