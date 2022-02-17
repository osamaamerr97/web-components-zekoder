<template>
    <div class="row" :style="styleObj">
        <zek-image class="col-6" v-bind="image"></zek-image>
        <zek-form
            class="col-6"
            :theme="theme"
            :inputs="inputs"
            :submitButton="submitButton"
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
  import ZekImage from "../image/Image.vue"
  import auth0 from 'auth0-js';

  export default {
    name: 'ZekLogin',
    components: {ZekForm, ZekImage},
    props: {
        theme: String,
        showForgotLink: Boolean,
        showRememberMe: Boolean,
        loginButton: [String, Boolean],
        image: Object,
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
            redirectUri: 'http://localhost:6006/'
        });
    },
    computed:{
        submitButton() {
            let props= {
                theme: this.theme,
                buttonType: 'submit',
                label: 'Sign In',
                show: true
            };
            if(typeof(this.loginButton)=='string'){
                props = { ...props,
                    label: this.loginButton,
                    show: this.loginButton
                }
            } else {
                props = { ...props,
                    ...this.loginButton
                }
            }
            return props
        }
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
                    this.success = '';
                }
                else if(dat){
                    this.error = '';
                }
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