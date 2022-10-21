<template>
    <div :style="styleObj">
        <zek-heading v-if="heading" v-bind="headingProps"></zek-heading>
        <zek-heading v-if="subheading" v-bind="subheadingProps"></zek-heading>
        <zek-text v-if="description" v-bind="descProps"></zek-text>
        <form @submit.prevent="submitForm" @reset="cancelForm" action="/" method :key="formKey">
            <div class="form-group">
                <zek-column-content :column="content()" />
            </div>
            <zek-text v-if="successMessage" :text="successMessage" class="text-success"></zek-text>
            <zek-text v-if="errorMessage || internalError" :text="errorMessage||internalError" class="text-danger"></zek-text>
            <div class="align-items-center justify-content-center d-flex">
                <zek-button v-if="cancelProps.show" v-bind="cancelProps" @onClick="cancelForm()"></zek-button>
                <zek-button v-if="submitProps.show" v-bind="submitProps"></zek-button>
            </div>
        </form>
    </div>
</template>

<script>
import ZekColumnContent from "../column-content/ColumnContent.vue"
import ZekButton from "../action-button/ActionButton.vue";
import ZekHeading from "../heading-block/HeadingBlock.vue";
import ZekText from "../text-block/TextBlock.vue"
export default {
    components: { ZekColumnContent, ZekButton, ZekHeading, ZekText },
    name: "ZekForm",
    props: {
        heading: [String, Object], //for object it should be {text:String, headingLevel:Number, styleObj:Object}
        subheading: [String, Object],
        description: [String, Object], //for object {text: String, lineBreaks: Number, styleObj: Object}
        inputs: {
            type: Array, //array of objects
            required: true
        },
        submitButton: [String, Object], //for string it is button label, for object it should be {show:true, label:'Submit', styleObj: {}}
        cancelButton: [String, Object],
        theme: String,
        successMessage: String,
        errorMessage: String,
        forgotPassword: Boolean,
        rememberMe: Boolean,
        styleObj: Object,
    },
    computed: {
        headingProps() {
            return typeof (this.heading) == 'string' ? { text: this.heading, headingLevel: 1 } : this.heading;
        },
        subheadingProps() {
            return typeof (this.subheading) == 'string' ? { text: this.subheading, headingLevel: 3 } : this.subheading;
        },
        descProps() {
            return typeof (this.description) == 'string' ? { text: this.description } : this.subheading;
        },
        cancelProps() {
            let props = {
                theme: this.theme,
                buttonType: 'button',
                label: 'Cancel',
                show: true
            };
            if (typeof (this.cancelButton) == 'string') {
                props = {
                    ...props,
                    label: this.cancelButton,
                    show: this.cancelButton
                }
            } else {
                props = {
                    ...props,
                    ...this.cancelButton
                }
            }
            return props
        },
        submitProps() {
            let props = {
                theme: this.theme,
                buttonType: 'submit',
                label: 'Submit',
                show: true
            };
            if (typeof (this.submitButton) == 'string') {
                props = {
                    ...props,
                    label: this.submitButton,
                    show: this.submitButton
                }
            } else {
                props = {
                    ...props,
                    ...this.submitButton
                }
            }
            return props
        },
        formData: {
            get() {
                let obj = {};
                this.inputs.forEach( 
                    (input) => {
                        obj[input.name] = input.initialValue || '';
                    }
                )
                return {...obj}
            },
            set(newVal) {
            }
        },
        defaultData() {
            let obj = {};
            this.inputs.forEach(
                (input) => {
                    obj[input.name] = input.initialValue || '';
                }
            )
            return {...obj}
        },
        
    },
    data() {
        return {
            content: () => {
                let columns = []
                this.inputs.forEach(input => {
                    if(input.type == 'captcha') {
                        this.captchaVerified = false;
                    } 
                    columns.push({
                        columnWidth: input.columnWidth || 12,
                        content: {
                            component: input.type == 'long-text' ? 'textarea' : input.type == 'captcha'? 'captcha' : input.type === 'radio' ? 'radio-button' : input.type === 'dropdown' ? 'dropdown' : 'input',
                            data: input,
                            events: input.type == 'long-text' ?  {
                                onChange: (e) => {
                                    this.formData[input.name] = e; 
                                    this.emitLatestData(input.name);
                                }
                            } : 
                            input.type == 'captcha' ? {
                                onVerify: () => {this.captchaVerified = true;},
                                onExpired: () => {this.captchaVerified = false;}
                            } :
                            input.type == 'dropdown' ? {
                                onSelect: e => { 
                                    this.formData[input.name] = e[0]; 
                                    this.emitLatestData(input.name);
                                }
                            } :
                            {
                                onInput: (e) => {
                                    if ( input.inputType === 'checkbox' ) {
                                        this.formData[input.name] = e.target.checked;
                                    } else if ( input.inputType === 'radio' ) {
                                        this.formData[input.name] = e.value;
                                    } else {
                                        this.formData[input.name] = e.target.value;
                                    }
                                    console.log(input)
                                    this.emitLatestData(input.name)
                                }
                            }
                        }
                    })
                    if(input.inputType == 'password' && input.showConfirmation) {
                        columns.push({
                            columnWidth: input.columnWidth || 12,
                            content: {
                                component: 'input',
                                data: {
                                    ...input,
                                    name: 'confirm_password',
                                    id: 'confirm-password',
                                    label: input.confirmationLabel || 'Confirm Password',
                                    placeholder: 'Please confirm your password',
                                    title:'Both passwords should match',
                                    customClass: 'confirm-password'
                                },
                                events: {
                                    onInput: (e) => {
                                        if( e.target.value != this.formData[input.name] ) {
                                            e.target.setCustomValidity('Passwords do no match');
                                        } 
                                        else {
                                            e.target.setCustomValidity('');
                                        }

                                    }
                                }
                            }
                        })
                    }
                })
                return {
                    rows: [{
                        columns: columns
                    }]
                }
            },
            captchaVerified: true,
            internalError: '',
            formKey: 'initial'
        };
    },
    methods: {
        submitForm() {
            if(!this.captchaVerified) {
                this.internalError = 'Please verify reCaptcha before proceeding';
                return;
            }
            this.internalError = '';
            this.$emit('submit', this.formData);

        },
        emitLatestData(fieldName) {
            this.$emit('update', { 
                fieldName, 
                data: this.formData
            });
        },  
        cancelForm() {
            this.resetForm();
            this.$emit('cancel', this.formData);
        },
        resetForm() {
            this.formData = { ...this.defaultData };
            this.formKey = "reset";
        }
    }
};
</script>

<style scoped>
.show-hide-password {
    text-transform: uppercase;
    position: absolute;
    right: 15px;
    font-size: 12px;
    line-height: 50px;
}
.required-asterik {
    color: red;
}
</style>
