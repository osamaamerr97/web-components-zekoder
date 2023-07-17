<template>
  <yimo-vue-editor :class="`zek-rich-editor` + customClass" v-model="value" :config="config" @input="textChange"></yimo-vue-editor>
</template>

<script>
import YimoVueEditor, {E} from "yimo-vue-editor";
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
    initialValue: {
      type: String,
      required: false
    },
    placeholder: {
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
    }
  },
  data() {
    return {
      value: this.initialValue ?? "",
      config: {
        printLog: false, // disabled console.log
        lang: E.langs.en,// lang config
        menus: this.toolbar,
        ...this.options, // node_modules/yimo-vue-editor/src/assets/js/wangEditor.js 
      }
    };
  },
  created() {
    E.placeholder = this.placeholder ?? "";
    if (this.disabled) {
      this.config.menus = [];
      // remove pointer events from zek-rich-editor class
      this.customClass = this.customClass + " disabled";
    }
  },
  methods: {
    textChange(e) {
      // if disabled don't change value
      this.$emit("onChange", e);
    },
  }
};
</script>

<style scoped lang="scss">
.disabled {
  pointer-events: none;
}
</style>
