<template>
    <div class="zek-sidebar" :style="styleObject">
        <li v-if="allowExpandCollapse" class="link-container expand-icon">
            <a
                :title="isCollapsed ? 'Collapse' : 'Expand'"
                class="link"
                @click="onCollapse"
            >
                <i class="icon fa fa-bars" />
            </a>
        </li>
        <div class="zek-sidebar-links">
            <div v-for="(sec, i) in sections" :key="i">
                <li
                    v-if="sec.title"
                    class="link-container"
                    @mouseover="sec.title.isHovering = true"
                    @mouseout="sec.title.isHovering = false"
                    @click="sec.title.isActive = !sec.title.isActive"
                    :style="
                        (sec.title.isActive || sec.title.isHovering) &&
                        activeColor
                            ? { color: activeColor }
                            : ''
                    "
                >
                    <RouterLink
                        :to="sec.title.url"
                        :title="sec.title.tooltip"
                        class="link title"
                        :style="
                            (sec.title.isActive || sec.title.isHovering) &&
                            activeColor
                                ? { color: activeColor }
                                : ''
                        "
                    >
                        <i
                            v-if="
                                sec.title.icon &&
                                    sec.title.iconType !== 'custom'
                            "
                            class="icon"
                            :class="sec.title.icon"
                        ></i>
                        <img
                            v-else-if="
                                sec.title.icon &&
                                    sec.title.iconType === 'custom'
                            "
                            class="icon"
                            :src="sec.title.icon"
                        />
                        <span v-show="sec.title.label && !isCollapsed">
                            {{ sec.title.label }}
                        </span>
                        <i
                            class="icon section-expand fa"
                            :class="
                                sec.title.isActive
                                    ? 'fa-chevron-up'
                                    : 'fa-chevron-down'
                            "
                            v-if="sec.title.showArrow && !isCollapsed"
                        />
                    </RouterLink>
                </li>
                <section
                    v-show="sec.title ? sec.title?.isActive : true"
                    :class="isCollapsed ? '' : 'nested'"
                    :style="isCollapsed ? '' : sec.style"
                >
                    <li
                        v-for="(link, i) in sec.links"
                        :key="i"
                        class="link-container"
                        @mouseover="link.isHovering = true"
                        @mouseout="link.isHovering = false"
                        :style="
                            (link.isActive || link.isHovering) && activeColor
                                ? { color: activeColor }
                                : ''
                        "
                    >
                        <RouterLink
                            :to="link.url"
                            :title="link.tooltip"
                            class="link"
                            :style="
                                (link.isActive || link.isHovering) &&
                                activeColor
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
                                v-else-if="
                                    link.icon && link.iconType === 'custom'
                                "
                                class="icon"
                                :src="link.icon"
                            />
                            <span v-show="link.label && !isCollapsed">
                                {{ link.label }}
                            </span>
                        </RouterLink>
                    </li>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ZekSidebar",
    props: {
        backgroundColor: {
            type: String
        },
        width: {
            type: String
        },
        allowExpandCollapse: {
            type: Boolean
        },
        collapsed: {
            type: Boolean
        },
        collapsedWidth: {
            type: String
        },
        links: {
            type: Array
        },
        sections: {
            type: Array, // [{links, type, label, icon, collapsable}]
            default: () => []
        },
        activeClass: {
            type: String
        },
        activeColor: {
            type: String
        },
        alignItems: {
            type: String
        },
        styleObj: {
            type: Object
        }
    },
    data() {
        return {
            isCollapsed: this.collapsed,
            justifyContent:
                this.alignItems === "center" ? "center" : "flex-start",
            styleObject: {}
        };
    },
    created() {
        this.styleObject = {
            ...this.styleObj,
            width: this.collapsed
                ? this.collapsedWidth
                : this.width || this.styleObj.width || ""
        };
        if (!this.sections.length && this.links && this.links.length) {
            this.sections.push({
                links: this.links
            });
        }
    },
    methods: {
        onCollapse(event) {
            this.isCollapsed = !this.isCollapsed;
            this.styleObject.width = this.isCollapsed
                ? this.collapsedWidth
                : this.width || this.styleObj.width || "";
            this.$emit("onExpandCollapse", this.isCollapsed);
        }
    }
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
    &.expand-icon {
        :hover {
            color: v-bind(activeColor);
        }
    }
}
.nested {
    padding-left: 20px;
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
    &.title {
        .icon {
            &.section-expand {
                float: right;
                margin-right: 0.5rem;
                margin-top: 0.75rem;
            }
        }
    }
}
.link span {
    margin-left: 0.5rem;
}
.icon {
    width: v-bind(collapsedWidth);
    text-align: center;
}
</style>
