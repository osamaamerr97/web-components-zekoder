<template>
    <div>
        <zek-form
            :theme="theme"
            :inputs="inputs"
            :submitButton="{label:'Sign In'}"
            :cancelButton="{show:false}"
            :errorMessage="error"
            :successMessage="success"
            @submit="login($event)"
            @cancel="cancel()"
        ></zek-form>
    </div>
</template>

<script>
  import ZekForm from "../form/Form.vue";
  import auth0 from 'auth0-js';

  export default {
    name: 'ZekLogin',
    components: {ZekForm},
    props: {
        theme: String,
        styleObj: Object
    },
    data() {
        return {
            error: '',
            success: '',
            inputs:[
                {
                    name: 'email',
                    type: 'short-text',
                    inputType: 'email',
                    placeholder: 'Please enter your e-mail',
                    label: 'e-mail address',
                    required: true,
                },
                {
                    name: 'password',
                    type: 'short-text',
                    inputType: 'password',
                    placeholder: 'Please enter your password',
                    label: 'password',
                    required: true,
                }
            ],
            webAuth: {}
        }
    },
    created() {
        this.webAuth = new auth0.WebAuth({
            domain: 'jsc-chatbot-dev.eu.auth0.com',
            clientID: 'odh7OBOl5u5UJJK3B30lQJU2PTpa0NWA',
            responseType: 'token',
            redirectUri: 'http://localhost:6006/login'
        });
    },
    methods:{
        login(data) {
            this.webAuth.login({
                realm: 'Username-Password-Authentication',
                username: data['email'],
                password: data['password'],
            }, (err,dat) =>  {
                console.log(err);
                if(err){
                    this.error = err.description || err.error_description || 'There was an error. Please try again';
                }
                console.log(dat);
            }); 
        },
        cancel() {
            this.error = '';
            this.success = '';
        }
    }
  }
</script>

<style></style>