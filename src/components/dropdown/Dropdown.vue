<template>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</template>

<script>
export default {
  name: "ZekDropdown",
  props: {
    items: {
      type: Array,
      required: true
    },
    type: {
      type: String,
    },
    theme: {
      type: String,
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    toggle: {
      type: String,
      default: 'click'
    },
    selected: {
      type: Array
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
      };
    },
  },
};
</script>