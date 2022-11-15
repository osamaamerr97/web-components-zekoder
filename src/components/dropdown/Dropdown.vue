<template>
    <div>
        <span v-if="showLabel && label" :style="label.style">
            <span v-html="label.html || label.text || label" ></span>
            <span class="required-asterik" v-if="required">*</span>
        </span>
        <input type="text" class="hidden-field" :required="required" v-model="selectedText">
        <!-- Bootstrap -->
        <div v-if="theme == 'Bootstrap'" :class="'dropdown '+cssClass" :style="styleObj">
        <button
            class="btn btn-secondary"
            :class="(showIcon ? 'dropdown-toggle' : 'dropdown-toggle no-caret')+(disabled? ' disabled':'')"
            @click="onToggle()"
            type="button"
            :style="buttonStyle"
            @blur="toggle=true; onToggle();"
            :disabled="disabled"
        >
            {{ selected.length? selectedText : placeholder||label }}
            <i v-if="customIcon" :class="customIcon"></i>
        </button>
        <ul v-if="toggle" class="dropdown-menu show" style="padding: 0" :style="listStyle" >
            <li
            class="dropdown-item"
            v-for="(item, i) in items"
            :key="i"
            :class="
                selected.includes(item.value || item) && selectType.toLowerCase() != 'multi' ? 'active' : ''
            "
            :style="selected.includes(item.value || item) ? selectedItemStyle : itemStyle"
            @click="onSelect($event, item)"
            >
            <input
                v-if="selectType.toLowerCase() == 'multi'"
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
        <div v-else-if="theme == 'Material'" :class="cssClass">
        <v-menu
            offset-y
            :style="styleObj"
            :close-on-content-click="selectType.toLowerCase() == 'single'"
        >
            <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on">
                {{ selected.length ? selectedText : placeholder||label }}
            </v-btn>
            </template>
            <v-list>
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
                @click="onSelect($event, item)"
            >
                <v-simple-checkbox
                v-if="selectType.toLowerCase() == 'multi'"
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
        <div :class="cssClass" :style="styleObj" v-else>
            <button
                style="display: flex; align-items: center; position: relative"
                :style="buttonStyle"
                @click="onToggle()"
                :disabled="disabled"
                type="button"
                :class="disabled? 'disabled':''"
            >
            <span>
                {{ selected.length? selectedText : placeholder||label }}
                <i v-if="showIcon" class="fa fa-angle-down" :style="iconStyle"></i>
            </span>
            </button>
            <div :style="listStyle" v-if="toggle">
            <div
                :style="selected.includes(item) && selectType.toLowerCase() == 'multi' ? selectedItemStyle : itemStyle"
                v-for="(item, i) in items"
                :key="i"
                href="#"
                @click="onSelect($event, item)"
            >
                <input
                v-if="selectType.toLowerCase() == 'multi'"
                type="checkbox"
                :id="i"
                v-model="selected"
                :value="item.value ? item.value : item"
                />
                {{ item.text || item }}
            </div>
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
        type: [String, Object]
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
      cssClass: {
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
      placeholder: String,
      showLabel: Boolean, //to be removed later
      required: Boolean,
      disabled: Boolean,
      toggleOnSelect: Boolean,
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
      selectedText() {
        return this.selected.map(value => {
            let selected = this.items.find(item => {return item == value || item.value==value});
            return selected.text ? selected.text : selected;
        }).join(", ");
      }
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
        if(this.toggleOnSelect) {
            this.onToggle();
        }
        this.$emit("onSelect", this.selected);
      },
      onToggle() {
        if(this.toggle) {
            setTimeout(() => {
                this.toggle = false;
            },300)
        } else {
            this.toggle = true;
        }
        this.$emit("onToggle", this.toggle);
      },
    },
  };
  </script>

  <style scoped lang="scss">
  .no-caret:after{
      content: none;
  }
  .btn {
      &.dropdown-toggle {
          position: relative;
          padding-right: 30px;
          &::after {
              position: absolute;
              right: 7px;
              top: 50%;
              transform: translateY(-50%);
          }
      }
  }
  .hidden-field{
    opacity: 0;
    position: absolute;
    width: 1px !important;
  }
  </style>
