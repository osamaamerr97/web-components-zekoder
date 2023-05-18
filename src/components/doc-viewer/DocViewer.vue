<template>
    <iframe
        v-if="docType == 'pdf'"
        class="zek-doc-viewer"
        :src="docValue"
        frameborder="0"
        v-bind="extraProps"
        v-on="extraEvents"
        :class="customClass"
        :style="styleObj"
        :height="height"
        :key="key"
    ></iframe>
    <VueDocPreview
        v-else
        class="zek-doc-viewer"
        ref="docViewer"
        :value="docValue"
        :type="docType"
        v-bind="extraProps"
        :class="customClass"
        v-on="extraEvents"
        :height="height"
        :style="styleObj"
        :key="key"
    />
</template>

<script>
import VueDocPreview from "vue-doc-preview";
export default {
    name: "ZekDocViewer",
    components: {
        VueDocPreview
    },
    props: {
        styleObj: {
            type: Object,
            default: () => ({})
        },
        id: {
            type: String,
            default: ""
        },
        extraProps: {
            type: Object,
            default: () => ({})
        },
        extraEvents: {
            type: Object,
            default: () => ({})
        },
        customClass: {
            type: String,
            default: ""
        },
        value: {
            type: String,
            default: ""
        },
        docType: {
            type: String,
            default: "markdown"
        },
        height: {
            type: Number,
            default: 150
        },
        toolbar: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            key: 0
        };
    },
    watch: {
        toolbar(val) {
            this.key++;
        }
    },
    computed: {
        docValue() {
            if (this.docType == "pdf") {
                const toolbarParam = this.toolbar ? this.value + "#toolbar=1" : this.value + "#toolbar=0";
                return toolbarParam;
            } else if (this.docType == "office") {
                const toolbarParam = this.toolbar ? "" : "&ui=hide";
                return `${encodeURIComponent(this.value)}${toolbarParam}`;
            } else {
                return this.value
            }
        }
    }
};
</script>
