<template>
    <div class="zek-sidebar" :style="styleObject">
        <li v-if="allowExpandCollapse" class="link-container">
            <a
                :title="isCollapsed ? 'Collapse' : 'Expand'"
                class="link"
                @click="onCollapse"
            >
                <i
                    class="icon fa fa-bars"/>
            </a>
        </li>
        <div class="zek-sidebar-links">
            <template v-for="(sec) in sections">
                <li
                    v-for="(link, i) in sec.links"
                    :key="i"
                    class="link-container"
                    @mouseover="link.isHovering = true"
                    @mouseout="link.isHovering = false"
                    :class="
                        (link.isActive && activeClass) || link.isHovering
                            ? [activeClass]
                            : ''
                    "
                >
                    <RouterLink
                        :to="link.url"
                        :title="link.tooltip"
                        class="link"
                        :style="
                            link.isActive && activeColor
                                ? { color: activeColor }
                                : ''
                        "
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
                        <span v-show="link.label && !isCollapsed">
                            {{ link.label }}
                        </span>
                    </RouterLink>
                </li>
            </template>
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
            type: Boolean,
        },
        collapsed: {
            type: Boolean,
        },
        collapsedWidth: {
            type: String,
        },
        sections: {
            type: Array, // [{links, type, label, icon, collapsable}]
            default: () => []
        },
        activeClass: {
            type: String,
        },
        activeColor: {
            type: String,
        },
        alignItems: {
            type: String,
        },
        styleObj: {
            type: Object,
        },
    },
    data() {
        return {
            isCollapsed: this.collapsed,
            justifyContent: this.alignItems === "center" ? "center" : "flex-start",
            styleObject: {}
        }
    },
    created() {
        this.styleObject = {
            ...this.styleObj,
            width: this.collapsed
                ? this.collapsedWidth
                : this.width || this.styleObj.width || "",
        };
        if((!this.sections.length) && this.links && this.links.length) {
            this.sections.push(
                {
                    links: this.links
                }
            )

        }
    },
    methods: {
        onCollapse(event) {
            this.isCollapsed = !this.isCollapsed;
            this.styleObject.width = this.isCollapsed ? this.collapsedWidth : this.width || this.styleObj.width || "";
            this.$emit("onExpandCollapse", this.isCollapsed);
        },
    },
};
</script>

<style scoped lang="scss">
.zek-sidebar {
    height: 100%;
    overflow-y: auto;
    background-color: v-bind(backgroundColor);
    display: flex;
    flex-direction: column;
    justify-content: v-bind(justifyContent);
}
.zek-sidebar-links {
    max-width: v-bind(width);
    width: 100%;
    min-width: v-bind(collapsedWidth);
    text-align: center;
}
.link-container {
    cursor: pointer;
    list-style: none;
    margin-bottom: 15px;
    padding: 7px 0;
    border-radius: 15px;
    text-align: left;
    width: 100%;
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
.link span {
    margin-left: 0.5rem;
}
.icon {
    width: v-bind(collapsedWidth);
    text-align: center;
}
</style>
