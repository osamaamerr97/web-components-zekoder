<template>
  <div style="display: flex; align-items: center">
    <i
      v-if="icon && iconSettings.position == 'left'"
      :class="icon"
      @click.prevent="iconClicked"
      :style="{
        ...iconSettings.style,
        cursor: iconSettings.clickable ? 'pointer' : 'default',
      }"
    />
    <input
      class="required"
      :type="type"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      :value="initialValue"
      :readonly="readonly"
      :required="required"
      :disabled="disabled"
      :minlength="type != 'number' ? minMaxValue.min : null"
      :maxlength="type != 'number' ? minMaxValue.max : null"
      :min="type == 'number' ? minMaxValue.min : null"
      :max="type == 'number' ? minMaxValue.max : null"
      :pattern="pattern"
      @input="onInput"
      :style="styleObject"
    />
    <i
      v-if="icon && showPasswordButton"
      :class="type == 'password' ? 'fa fa-eye-slash' : 'fa fa-eye'"
      @click.prevent="
        type == 'password' ? (type = 'text') : (type = 'password')
      "
      :style="{
        ...iconSettings.style,
        cursor: 'pointer',
      }"
    />
    <i
      v-if="icon && iconSettings.position == 'right'"
      :class="icon"
      @click.prevent="iconClicked"
      :style="{
        ...iconSettings.style,
        cursor: iconSettings.clickable ? 'pointer' : 'default',
      }"
    />
  </div>
</template>

<script>
export default {
  name: "ZekInput",
  props: {
    type: {
      type: String,
      default: "text",
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    iconSettings: {
      type: Object,
      default: () => ({
        position: "left",
        clickable: false,
        style: {
          margin: "0 0.5rem",
        },
      }),
    },
    showPasswordButton: {
      type: Boolean,
      default: false,
    },
    pattern: {
      type: String,
      default: "",
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
  },
  methods: {
    onInput(event) {
      this.$emit("onInput", event);
    },
    iconClicked(event) {
      this.iconSettings.clickable ? this.$emit("iconClicked", event) : "";
    },
  },
};
</script>

<style scoped>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

input[type=number] {
  -moz-appearance: textfield;
}
</style>