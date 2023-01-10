import ZekPopup from '../components/popup/Popup.vue';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Zekoder/Popup',
    component: ZekPopup,
};

const Template = (args, { argTypes }) => ({
    components: { ZekPopup },
    props: Object.keys(argTypes),
    methods: { action },
    template: '<ZekPopup v-bind="$props" @cancel="action(`cancel`)()"/>',
});

export const Primary = Template.bind({});
Primary.args = {
    show: true,
    formProps: {
        heading: 'Form Heading', //for object it should be {text:String, headingLevel:String, styleObj:Object}
        subheading: {
            text: 'Form sub heading',
            headingLevel: 4,
            styleObj: { color: 'red' }
        },
        description: 'Please provide all the details to the best of your knowledge', //for object {text: String, lineBreaks: Number, styleObj: Object}
        inputs: [
            {
                name: 'email',
                type: 'short-text',
                inputType: 'email',
                value: '',
                placeholder: 'Enter email',
                label: 'Email Address',
                required: true
            },
            {
                name: 'fname',
                type: 'short-text',
                value: '',
                placeholder: 'Enter first name',
                label: 'First Name',
                inputType: 'text',
                required: true
            },
            {
                name: 'lname',
                type: 'short-text',
                value: '',
                placeholder: 'Enter last name',
                label: 'Last Name',
                inputType: 'text'
            },
            {
                name: 'lname',
                type: 'long-text',
                value: '',
                placeholder: 'Enter last name',
                label: 'Last Name',
            },
        ],
        submitButton: 'Proceed', //for string it is button label, for object it should be {show:true, label:'Submit', styleObj: {}}
        cancelButton: {
            label: "Discard",
            styleObj: { color: 'black' }
        },
        theme: 'bootstrap',
        errorMessage: '',
        successMessage: '',
        styleObj: {
            "textTransform": "capitalize",
            "textAlign": "center"
        }
    }
};

