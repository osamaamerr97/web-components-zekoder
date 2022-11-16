<template>
  <div style="position: relative" :style="styleObject">
    <span v-if="label" :style="label.style">
          <span v-html="label.html || label.text || label" ></span>
          <span class="required-asterik" v-if="required">*</span>
    </span>
    <textarea
      :class="customClass"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      :readonly="readonly"
      :required="required"
      :disabled="disabled"
      :minlength="minMaxValue.min"
      :maxlength="minMaxValue.max"
      @change="onChange"
      :form="form"
      :value="value"
      :style="inputStyle"
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
    inputStyle: {
        type: Object,
        default: () => {}
    },
    label: {
      type: [Object, String],
    },
    customClass: {
      type: String,
      default: "",
    },
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
    initialValue: {
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
    data() {
    return {
      value: this.initialValue,
    }
  },
  methods: {
    onChange(event) {
        // ! this is only for possible previous use cases should be changed
      this.$emit("onChange", event.target.value);
    },
  },
  watch: {
    value(newValue) {
      this.$emit("input", { id: this.id, value: newValue })
    }
  }
};
</script>

<style scoped lang="scss">
.required-asterik {
    color: red;
}
textarea{
  resize: none;
}
</style>
