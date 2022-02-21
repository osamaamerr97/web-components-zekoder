<template>
  <div :style="styleObject">
  </div>
</template>

<script>
export default {
  name: "ZekSidebar",
  props: {
    backgroundColor: {
      type: String,
    },
    width: {
      type: String,
    },
    collapsedWidth: {
      type: String,
    },
    links: {
      type: Array,
    },
    activeColor: {
      type: String,
    },
    styleObj: {
      type: Object,
    },
  },
  data() {
    return {
      collapsed: false,
    };
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
      };
    },
  },
  methods: {
    toggleCollapsed(event) {
      this.collapsed = !this.collapsed;
      this.$emit("onCollapse", event);
    },
  },
};
</script>

<style>
</style>