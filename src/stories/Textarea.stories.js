import ZekTextarea from '../components/textarea/Textarea.vue';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Zekoder/Textarea',
    component: ZekTextarea,
    argTypes: {
        required: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        showLimitIndicator: {
            control: { type: 'boolean' },
        },
        label: {
            control: { type: 'object' },
        },
        customClass: { type: 'text' },
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
        form: {
            control: { type: 'text' },
        },
        limitIndicatorStyle: {
            control: { type: 'object' },
        },
    }
};

const Template = (args, { argTypes }) => ({
    components: { ZekTextarea },
    props: Object.keys(argTypes),
    methods: { action },

    template: '<zek-textarea v-bind="$props" @onChange="action(`changed`)()"></zek-textarea>',
});

export const Primary = Template.bind({});
Primary.args = {
    required: true,
    disabled: false,
    showLimitIndicator: true,
    label: "Label",
    initialValue: "",
    minMaxValue: {
        min: "10",
        max: "100",
    },
    styleObject: {
        resize: "none"
    },
    name: "",
    id: "",
    placeholder: "input",
    readonly: false,
    form: "",
    limitIndicatorStyle: {
        position: "absolute",
        top: "0",
        right: "0",
        fontSize: "0.8rem",
        color: "#999",
    }
};

export const Secondary = Template.bind({});
Secondary.args = {};