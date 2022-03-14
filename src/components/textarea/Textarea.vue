<template>
  <div style="position: relative">
    <textarea
      :name="name"
      :id="id"
      :placeholder="placeholder"
      :readonly="readonly"
      :required="required"
      :disabled="disabled"
      :minlength="minMaxValue.min"
      :maxlength="minMaxValue.max"
      @input="onInput"
      :style="styleObject"
      :form="form"
      v-model="value"
    />
    <span v-if="showLimitIndicator" class="limit" :style="limitIndicatorStyle">
      {{ value.length }}/{{ minMaxValue.max }}
    </span>
  </div>
</template>

<script>
export default {
  name: "ZekTextarea",
  props: {
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showLimitIndicator: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
    minMaxValue: {
      type: Object,
      default: () => ({
        min: "",
        max: "",
      }),
    },
    styleObject: {
      type: Object,
      default: () => ({}),
    },
    name: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    form: {
      type: String,
      default: "",
    },
    limitIndicatorStyle: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onInput(event) {
      this.$emit("onInput", event);
    },
  },
};
</script>

<style scoped>
</style>