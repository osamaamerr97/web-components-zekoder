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
    components: { ZekForm },
    props: {
        theme: String,
        customClass: String,
        email: Object,
        password: Object,
        showForgotLink: Boolean,
        showRememberMe: Boolean,
        loginButton: [String, Boolean],
        image: Object,
        webAuthConfig: Object,
        styleObj: Object
    },
    data() {
        const data = {
            error: '',
            success: '',
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
            webAuth: {}
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
        this.webAuth = new auth0.WebAuth(this.webAuthConfig);
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
            this.webAuth.login({
                realm: 'Username-Password-Authentication',
                username: data['email'],
                password: data['password'],
            }, (err,dat) =>  {
                if ( err ) {
                    this.$emit('onLoginError', err);
                    this.error = err.description || err.error_description || 'There was an error. Please try again';
                    this.success = '';
                } else if ( dat ) { 
                    this.$emit('onLoginSuccess', dat);
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