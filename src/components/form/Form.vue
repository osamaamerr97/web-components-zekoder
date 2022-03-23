<template>
    <div :style="styleObj">
        <form v-on:submit.prevent="submitForm" action="/" method>
            <zek-column-content :column="column" />
        </form>
    </div>
</template>

<script>
import ZekColumnContent from "../column-content/ColumnContent.vue"
import ZekButton from "../action-button/ActionButton.vue";
import ZekHeading from "../heading-block/HeadingBlock.vue";
import ZekText from "../text-block/TextBlock.vue"
import ZekInput from "../input-field/InputField.vue"
export default {
    components: { ZekColumnContent },
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
    data() {
        return {
            column: {
                rows: [{
                    columns: [
                        {
                            columnWidth: 12,
                            content: {
                                component: 'heading',
                                data: {
                                    text: 'New User',
                                    headingLevel: 6
                                }
                            },
                        },
                        {
                            columnWidth: 12,
                            content: {
                                component: 'text',
                                data: {
                                    text: 'Please enter your details below to create an account.',
                                    lineBreaks: 2
                                }
                            },
                        },
                        {
                            columnWidth: 12,
                            content: {
                                component: 'input',
                                data: {
                                    label: 'First Name',
                                    title: 'firstName',
                                    id: 'firstName',
                                    type: 'text',
                                    placeholder: 'First Name',
                                    required: true,
                                    customClass: 'form-control',
                                    styleObject: {display: 'flex', justifyContent: 'space-between'},
                                    inputStyle: {width: 'calc(100% - 150px)',outline: 'none'}
                                }
                            },
                        },
                        {
                            columnWidth: 12,
                            content: {
                                component: 'input',
                                data: {
                                    label: 'Last Name',
                                    id: 'lastName',
                                    type: 'text',
                                    placeholder: 'Last Name',
                                    required: true,
                                    customClass: 'form-control',
                                    styleObject: {display: 'flex', justifyContent: 'space-between'},
                                    inputStyle: {width: 'calc(100% - 150px)',outline: 'none'}
                                }
                            },
                        },
                        {
                            columnWidth: 12,
                            content: {
                                component: 'input',
                                data: {
                                    label: 'Email',
                                    id: 'email',
                                    type: 'email',
                                    placeholder: 'Email',
                                    required: true,
                                    customClass: 'form-control',
                                    styleObject: {display: 'flex', justifyContent: 'space-between'},
                                    inputStyle: {width: 'calc(100% - 150px)',outline: 'none'}
                                }
                            },
                        },
                        {
                            columnWidth: 12,
                            content: {
                                component: 'input',
                                data: {
                                    label: 'Password',
                                    id: 'password',
                                    type: 'password',
                                    placeholder: 'Password',
                                    required: true,
                                    customClass: 'form-control',
                                    styleObject: {display: 'flex', justifyContent: 'space-between'},
                                    inputStyle: {width: 'calc(100% - 150px)',outline: 'none'}
                                }
                            },
                        },
                        {
                            columnWidth: 12,
                            content: {
                                component: 'input',
                                data: {
                                    label: 'Confirm Password',
                                    id: 'confirmPassword',
                                    type: 'password',
                                    placeholder: 'Confirm Password',
                                    required: true,
                                    customClass: 'form-control',
                                    styleObject: {display: 'flex', justifyContent: 'space-between'},
                                    inputStyle: {width: 'calc(100% - 150px)',outline: 'none'}
                                }
                            },
                        },
                        {
                            columnWidth: 12,
                            content: {
                                component: 'button',
                                data: {
                                    label: 'Submit',
                                    id: 'submit',
                                    type: 'submit',
                                    customClass: 'form-control',
                                    styleObject: {display: 'flex', justifyContent: 'space-between'},
                                }
                            },
                        },
                    ]
                }]
            },
            formData: {},
            defaultData: {}
        };
    },
    methods: {
        submitForm() {
            console.log('submitForm', this.formData);
            this.$emit('submit', this.formData);

        },
        cancelForm() {
            this.resetForm();
            this.$emit('cancel', this.formData);
        },
        resetForm() {
            this.formData = { ...{}, ...this.defaultData };
        },
        togglePasswordShowHide(field) {
            field.inputType = field.inputType == 'password' ? 'text' : 'password';
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
