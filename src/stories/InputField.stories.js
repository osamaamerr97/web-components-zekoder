import ZekInput from '../components/input-field/InputField.vue';
import { action } from '@storybook/addon-actions';
export default {
    title: 'Zekoder/Input Field',
    component: ZekInput,
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['short-text', 'long-text', 'number', 'email', 'password', 'date', 'time', 'datepicker', 'month', 'week', 'url', 'tel', 'color', 'range', 'file'],
        },
        inputType: {
            control: { type: 'select' },
            options: ['text', 'password', 'email', 'number', 'date', 'time', 'datepicker', 'month', 'week', 'url', 'tel', 'color', 'range', 'file'],
        },
        label: {
            control: { type: 'object' },
        },
        customClass: { type: 'text' },
        inputStyle: { type: 'object' },
        required: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        icon: {
            control: { type: 'text' },
        },
        iconSettings: {
            control: { type: 'object' },
        },
        showPasswordButton: {
            control: { type: 'text' },
        },
        pattern: {
            control: { type: 'text' },
        },
        initialValue: {
            control: { type: 'text' },
        },
        minMaxValue: {
            control: { type: 'object' },
        },
        styleObject: {
            control: { type: 'object' },
        },
        name: {
            control: { type: 'text' },
        },
        id: {
            control: { type: 'text' },
        },
        placeholder: {
            control: { type: 'text' },
        },
        readonly: {
            control: { type: 'boolean' },
        },
    }
};

const Template = (args, { argTypes }) => ({
    components: { 'zek-input': ZekInput },
    props: Object.keys(argTypes),
    methods: { action },
    template: '<zek-input v-bind="$props" @onInput="action(`input`)()" @iconClicked="action(`iconClicked`)()" />',
});

export const Primary = Template.bind({});
Primary.args = {
    type: "text",
    label: {
        text: "Label",
        style: { padding: '0 10px' }
    },
    inputType: "text",
    customClass: '',
    inputStyle: {},
    required: true,
    disabled: false,
    icon: "fa fa-search",
    iconSettings: {
        position: "left",
        clickable: false,
        style: {
            margin: "0 0.5rem",
        },
    },
    showPasswordButton: 'icon',
    pattern: "",
    initialValue: "",
    minMaxValue: {
        min: "10",
        max: "100",
    },
    styleObject: {
    },
    name: "",
    id: "",
    placeholder: "input",
    readonly: false,
    inputStyle: {}
};

export const Secondary = Template.bind({});
Secondary.args = {};
