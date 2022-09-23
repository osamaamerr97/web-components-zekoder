<template>
    <div class="right-panel-container">
        <div :class="show ? 'right-panel p-4 active':'right-panel p-4'">
            <ZekForm
                v-if="showForm"
                v-bind="formProps"
                @submit="$emit('submit', $event)"
                @cancel="$emit('cancel', $event)"
            />
        </div>
        <div v-if="show" class="right-panel-background" @click="$emit('cancel');"></div>
    </div>
</template>

<script>
import ZekForm from "../form/Form.vue";

export default {
    name: 'ZekRightPanel',
    components: { ZekForm },
    props: {
        show: Boolean,
        formProps: Object
    },
    data() {
        return {
            showForm: false
        }
    },
    watch: {
        show: function(newVal) {
            if(newVal) {
                this.showForm = true;
            } else {
                setTimeout(() => {
                    this.showForm = false;
                }, 700);
            }
        }
    }
}
</script>

<style lang="scss">
.right-panel-container {
    .right-panel {
        position: fixed;
        z-index: 6;
        width: 400px;
        height: 100%;
        top: 0;
        bottom: 0;
        right: -400px;
        background-color: white;
        -webkit-transition: right 0.3s;
        transition: right 0.7s;
        &.active {
            right: 0;
        }
    }
    .right-panel-background {
        position: fixed;
        z-index: 5;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #00000050;
    }
}
</style>