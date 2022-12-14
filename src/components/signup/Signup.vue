<template>
    <div class="row" :style="styleObj">
        <div class="col">
            <template v-if="socialIcons && socialIcons.length">
                <div class="social-login">
                    <div
                        class="social-icon"
                        :class="social.label"
                        v-for="(social, i) in socialIcons"
                        :key="i"
                        :title="social.label"
                        :style="social.styleObj"
                        @click.prevent="onSocialClick(social)"
                    >
                        <i v-if="social.icon" :class="social.icon"></i>
                        <img v-else-if="social.image" :src="social.image" :alt="social.label">
                    </div>
                </div>
                <div class="row or">
                    <span v-if="orText" class="custom-or">{{orText}}</span>
                    <div v-else class="col-8 col-offset-2">
                        <p>or</p>
                        <div class="line"></div>
                    </div>
                </div>
            </template>
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
                    :terms="showTerms"
                    :errorMessage="error"
                    :successMessage="success"
                    @submit="signup($event)"
                    @cancel="cancel()"
                ></zek-form>
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
                    showConfirmation: true,
                    confirmationLabel: 'Confirm Password',
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
        url: String,
        signupButton: [String, Object],
        socialIcons: Array, // [{icon: '', image:'', label:''}]
        styleObj: Object,
        error: String,
        success: String,
        orText: String,
        showTerms: Boolean
    },
    data() {
        return {
        };
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
            delete data.confirm_password;
            delete data.tnc;
            delete data.undefined;
            this.$emit('beforeSignup',data);
            axios({
                method: 'post',
                url: this.url || 'https://zkdoer-zeauth-dev-kacxkbhvxa-uc.a.run.app/signup',
                data
            })
            .then((res) => {
                this.error = '';
                this.$emit('onSignupSuccess', res.data);
            })
            .catch((error) => {
                this.$emit('onSignupError', error);
            });

        },
        onSocialClick(socialIcon) {
            if ( socialIcon.url ) {
                location.replace(socialIcon.url);
            }
            this.$emit('socialIconClicked', socialIcon.label)
        },
        cancel() {
            this.error = '';
        }
    }
  }
</script>

<style lang="scss">
.social-icon {
    cursor: pointer;
    &:hover {
        cursor: pointer;
    }
}
.or {
    margin-top: -17px;
    margin-bottom: 5px;
    text-align: center;
    justify-content: center;
    .line {
        height: 2px;
        background: #CBCBD4;
        margin-bottom: 20px;
    }
    p {
        position: relative;
        top: 30px;
        background: #fff;
        display: inline-block;
        padding: 0 10px;
        width: initial;
        font-size: 22px;
        font-weight: 500;
    }
}
</style>
