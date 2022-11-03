<template>
    <div id="toggle-button-container" :class="customClass" :style="styleObj">
        <button type="button" class="btn zek-toggle-btn" data-bs-toggle="button"
            v-for="(btn,i) in toggleButtons"
            :key="i"
            :class="(btn.class||'') + (btn.active? ' active':'') + (btn.disabled? ' disabled':'')"
            :style="btn.style"
            :disabled="disabled || btn.disabled"
            :id="btn.id"
            :name="btn.name"
            :aria-pressed="btn.active"
            @click="toggleState(btn)"
        >
            <span v-if="btn.label && btn.textPosition && btn.textPosition.toLowerCase()=='left'"> {{btn.label}} </span>
            <img v-if="btn.image&&btn.image.src" v-bind="btn.image">
            <i v-else-if="btn.icon" :class="btn.icon.class || btn.icon" :style="btn.icon.style"></i>
            <span v-if="btn.label && !(btn.textPosition && btn.textPosition.toLowerCase()=='left')"> {{btn.label}} </span>
        </button>
    </div>
</template>

<script>
export default {
    name: "ZekToggleButton",
    props: {
        buttons: Array, // [{class, styleObj, label, icon, active, disabled, name, id, image, textPosition },...]
        theme: String,
        customClass: String,
        styleObj: Object,
        disabled: Boolean
    },
    computed: {
        toggleButtons: {
            get() {
                return [...[], ...this.buttons];
            },
            set() {}
        }
    },
    methods: {
        toggleState(button) {
            button['active'] = !button.active;
            this.buttonToggled(button);
        },
        buttonToggled(button) {
            let selected = [];
            this.toggleButtons.forEach(btn => {
                if(btn.active) {
                    selected.push(btn.name);
                }
            });

            let data = {
                buttonName: button.name,
                active: button.active || false,
                buttons: this.toggleButtons,
                selected
            }
            this.$emit('onToggle', data );
        }
    }
}
</script>

<style lang="scss" scoped>
</style>