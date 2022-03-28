<template>
  <div style="position: relative" :style="styleObject">
    <span v-if="label" :style="label.style">{{ label.text || label }}<span class="required-asterik" v-if="required">*</span></span>
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
      this.$emit("onChange", this.value);
    },
  },
  watch: {
    value(newValue) {
      this.$emit("input", { id: this.id, value: newValue })
    }
  }
};
</script>

<style scoped>
.required-asterik {
    color: red;
}
textarea{
  resize: none;
}
</style>