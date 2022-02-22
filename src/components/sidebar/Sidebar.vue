<template>
  <div :style="styleObject">
    <li class="link-container">
      <a
        :title="collapsed ? 'Collapse' : 'Expand'"
        class="link"
        @click="onCollapse"
      >
        <i class="icon fa fa-bars" :style="{ width: collapsedWidth }"></i>
      </a>
    </li>
    <li v-for="(link, i) in links" :key="i" class="link-container">
      <a
        :href="link.url"
        :title="link.tooltip"
        class="link"
        :style="link.isActive ? { color: activeColor } : ''"
      >
        <i
          v-if="link.icon"
          class="icon"
          :class="['fa', 'fa-' + link.icon]"
          :style="{ width: collapsedWidth }"
        ></i>
        <span v-if="link.label && !collapsed">{{ link.label }}</span>
      </a>
    </li>
    <i />
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
        width: this.collapsed
          ? this.collapsedWidth
          : this.width || this.styleObj.width || "",
        backgroundColor:
          this.backgroundColor || this.styleObj.backgroundColor || "",
      };
    },
  },
  methods: {
    onCollapse(event) {
      this.collapsed = !this.collapsed;
      this.$emit("onCollapse", event);
    },
  },
};
</script>

<style scoped>
.link-container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  list-style: none;
}
.link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  width: 100%;
  height: 100%;
}
.link span {
  margin-left: 0.5rem;
}
.link:hover {
  color: var(--active-color);
}
.link .icon {
  padding: 0.5rem;
  text-align: center;
}
</style>