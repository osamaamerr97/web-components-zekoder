import ChatPrompt from '../components/chat-prompt/ChatPrompt'
import { action } from '@storybook/addon-actions';

export default {
    title: 'Zekoder/Chat Prompt',
    component: ChatPrompt,
    argTypes: {},
};

const Template = (args, { argTypes }) => ({
    components: { ChatPrompt },
    props: Object.keys(argTypes),
    methods: { action },
    template: '<chat-prompt v-bind="$props" @close="action(`Close`)()" @onSend="action(`onSend`)($event)" @popupClosed="action(`Popup closed`)($event)"></chat-prompt>',
});

export const Primary = Template.bind({});

Primary.args = {
    textarea: {
        disabled : true
    }
}
