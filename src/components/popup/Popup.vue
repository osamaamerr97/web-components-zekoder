<template>
    <transition>
        <div v-if="showForm" class="zek-popup-container" :style="getPositionStyle()">
            <div :class="`zek-popup p-4 ${customClass}`" :style="styleObj">
                <div v-if="showCloseIcon" class="zek-popup-close-button" @click="$emit('cancel')">
                    <i class="fas fa-times"></i>
                </div>
                <template>
                    <ZekForm
                        v-if="formProps"
                        v-bind="formProps"
                        @submit="$emit('submit', $event)"
                        @cancel="$emit('cancel', $event)"
                    />
                    <component v-else :is="content.component" v-bind="content.props" v-on="content.events"></component>
                </template>
            </div>
            <div v-if="showForm && dimBackground" class="zek-popup-background" @click="$emit('cancel')"></div>
        </div>
    </transition>
</template>

<script>
import ZekForm from "../form/Form.vue";
export default {
    name: "ZekPopup",
    components: { ZekForm },
    props: {
        show: Boolean,
        width: {
            type: String,
            default: "500px"
        },
        height: {
            type: String,
            default: "500px"
        },
        position: {
            type: String,
            default: "center"
        },
        formProps: Object,
        customClass: {
            type: String,
            default: ""
        },
        styleObj: Object,
        content: Object,
        dimBackground: {
            type: Boolean,
            default: true
        },
        showCloseIcon: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            showForm: this.show ?? false
        };
    },
    methods: {
        getPositionStyle() {
            this.position = this.position.toLowerCase();
            const checkRightOrLeft = position => {
                if (position.includes("right")) {
                    return "flex-end";
                } else if (position.includes("left")) {
                    return "flex-start";
                } else {
                    return "center";
                }
            };
            if (this.position.includes("top")) {
                return {
                    alignItems: "flex-start",
                    justifyContent: checkRightOrLeft(this.position)
                };
            } else if (this.position.includes("bottom")) {
                return {
                    alignItems: "flex-end",
                    justifyContent: checkRightOrLeft(this.position)
                };
            } else {
                return {
                    alignItems: "center",
                    justifyContent: checkRightOrLeft(this.position)
                };
            }
        }
    },
    watch: {
        show: function(newVal) {
            this.showForm = newVal;
        }
    }
};
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter,
.v-leave-to {
    opacity: 0;
}

.v-enter-to,
.v-leave {
    opacity: 1;
}

.zek-popup-container {
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    display: flex;
    transition: opacity 0.7s ease;
    .zek-popup {
        position: absolute;
        display: flex;
        width: v-bind(width);
        height: v-bind(height);
        background: white;
        z-index: 1;
        overflow: hidden;
    }
    .zek-popup-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 0;
    }
    .zek-popup-close-button {
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px 15px;
        cursor: pointer;
        color: #333;
        font-size: 20px;
        &:hover {
            color: #666;
        }
    }
}
</style>
