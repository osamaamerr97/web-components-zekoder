<template>
  <vue-editor
    v-model="value"
    :placeholder="placeholder"
    :disabled="disabled"
    :editorToolbar="toolbar"
    @text-change="textChange"
    v-bind="extraProps"
    v-on="extraEvents"
  />
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  name: "ZekRichTextEditor",
  components: {
    VueEditor,
  },
  props: {
    initialValue: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    toolbar: { // Option can be found here: https://github.com/davidroyer/vue2-editor/blob/master/src/helpers/fullToolbar.js
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      value: this.initialValue ?? "",
    };
  },
  methods: {
    textChange(e) {
      this.$emit("onChange", this.value);
    },
  }
};
</script>

<style>
</style>
