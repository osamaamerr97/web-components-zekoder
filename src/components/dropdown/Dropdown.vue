<template>
  <!-- Bootstrap -->
  <div v-if="theme == 'Bootstrap'" class="dropdown" :style="styleObj">
    <button
      class="btn btn-secondary"
      :class="showIcon ? 'dropdown-toggle' : 'dropdown-toggle no-caret'"
      @click="onToggle($event)"
      :style="buttonStyle"
      @blur="onToggle($event)"
    >
      {{ label }}
      <i v-if="customIcon" :class="customIcon"></i>
    </button>
    <ul v-if="toggle" class="dropdown-menu show" style="padding: 0" :style="listStyle" >
      <li
        class="dropdown-item"
        v-for="(item, i) in items"
        :key="i"
        :class="
          selected.includes(item.value || item) && selectType != 'Multi' ? 'active' : ''
        "
        :style="selected.includes(item.value || item) ? selectedItemStyle : itemStyle"
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
          {{ item.text || item }}
        </label>
         <i v-if="item.icon" :class="item.icon"></i>
      </li>
    </ul>
  </div>
  <!-- Material -->
  <div v-else-if="theme == 'Material'">
    <v-menu
      offset-y
      :style="styleObj"
      :close-on-content-click="selectType.toLowerCase() == 'single'"
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
          :style="selected.includes(item) && selectType == 'Multi' ? selectedItemStyle : itemStyle"
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
    customIcon: String,
    label: {
      type: String,
      required: true,
    },
    items: { // [{text,value},{text,value}] or [text,text]
      type: Array,
      required: true,
    },
    value: [String, Array],
    selectType: {
      type: String,
      default: 'single'
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
      selected: [], //selected 
    };
  },
  created() {
    if(this.value) {
        this.selected  = typeof this.value == 'object'? this.value : [this.value];
    }

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
      if (this.selectType.toLowerCase() == "single") {
        this.selected = [item.value || item];
      } else {
        if (this.selected.includes(item)) {
          this.selected.splice(this.selected.indexOf(item), 1);
        } else {
          this.selected.push(item);
        }
      }
      this.$emit("onSelect", this.selected);
    },
    onToggle(event) {
      setTimeout(()=> {
          this.toggle = !this.toggle;
      },300)
      this.$emit("onToggle", event);
    },
  },
};
</script>

<style scoped lang="scss">
.no-caret:after{
    content: none;
}
</style>