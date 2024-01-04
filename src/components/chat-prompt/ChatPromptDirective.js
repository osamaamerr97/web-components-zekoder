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


        const ChatPromptComponent = Vue.extend(ChatPrompt);
        chatPrompt = new ChatPromptComponent({ propsData: props });
        el.appendChild(chatPrompt.$mount().$el);

        Object.keys(events).forEach(event => {
            chatPrompt.$on(event, events[event]);
        });
        
        chatPrompt.$on('close', () => {
            // unmount the chat prompt component
            removeChatPrompt();
        });
        // listen to open event from the parent component
        vnode.context.$on('openZeChat', () => {
            chatPrompt.show = true;
        });

        // listen to close event from the parent component
        vnode.context.$on('closeZeChat', () => {
            chatPrompt.show = false;
        });
    },
    unbind(el, binding, vnode) {
        vnode.context.$off('openZeChat');
        // Check if the chat prompt component is a direct child of the parent element
        removeChatPrompt();
    }
}
