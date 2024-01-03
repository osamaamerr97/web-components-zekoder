import Vue from 'vue';
import ChatPrompt from './ChatPrompt.vue';

let chatPrompt = null;

function removeChatPrompt() {
    if (chatPrompt) {
        chatPrompt.$destroy();
        chatPrompt.$el.parentNode.removeChild(chatPrompt.$el);
        chatPrompt = null;
    }
}
export default {
    name: 'ZeChat',
    bind(el, binding, vnode) {
        const props = binding.value.props || {};
        const events = binding.value.events || {};

        console.log('props', props);
        console.log('events', events);

        const ChatPromptComponent = Vue.extend(ChatPrompt);
        chatPrompt = new ChatPromptComponent({ propsData: props });

        Object.keys(events).forEach(event => {
            chatPrompt.$on(event, events[event]);
        });

        vnode.context.$on('openZeChat', () => {
            // mount the chat prompt component
            el.appendChild(chatPrompt.$mount().$el);
        });
    },
    inserted(el, binding, vnode) {
        // listen to close event from the chat prompt component
        chatPrompt.$on('close', () => {
            // unmount the chat prompt component
            removeChatPrompt();
        });
    },
    unbind(el, binding, vnode) {
        vnode.context.$off('openZeChat');
        // Check if the chat prompt component is a direct child of the parent element
        removeChatPrompt();
    }
}
