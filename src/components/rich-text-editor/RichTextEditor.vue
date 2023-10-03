<template>
    <div
        ref="zekRichTextEditor"
        :class="`zek-rich-editor-container ${customClass}  ${!disabled || 'disabled'}`"
        :style="styleObj"
    >
        <yimo-vue-editor
            class="zek-rich-editor"
            v-model="value"
            :config="config"
            @input="textChange"
            v-on="extraEvents"
            v-bind="extraProps"
        />
    </div>
</template>

<script>
import YimoVueEditor, { E } from "yimo-vue-editor";
export default {
    name: "ZekRichTextEditor",
    components: {
        YimoVueEditor
    },
    props: {
        customClass: {
            type: String,
            required: false
        },
        styleObj: {
            type: Object,
            required: false
        },
        initialValue: {
            type: String,
            required: false
        },
        disabled: {
            type: Boolean,
            required: false
        },
        toolbar: {
            // Option can be found here: https://github.com/davidroyer/vue2-editor/blob/master/src/helpers/fullToolbar.js
            type: Array,
            required: false
        },
        options: {
            type: Object,
            required: false,
            default: () => ({})
        },
        extraProps: {
            type: Object,
            default: () => ({})
        },
        extraEvents: {
            type: Object,
            default: () => ({})
        },
        id: {
            type: [String, Number],
            default: ""
        }
    },
    data() {
        return {
            value: this.initialValue ?? "",
            config: {
                printLog: false, // disabled console.log
                lang: E.langs.en, // lang config
                menus: this.toolbar,
                ...this.options // node_modules/yimo-vue-editor/src/assets/js/wangEditor.js
            }
        };
    },
    methods: {
        textChange(e) {
            this.$emit("onChange", e);
        }
    }
};
</script>

<style scoped lang="scss">
.disabled {
    pointer-events: none !important;
    * {
        pointer-events: none !important;
    }
}
</style>
