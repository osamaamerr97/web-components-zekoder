<template>
    <div :style="styleObj">
        <form @submit.prevent="submitForm" @reset="cancelForm" action="/" method>
            <zek-column-content :column="content" />
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
            content: {
                rows: [{
                    columns: [
                        {
                            columnWidth: 12,
                            content: {
                                component: 'heading',
                                data: {
                                    text: 'New User',
                                    headingLevel: 1
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
                                    id: 'firstName',
                                    type: 'text',
                                    placeholder: 'First Name',
                                    required: true,
                                    customClass: 'form-control',
                                    styleObject: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
                                    inputStyle: { width: 'calc(100% - 200px)', outline: 'none' },
                                },
                                events: {
                                    input: (input) => this.formData[input.id] = input.value
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
                                    styleObject: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
                                    inputStyle: { width: 'calc(100% - 200px)', outline: 'none' }
                                },
                                events: {
                                    input: (input) => this.formData[input.id] = input.value
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
                                    styleObject: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
                                    inputStyle: { width: 'calc(100% - 200px)', outline: 'none' }
                                },
                                events: {
                                    input: (input) => this.formData[input.id] = input.value
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
                                    showPasswordButton: true,
                                    required: true,
                                    customClass: 'form-control',
                                    styleObject: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
                                    inputStyle: { width: 'calc(100% - 200px)', outline: 'none' }
                                },
                                events: {
                                    input: (input) => this.formData[input.id] = input.value,
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
                                    showPasswordButton: true,
                                    required: true,
                                    initialValue: '',
                                    customClass: 'form-control',
                                    styleObject: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
                                    inputStyle: { width: 'calc(100% - 200px)', outline: 'none' },
                                },
                                events: {
                                    input: (input) => this.formData[input.id] = input.value
                                }
                            },
                        },
                        {
                            columnWidth: 6,
                            content: {
                                component: 'button',
                                data: {
                                    label: 'Submit',
                                    id: 'submit',
                                    type: 'submit',
                                    customClass: 'form-control',
                                    styleObject: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
                                }
                            },
                        },
                        {
                            columnWidth: 6,
                            content: {
                                component: 'input',
                                data: {
                                    id: 'cancel',
                                    type: 'reset',
                                    customClass: 'form-control',
                                    inputStyle: { width: '100%', outline: 'none' }
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
    created() {
        this.formData = this.content.rows[0].columns.forEach(
            (column) => {
                let content = column.content;
                if (content.component === 'input' && content.data.type !== 'reset') {
                    this.defaultData[column.content.data.id] = column.content.data.initialValue ? column.content.data.initialValue : '';
                }
            }
        );
        this.formData = {...this.defaultData};
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
            this.formData = {...this.defaultData};
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
