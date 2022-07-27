<template>
    <div class="row" :style="styleObj">
        <div class="col">
            <div class="row social-login"></div>
            <div class="row">
                <zek-form
                    class="col-12"
                    :class="customClass"
                    :theme="theme"
                    :heading="heading"
                    :subheading="subHeading"
                    :inputs="inputs"
                    :submitButton="submitButton"
                    :cancelButton="{show:false}"
                    :errorMessage="error"
                    @submit="signup($event)"
                    @cancel="cancel()"
                ></zek-form>
            </div>
            <div class="row captcha">
            </div>
        </div>
    </div>
</template>

<script>
  import ZekForm from "../form/Form.vue";
  import * as axios from 'axios';

  export default {
    name: 'ZekSignup',
    components: { ZekForm },
    props: {
        theme: String,
        customClass: String,
        heading: {
            type: [String, Object], //for object it should be {text:String, headingLevel:Number, styleObj:Object}
            default: 'Welcome to Zekoder!'
        },
        subHeading: {
            type: [String, Object], //for object it should be {text:String, headingLevel:Number, styleObj:Object}
            default: 'Create an account.'
        },
        inputs: {
            type: Array,
            default: () => {return[
                {
                    name: 'first_name',
                    type: 'short-text',
                    inputType: 'text',
                    customClass: 'first-name',
                    placeholder: 'Please enter your first name',
                    label: 'First Name',
                    columnWidth: 6,
                    required: true,
                },
                {
                    name: 'last_name',
                    type: 'short-text',
                    inputType: 'text',
                    customClass: 'last-name',
                    placeholder: 'Please enter your last name',
                    label: 'Last Name',
                    columnWidth: 6,
                    required: true,
                },
                {
                    name: 'email',
                    type: 'short-text',
                    inputType: 'email',
                    customClass: 'email',
                    placeholder: 'Please enter your e-mail',
                    label: 'E-mail',
                    required: true,
                },
                {
                    name: 'password',
                    type: 'short-text',
                    inputType: 'password',
                    customClass: 'password',
                    placeholder: 'Please enter your password',
                    label: 'Password',
                    required: true,
                },
                {
                    name: 'confirm_password',
                    type: 'short-text',
                    inputType: 'password',
                    customClass: 'confirm-password',
                    placeholder: 'Please confirm your password',
                    label: 'Confirm Password',
                    required: true,
                },
                {
                    name: 'tnc',
                    type: 'checkbox',
                    inputType: 'checkbox',
                    customClass: 'tnc',
                    placeholder: '',
                    label: 'Creating an account means you are okay with our Terms of Service, Privacy Policy, and our default Notification Settings.',
                    required: true,
                }
            ]}
        },
        created() {

        },
        signupButton: [String, Object],
        showSocialIcons: Boolean,
        showCaptcha: Boolean,
        styleObj: Object
    },
    data() {
        const data = {
            error: '',
        }
        return data;
    },
    computed:{
        submitButton() {
            let props = {
                theme: this.theme,
                buttonType: 'submit',
                label: 'Sign Up',
                show: true
            };
            if(typeof(this.signupButton)=='string'){
                props = { 
                    ...props,
                    label: this.signupButton,
                    show: this.signupButton
                }
            } else {
                props = { 
                    ...props,
                    ...this.signupButton
                }
            }
            return props;
        }
    },
    methods:{
        signup(data) {
            let confirmIndex = this.inputs.findIndex(obj => obj.name=='confirm_password');
            if (confirmIndex>-1) {
                this.inputs[confirmIndex]['pattern'] = data.password;
            }
            delete data.confirm_password;
            delete data.tnc;
            console.log(data);
            return;
            this.$emit('beforeSignup',data);
            axios({
                method: 'post',
                url: 'https://zkdoer-zeauth-dev-kacxkbhvxa-uc.a.run.app/signup',
            })
            .then((res) => {
                this.error = '';
                this.$emit('onSignupSuccess', res.data);
            })
            .catch((error) => {
                this.$emit('onSignupError', error);
                const errorCode = error.code;
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