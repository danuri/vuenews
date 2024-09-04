<template>
    <div class="container">
        <h1>Login</h1>
        <form @submit.prevent="login">
            <div class="mb-3">
                <label for="">Email</label>
                <input type="email" name="email" id="email" class="form-control" v-model="email" required>
            </div>
            <div class="mb-3">
                <label for="">Password</label>
                <input type="password" name="password" id="password" class="form-control" v-model="password" required>
            </div>
            <div class="mb-3">
                <input type="submit" class="btn btn-primary" name="submit" id="submit">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginView',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            if(this.email === 'danunih@gmail.com' && this.password === 'tampan') {
                const userData = {
                    email: this.email,
                    token: 'xxxx'
                };

                localStorage.setItem('user', JSON.stringify(userData));
                alert('sukses');
                this.$router.push('/'); // Redirect
            }else{
                alert('Login failed. Please check your credentials.');
            }
        }
    }
}
</script>