<template>
    <iframe
        v-if="type == 'pdf'"
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
        :type="type"
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
        type: {
            type: String,
            default: "markdown"
        },
        height: {
            type: Number,
            default: 150
        },
        showToolbar: {
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
        showToolbar(val) {
            this.key++;
        }
    },
    computed: {
        docValue() {
            if (this.type == "pdf") {
                const toolbarParam = this.showToolbar ? this.value + "#toolbar=1" : this.value + "#toolbar=0";
                return toolbarParam;
            } else if (this.type == "office") {
                const toolbarParam = this.showToolbar ? "" : "&wdHideToolbar=true";
                return `${encodeURIComponent(this.value)}${toolbarParam}`;
            } else {
                return this.value;
            }
        }
    },
    mounted() {
        this.updateOfficeViewer();
    },
    updated() {
        // NOTE: This is a hack to force the iframe to reload when the value changes
        if (!this.showToolbar) {
            this.updateOfficeViewer();
        }
    },
    methods: {
        updateOfficeViewer() {
            if (this.type == "office") {
                const iframe = this.$refs.docViewer.$el.querySelector("iframe");
                if (iframe) {
                    iframe.src = iframe.src.replace("view.aspx", "embed.aspx");
                }
            }
        }
    }
};
</script>
