<template>
    <div class="row" :style="styleObj">
        <zek-form
            class="col-12"
            :class="customClass"
            :theme="theme"
            :inputs="inputs"
            :submitButton="submitButton"
            :cancelButton="{show:false}"
            :errorMessage="error"
            @submit="login($event)"
            @cancel="cancel()"
        ></zek-form>
    </div>
</template>

<script>
  import ZekForm from "../form/Form.vue";
  import auth0 from 'auth0-js';
  import * as axios from 'axios';
  import { initializeApp } from 'firebase/app';
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

  export default {
    name: 'ZekLogin',
    components: { ZekForm },
    props: {
        theme: String,
        customClass: String,
        email: Object,
        password: Object,
        showForgotLink: Boolean,
        showRememberMe: Boolean,
        loginButton: [String, Object],
        image: Object,
        webAuthConfig: Object,
        firebaseConfig: Object,
        styleObj: Object
    },
    data() {
        const data = {
            error: '',
            inputs:[
                {
                    name: 'email',
                    type: 'short-text',
                    inputType: 'email',
                    customClass: 'email-username',
                    placeholder: 'Please enter your e-mail',
                    label: 'e-mail address',
                    required: false,
                },
                {
                    name: 'password',
                    type: 'short-text',
                    inputType: 'password',
                    customClass: 'password',
                    placeholder: 'Please enter your password',
                    label: 'password',
                    required: false,
                }
            ],
            webAuth: null,
            fireBase: null
        }
        if ( this.email ) {
            data.inputs[0] = this.email;
        }
        if ( this.password ) {
            data.inputs[1] = this.password;
        }
        return data;
    },
    created() {
        if(this.webAuthConfig) {
            this.webAuth = new auth0.WebAuth(this.webAuthConfig);
        } else if (this.firebaseConfig) {
            this.fireBase = initializeApp(this.firebaseConfig);
        }
    },
    computed:{
        submitButton() {
            let props = {
                theme: this.theme,
                buttonType: 'submit',
                label: 'Sign In',
                show: true
            };
            if(typeof(this.loginButton)=='string'){
                props = { 
                    ...props,
                    label: this.loginButton,
                    show: this.loginButton
                }
            } else {
                props = { 
                    ...props,
                    ...this.loginButton
                }
            }
            return props
        }
    },
    methods:{
        login(data) {
            this.$emit('beforeLogin');
            if(this.webAuth) {
                this.auth0Login(data);
            } else if (this.fireBase) {
                this.firebaseLogin(data);
            } else {
                this.defaultLogin(data);
            }
        },
        firebaseLogin(data) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, data['email'], data['password'])
            .then((userCredential) => {
                localStorage.setItem('userInfo', JSON.stringify(userCredential.user));
                localStorage.setItem('accessToken', userCredential.user.stsTokenManager.accessToken);
                this.error = '';
                this.$emit('onLoginSuccess', userCredential);
            })
            .catch((error) => {
                this.$emit('onLoginError', error);
                const errorCode = error.code;
                // const errorMessage = error.message;
                this.error = errorCode;
            });
        },
        auth0Login(data){
            this.webAuth.login({
                realm: 'Username-Password-Authentication',
                username: data['email'],
                password: data['password'],
            }, (err,dat) =>  {
                if ( err ) {
                    this.$emit('onLoginError', err);
                    this.error = err.description || err.error_description || 'There was an error. Please try again';
                } else if ( dat ) { 
                    this.$emit('onLoginSuccess', dat);
                    this.error = '';
                }
            }); 
        },
        defaultLogin(data){
            axios({
                method: 'post',
                url: 'https://zkdoer-zeauth-dev-kacxkbhvxa-uc.a.run.app/users/login',
                data
            })
            .then((res) => {
                localStorage.setItem('userInfo', JSON.stringify(res.data));
                localStorage.setItem('accessToken', res.data);
                this.error = '';
                this.$emit('onLoginSuccess', res.data);
            })
            .catch((error) => {
                this.$emit('onLoginError', error);
                const errorCode = error.code;
                // const errorMessage = error.message;
                this.error = errorCode;
            });
        },
        cancel() {
            this.error = '';
        }
    }
  }
</script>

<style></style>