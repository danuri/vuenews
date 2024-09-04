<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-md-auto">
            <div class="card">
                <div class="card-body">
                    <h3>Register</h3>
                    <form @submit.prevent="register">
                        <div class="mb-3">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" name="name" id="name" v-model="name" required>
                        </div>
                        <div class="mb-3">
                            <label for="email">Email Address</label>
                            <input type="email" class="form-control" name="email" id="email" v-model="email" required>
                        </div>
                        <div class="mb-3">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" name="password" id="password" v-model="password" required>
                        </div>
                        <div class="mb-3">
                            <input type="submit" class="btn btn-primary" name="submit" value="Register">
                        </div>
                    </form>
                    <p>Already have an accoutn? <RouterLink to="/login">Login here</RouterLink></p>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterView',
    data() {
        return {
            name: '',
            email: '',
            password: '',
        };
    },
    methods: {
        register() {
            console.log('Registering', this.name, this.email, this.password);

            this.$router.push('login');
            
        }
    }
}
</script>