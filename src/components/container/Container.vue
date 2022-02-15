<template>
  <div :style="styleObject">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ZekContainer",
  props: {
    direction: {
      type: String,
    },
    backgroundColor: {
      type: String,
    },
    padding: {
      type: String,
    },
    width: {
      type: Number,
    },
    height: {
      type: String,
    },
    size: {
      type: String,
      default: "flexible",
    },
    styleObj: {
      type: Object,
    },
  },
  created() {
    this.styleObject = {
      ...this.styleObj,
    };
  },
  computed: {
    styleObject() {
      return {
        ...this.styleObj,
        display: "flex",
        overflow: "auto",
        flexDirection: this.direction || "",
        backgroundColor: this.backgroundColor || "",
        padding: this.padding || "",
        width:
          this.size == "absolute"
            ? `${(this.width / 12) * 100}%`
            : "fit-content" || "",
        height: this.size == "absolute" ? this.height : "fit-content" || "",
      };
    },
  },
};
</script>