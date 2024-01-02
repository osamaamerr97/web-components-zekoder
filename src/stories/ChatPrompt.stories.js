import ChatPrompt from '../components/chat-prompt/ChatPrompt'
import { action } from '@storybook/addon-actions';

export default {
    title: 'Zekoder/Chat Prompt',
    component: ChatPrompt,
    argTypes: {
        // size: {
        //     control: 'select',
        //     options: ['small', 'medium', 'large', 'block'],
        // },
        // type: {
        //     control: 'select' ,
        //     options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link', 'raised']
        // },
        // theme: {
        //     control: 'select',
        //     options: ['material', 'bootstrap', 'custom']
        // },
        // disabled: {
        //     control: 'boolean'
        // },
        // active: {
        //     control: 'boolean'
        // },
        // loading: {
        //     control: 'boolean'
        // },
        // outlineButton: {
        //     control: 'boolean'
        // }
        
    },
};

const Template = (args, { argTypes }) => ({
    components: { ChatPrompt },
    props: Object.keys(argTypes),
    methods: { action },
    template: '<chat-prompt v-bind="$props" @close="action(`Close`)()" @messageSent="action(`Message Sent`)($event)" @popupClosed="action(`Popup closed`)($event)"></chat-prompt>',
});

export const Primary = Template.bind({});

Primary.args = {
    textarea: {
        disabled : true
    }
}
