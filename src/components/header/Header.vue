<template>
  <header class="wrapper" :style="styleObj">
    <i v-if="sidebarButton && sidebarButtonProperties.position =='left'" class="fa fa-bars sidebar" />
    <a v-if="logoProperties.position != 'right'" :href="logoProperties.url ? logoProperties.url : 'javascript:void(0)'" class="logo" :style="{cursor: logoProperties.url ? 'pointer' : 'default',...logoProperties.style}">
      <img :src="logo" :style="logoProperties.logoStyle"/>
      <span v-if="text" :style="logoProperties.textStyle">{{ text }}</span>
    </a>
    <div class="menus">
      <zek-dropdown
        v-for="(menu, i) in menus"
        :key="i"
        :label="menu.label"
        :theme="`Custom`"
        :items="menu.links"
        :selectType="`Single`"
        @select="onSelect"
        :showIcon="true"
        v-bind="dropdownProps"
      />
    </div>
    <i v-if="sidebarButton && sidebarButtonProperties.position !='left'" class="fa fa-bars sidebar" />
    <a v-if="logoProperties.position == 'right'" :href="logoProperties.url ? logoProperties.url : 'javascript:void(0)'" class="logo" :style="{cursor: logoProperties.url ? 'pointer' : 'default',...logoProperties.style}">
      <img :src="logo" :style="logoProperties.logoStyle"/>
      <span v-if="text" :style="logoProperties.textStyle">{{ text }}</span>
    </a>
  </header>
</template>

<script>
import ZekDropdown from "../dropdown/Dropdown.vue";
export default {
  name: "ZekHeader",
  components: {
    ZekDropdown,
  },
  props: {
    logo: {
      type: String,
    },
    logoProperties: {
      type: Object,
      default: () => ({
        position: "left",
        url: "",
        style: {
          width: "50px",
          height: "50px",
          textDecoration: "none",
        },
        logoStyle: {
          width: "70%",
        },
        textStyle: {
          fontWeight: "bold",
          color: "black",
        },
      }),
    },
    text: {
      type: String,
    },
    sidebarButton: {
      type: Boolean,
      default: false,
    },
    sidebarButtonProperties: {
      type: Object,
      default: () => ({
        position: "right",
        target: "",
      }),
    },
    menus: {
      type: Array,
    },
    styleObj: {
      type: Object,
    },
    dropdownProps: {
      type: Object,
      default: () => ({
        listStyle: {
          position: "absolute",
          background: "white",
          border: "1px solid #ccc",
          borderRadius: "5px",
          boxShadow: "0px 0px 5px #ccc",
          zIndex: "1",
          padding: "10px",
          margin: "0",
        },
        buttonStyle: {
          color: "black",
        },
        iconStyle: {
          position: "relative",
          marginLeft: "10px",
        },
      }),
    },
  },

  methods: {
    onSelect(selected) {
      console.log(selected);
      window.location.href = selected;
    },
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 0 10px;
}
.menus{
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
}
.sidebar {
  cursor: pointer;
  padding: 0 10px;
}
</style>
