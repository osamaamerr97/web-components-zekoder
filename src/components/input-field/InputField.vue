<template>
  <div :style="styleObject">
    <i
      v-if="icon && iconSettings.position == 'left'"
      :class="icon"
      @click.prevent="iconClicked"
      :style="{
        ...iconSettings.style,
        cursor: iconSettings.clickable ? 'pointer' : 'default',
      }"
    />
    <span v-if="label" :style="label.style">{{ label.text || label }}<span class="required-asterik" v-if="required">*</span></span>
    <input
      :class="customClass"
      :type="actualType"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      v-model="value"
      :readonly="readonly"
      :required="required"
      :disabled="disabled"
      :minlength="actualType != 'number' ? minMaxValue.min : null"
      :maxlength="actualType != 'number' ? minMaxValue.max : null"
      :min="actualType == 'number' ? minMaxValue.min : null"
      :max="actualType == 'number' ? minMaxValue.max : null"
      :pattern="pattern ? pattern : null"
      @input="onInput"
      :style="inputStyle"
    />
    <i
      v-if="showPasswordButton && showPasswordButton.type == 'icon'"
      :class="actualType == 'password' ? 'fa fa-eye-slash' : 'fa fa-eye'"
      @click.prevent="
        actualType == 'password' ? (actualType = 'text') : (actualType = 'password')
      "
      :style="{
        ...iconSettings.style,
        cursor: 'pointer',
      }"
    />
    <a
      v-if="showPasswordButton"
      class="show-hide-password"
      href="javascript:"
      @click="actualType == 'password' ? (actualType = 'text') : (actualType = 'password')"
    >{{ actualType == 'password' ? 'show' : 'hide' }}</a>
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
      default: "short-text",
    },
    inputType: {
      type: String,
      default: "text",
    },
    label: {
      type: [Object, String],
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
      value: this.initialValue,
      actualType: this.inputType,
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

.show-hide-password {
    text-transform: uppercase;
    position: absolute;
    right: 15px;
    font-size: 12px;
    line-height: 50px;
}
.required-asterik {
    color: red;
}

</style>