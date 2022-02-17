<template>
<div :style="styleObj">
  <button :style="buttonStyle" @click="onToggle($event)">{{label}}</button>
  <i v-if="showIcon" />
  <div v-if="toggle">
    <div :style="selected.includes(item) ? selectedItemStyle : itemStyle" v-for="(item, i) in items" :key="i" href="#" @click="onSelect($event,item)">
      {{ item }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ZekDropdown",
  props: {
    label: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    selectType: {
      type: String,
    },
    theme: {
      type: String,
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
    styleObj: {
      type: Object,
    },
    buttonStyle:{
      type: Object,
    },
    itemStyle: {
      type: Object,
    },
    selectedItemStyle: {
      type: Object,
    },
  },
  data() {
    return {
      toggle: false,
      selected: [],
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
    onSelect(event,item) {
      if (this.selectType == "Single") {
        this.selected = [item];
      } else {
        if (this.selected.includes(item)) {
          this.selected.splice(this.selected.indexOf(item), 1);
        } else {
          this.selected.push(item);
        }
      }
      this.$emit("onSelect", event);
    },
    onToggle(event) {
      this.toggle = !this.toggle;
      this.$emit("onToggle", event);
    },
  },
};
</script>