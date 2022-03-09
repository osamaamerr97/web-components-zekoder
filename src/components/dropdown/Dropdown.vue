<template>
  <!-- Bootstrap -->
  <div v-if="theme == 'Bootstrap'" class="dropdown" :style="styleObj">
    <button
      class="btn btn-secondary"
      :class="showIcon ? 'dropdown-toggle' : ''"
      @click="onToggle($event)"
      :style="buttonStyle"
    >
      {{ label }}
    </button>
    <ul v-if="toggle" class="dropdown-menu show" style="padding: 0" :style="listStyle">
      <li
        class="dropdown-item"
        v-for="(item, i) in items"
        :key="i"
        :class="
          selected.includes(item) && selectType != 'Multi' ? 'active' : ''
        "
        :style="itemStyle"
        @click="onSelect($event, item)"
      >
        <input
          v-if="selectType == 'Multi'"
          class="form-check-input"
          type="checkbox"
          v-model="selected"
          :value="item"
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          {{ item }}
        </label>
      </li>
    </ul>
  </div>
  <!-- Material -->
  <div v-else-if="theme == 'Material'">
    <v-menu
      offset-y
      :style="styleObj"
      :close-on-content-click="selectType == 'Single'"
    >
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
          <v-simple-checkbox
            v-if="selectType == 'Multi'"
            :value="selected.includes(item)"
            @click="onSelect($event, item)"
          />
          {{ item }}
          <v-list-item-title> </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
  <!-- Custom -->
  <div :style="styleObj" v-else>
      <button style="display: flex; align-items: center; position: relative" :style="buttonStyle" @click="onToggle($event)">
        <span>
          {{ label }}
          <i v-if="showIcon" class="fa fa-angle-down" :style="iconStyle"></i>
        </span>
      </button>
      <div :style="listStyle" v-if="toggle">
        <div
          :style="selected.includes(item) ? selectedItemStyle : itemStyle"
          v-for="(item, i) in items"
          :key="i"
          href="#"
          @click="onSelect($event, item)"
        >
          <input
            v-if="selectType == 'Multi'"
            type="checkbox"
            :id="i"
            v-model="selected"
            :value="item"
          />
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
    buttonStyle: {
      type: Object,
    },
    listStyle: {
      type: Object,
    },
    itemStyle: {
      type: Object,
    },
    selectedItemStyle: {
      type: Object,
    },
    iconStyle: {
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
    onSelect(event, item) {
      if (this.selectType == "Single") {
        this.selected = [item];
        this.toggle = false;
      } else {
        if (this.selected.includes(item)) {
          this.selected.splice(this.selected.indexOf(item), 1);
        } else {
          this.selected.push(item);
        }
      }
      console.log(this.selected);
      this.$emit("onSelect", event);
    },
    onToggle(event) {
      this.toggle = !this.toggle;
      this.$emit("onToggle", event);
    },
  },
};
</script>