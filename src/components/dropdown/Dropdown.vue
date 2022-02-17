<template>
  <!-- Bootstrap -->
<div v-if="theme == 'Bootstrap'" class="dropdown">
  <button class="btn btn-secondary" :class="showIcon ? 'dropdown-toggle' : ''" @click="onToggle($event)">{{label}}</button>
  <ul v-if="toggle" class="dropdown-menu show">
    <li class="dropdown-item" v-for="(item, i) in items" :key="i" :class="selected.includes(item) ? 'active' : ''" @click="onSelect($event,item)">
      {{ item }}
    </li>
  </ul>
</div>
  <!-- Material -->
  <div v-else-if="theme == 'Material'" class="mdc-menu-surface--anchor">
    <button class="dropdown-trigger btn" @click="onToggle($event)">{{label}}</button>
    <div class="mdc-menu mdc-menu-surface" :style="toggle ? {display: 'block', opacity: '100'} : {display: 'none', opacity: '100'}">
      <ul class="mdc-list" id="my-list" role="listbox">
        <li v-for="(item, i) in items" :key="i" @click="onSelect($event,item)" class="mdc-list-item" :class="selected.includes(item) ? 'mdc-list-item--activated' : ''" role="option" aria-selected="true">
          <span class="mdc-list-item__text">{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
  <!-- Custom -->
  <div v-else>
  <div :style="styleObj">
    <button :style="buttonStyle" @click="onToggle($event)">{{label}}</button>
    <div v-if="toggle">
      <div :style="selected.includes(item) ? selectedItemStyle : itemStyle" v-for="(item, i) in items" :key="i" href="#" @click="onSelect($event,item)">
        {{ item }}
      </div>
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
      selected: ["2"],
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