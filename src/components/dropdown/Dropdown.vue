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
  <div v-else-if="theme == 'Material'">
    <v-menu offset-y :style="styleObj">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">
          {{ label }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="onSelect($event, item)"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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