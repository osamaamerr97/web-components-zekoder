<template>
    <div :style="styleObject" class="zek-sidebar d-flex align-items-center">
        <li v-if="allowExpandCollapse" class="link-container">
            <a
                :title="collapsed ? 'Collapse' : 'Expand'"
                class="link"
                @click="onCollapse"
            >
                <i class="icon fa fa-bars" :style="{ width: collapsedWidth }"></i>
            </a>
        </li>
        <div class="zek-sidebar-links">
            <li 
                v-for="(link, i) in links" 
                :key="i" 
                class="link-container"
                @mouseover="link.isHovering = true" 
                @mouseout="link.isHovering = false" 
                :class="link.isActive && activeClass || link.isHovering ? [activeClass] : ''"
            >
                <a
                    :href="link.url"
                    :title="link.tooltip"
                    class="link"
                    :style="link.isActive && activeColor ? { color: activeColor } : ''"
                >
                    <i
                        v-if="link.icon && link.iconType !== 'custom'"
                        class="icon"
                        :class="link.icon"
                    ></i>
                    <img
                        v-else-if="link.icon && link.iconType === 'custom'"
                        class="icon"
                        :src="link.icon"
                    />
                    <span v-if="link.label && !collapsed">{{ link.label }}</span>
                </a>
            </li>
        </div>
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
    allowExpandCollapse: {
        type: Boolean
    },
    collapsed: {
        type: Boolean,
    },
    collapsedWidth: {
      type: String,
    },
    links: {
      type: Array,
    },
    activeClass: {
        type: String
    },
    activeColor: {
      type: String,
    },
    styleObj: {
      type: Object,
    },
  },
  created() {
    this.styleObject = {
      ...this.styleObj,
    };
  },
  data() {
      return {
          isHovering: false
      }
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
      this.$emit("onExpandCollapse", this.collapsed);
    },
  },
};
</script>

<style scoped>
.zek-sidebar {
    height: 100%;
    overflow-y: auto;
}
.zek-sidebar-links {
    padding: 0 10px;
    width: 100%;
    text-align: center;
}
.link-container {
    cursor: pointer;
    list-style: none;
    margin-bottom: 15px;
    padding: 7px 0;
    border-radius: 15px;
}
.link {
    cursor: pointer;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    width: 100%;
    height: 100%;
}
.link > img.icon {
    width: 40px;
}
.link span {
    margin-left: 0.5rem;
}
.link .icon {
    padding: 0.5rem;
    text-align: center;
}
</style>