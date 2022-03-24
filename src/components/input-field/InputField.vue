<template>
  <div :style="styleObject" :class="customClass">
    <i
      v-if="icon && iconSettings.position == 'left'"
      :class="icon"
      @click.prevent="iconClicked"
      :style="{
        ...iconSettings.style,
        cursor: iconSettings.clickable ? 'pointer' : 'default',
      }"
    />
    <span v-if="label" :style="label.style">{{ label.text || label }}</span>
    <input
      class="required"
      :type="inputType"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      :value="value"
      v-model="value"
      :readonly="readonly"
      :required="required"
      :disabled="disabled"
      :minlength="inputType != 'number' ? minMaxValue.min : null"
      :maxlength="inputType != 'number' ? minMaxValue.max : null"
      :min="inputType == 'number' ? minMaxValue.min : null"
      :max="inputType == 'number' ? minMaxValue.max : null"
      :pattern="pattern ? pattern : null"
      @input="onInput"
      :style="inputStyle"
    />
    <i
      v-if="showPasswordButton"
      :class="inputType == 'password' ? 'fa fa-eye-slash' : 'fa fa-eye'"
      @click.prevent="
        inputType == 'password' ? (inputType = 'text') : (inputType = 'password')
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
    label: {
      type: [Object, String],
      default: () => ({
        text: "",
        style: {},
      }),
    },
    customClass: {
      type: String,
      default: "",
    },
    inputStyle: {
      type: Object
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
  data() {
    return {
      inputType: this.type,
      value: this.initialValue,
    }
  },
  methods: {
    onInput(event) {
      this.$emit("onInput", event);
    },
    iconClicked(event) {
      this.iconSettings.clickable ? this.$emit("iconClicked", event) : "";
    },
  },
  watch: {
    value(newValue) {
      this.$emit("input", { id: this.id, value: newValue })
    }
  }
}
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>