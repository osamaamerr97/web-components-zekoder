<template>
    <div v-if="isShown" v-click-outside="close" class="chat-prompt" :class="{ popup: isPopup, inline: !isPopup }">
        <div class="chat-prompt-header" v-if="isPopup">
            <div class="chat-prompt-title">Chat Prompt</div>
            <div class="chat-prompt-actions">
                <button class="chat-prompt-close" @click="close">Close</button>
            </div>
        </div>
        <div class="chat-prompt-messages" v-if="isPopup">
            <div v-for="message in messages" :key="message.id" class="chat-prompt-message">
                <div class="chat-prompt-message-content" v-html="message.content"></div>
                <div class="chat-prompt-message-username">{{ message.username }}</div>
            </div>
        </div>
        <div class="chat-prompt-input-container">
            <ZekTextarea
                class="chat-prompt-input"
                :class="{ loading: loading}"
                :initialValue="inputMessage"
                :placeholder="placeholder"
                :readonly="false"
                :required="false"
                :disabled="false"
                :autoResize="true"
                v-bind="textarea"
                @onInput="inputMessage = $event.value"
                @onEnter="sendMessage"
            />
            <i class="chat-prompt-send fas fa-paper-plane" @click="sendMessage" />
            <div v-if="footNote" class="chat-prompt-footer" v-html="footNote"></div>
        </div>
    </div>
</template>

<script>
import ZekTextarea from "../textarea/Textarea.vue";
import ClickOutside from 'vue-click-outside';
export default {
    name: "ZekChatPrompt",
    components: {
        ZekTextarea
    },
    directives: {
        ClickOutside,
    },
    props: {
        id: {
            type: String,
            default: Date.now().toString()
        },
        show: {
            type: Boolean,
            default: true
        },
        loading: {
            type: Boolean,
            default: false
        },
        isPopup: {
            type: Boolean,
            default: false
        },
        initialMessage: {
            type: String,
            default: ""
        },
        username: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: "Type a message..."
        },
        textarea: {
            type: Object,
            default: () => {}
        },
        footNote: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            messages: [],
            inputMessage: "",
            isShown: this.show,
        };
    },
    mounted() {
        if (this.initialMessage) {
            this.messages.unshift({
                id: this.id,
                content: this.initialMessage,
                username: this.username
            });
        }
    },
    methods: {
        sendMessage() {
            if (this.inputMessage.trim()) {
                const newMessage = {
                    id: Date.now(),
                    content: this.inputMessage,
                    username: this.username
                };
                this.messages.unshift(newMessage);
                this.$emit("onSend", newMessage);
            }
            this.inputMessage = "";
        },
        close() {
            this.$emit("close");
        },
    }
};
</script>

<style lang="scss" scoped>
* {
    transition: all 0.3s;
}

.chat-prompt {
    position: relative;
    margin: 8px;
    width: 100%;
    display: flex;
    flex-direction: column;
    max-height: 200px;

    &.popup {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        display: flex;
        flex-direction: column;
    }

    &.inline {
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: #fff;
    }

    .chat-prompt-header {
        display: flex;
        align-items: center;
        padding: 8px;
        border-bottom: 1px solid #ccc;

        .chat-prompt-title {
            flex-grow: 1;
            font-weight: bold;
        }

        .chat-prompt-actions {
            display: flex;

            .chat-prompt-close {
                padding: 4px 8px;
                background-color: #f5f5f5;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
        }
    }

    .chat-prompt-messages {
        display: flex;
        flex-grow: 1;
        padding: 8px;
        flex-direction: column-reverse;

        .chat-prompt-message {
            margin-bottom: 8px;

            .chat-prompt-message-content {
                padding: 8px;
                background-color: #f5f5f5;
                border-radius: 4px;
            }

            .chat-prompt-message-username {
                margin-top: 4px;
                font-size: 12px;
                color: #888;
            }
        }
    }

    .chat-prompt-input-container {
        display: flex;
        align-items: center;
        padding: 8px;

        .chat-prompt-input {
            display: contents;
            flex-grow: 1;
            :deep textarea {
                width: 100%;
                height: fit-content;
                padding: 8px;
                border: 1px solid #ccc;
                border-radius: 4px;
                resize: none;
            }
            &.loading {
                :deep textarea {
                    background-image: linear-gradient(
                        90deg,
                        #f5f5f5 0px,
                        #f8f8f8 40px,
                        #f5f5f5 80px
                    );
                    background-size: 25%;
                    animation: loading 2s infinite linear;
                }
            }
            @keyframes loading {
                0% {
                    background-position: -100%;
                }
                100% {
                    background-position: 150%;
                }
            }
        }

        .chat-prompt-send {
            margin-left: 8px;
            padding: 4px 8px;
            border: none;
            border-radius: 4px;
            cursor: pointer;

            &:hover {
                background-color: #eee;
            }
        }
    }
}
</style>
