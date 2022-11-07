import ZekToggleButton from '../components/toggle-button/ToggleButton.vue';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Zekoder/Toggle Button',
    component: ZekToggleButton,
    argTypes: {
        disabled: { type: 'boolean' },
        showEnableDisableCheckbox: { type: 'boolean' },
        customClass: { type: 'text' },
        styleObj: { type: 'object' }
    }
};

const Template = (args, { argTypes }) => ({
    components: { ZekToggleButton },
    props: Object.keys(argTypes),
    methods: { action },

    template: '<zek-toggle-button v-bind="$props" @onToggle="action(`toggled`)()"></zek-toggle-button>',
});

export const Primary = Template.bind({});
Primary.args = {
    disabled: false,
    styleObj: {
        width: "400px"
    },
    showEnableDisableCheckbox: false,
    customClass: 'd-flex justify-content-between',
    buttons: [
        {
            name:'fb',
            id: 'fb-0',
            class: "facebook-provider",
            label: "Facebook",
            style: {
                width: "100px",
                borderRadius: "10px",
                background: "red"
            },
            icon: {
                class: 'fab fa-facebook',
                style: {
                    color: 'blue',
                    marginRight: '10px'
                }
            }
        },
        {
            name:'google',
            id: 'goo-0',
            class: "google-provider",
            label: "",
            style: {
                width: "100px",
                borderRadius: "10px",
                background: "blue"
            },
            disabled:true,
            image: {
                src: "https://cdn.iconscout.com/icon/free/png-256/google-2981831-2476479.png",
                width: "50px"
            },
            label: "google"
        },
        {
            name:'tw',
            id: 'tw-0',
            class: "twitter-provider",
            label: "Twitter",
            style: {
                width: "100px",
                borderRadius: "10px",
                border: "2px solid green"
            },
            active: true,
            icon: {
                class: 'fab fa-twitter',
                style: {
                    color: 'blue',
                    marginLeft: '10px'
                }
            },
            textPosition: "left"
        },
    ],
    label: "Social Login"
    
};

export const Secondary = Template.bind({});
Secondary.args = {};