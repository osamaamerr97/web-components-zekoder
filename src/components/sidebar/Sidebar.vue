<template>
    <div class="zek-sidebar" :style="styleObject">
        <div class="zek-sidebar-links">
            <li
                v-if="allowExpandCollapse"
                class="link-container sidebar-title"
                @click="onCollapse"
            >
                <a
                    :title="isCollapsed ? 'Collapse' : 'Expand'"
                    class="link"
                >
                    <span v-show="title && !isCollapsed" class="sidebar-title" :style="title.style">
                        {{ title.label ? title.label : title }}
                    </span>
                    <i
                        v-if="
                            expandIcon.icon && expandIcon.iconType !== 'custom'
                        "
                        class="icon"
                        :class="expandIcon.icon"
                        :style="expandIcon.iconStyle"
                    ></i>
                    <img
                        v-else-if="
                            expandIcon.icon && expandIcon.iconType === 'custom'
                        "
                        class="icon"
                        :src="expandIcon.icon"
                        :style="expandIcon.iconStyle"
                    />
                </a>
            </li>
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
                    v-show="sec.title ? sec.title.isActive : true"
                    :class="!isCollapsed && sec.title ? 'nested' : ''"
                    :style="isCollapsed ? '' : sec.style"
                >
                    <li
                        v-for="(link, i) in sec.links"
                        :key="i"
                        class="link-container"
                        @mouseover="link.isHovering = true"
                        @mouseout="link.isHovering = false"
                        @click="linkClicked(link)"
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
        <div v-if="footer" class="sidebar-footer" :style="footer.style">
            <div v-if="!isCollapsed" class="footer-links-container">
                <RouterLink
                    v-for="(link, i) in footer.links"
                    :key="i"
                    :to="link.url"
                    :title="link.tooltip"
                    class="link"
                    :style="
                        (link.isActive || link.isHovering) && activeColor
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
                </RouterLink>
            </div>
            <div
                v-if="footer.darkmode"
                class="footer-darkmode"
                :style="{
                    backgroundColor: footer.darkmode.enabled
                        ? footer.darkmode.backgroundColor
                        : 'transparent'
                }"
            >
                <div class="darkmode-toggle">
                    <input
                        type="checkbox"
                        id="darkmode-toggle"
                        v-model="footer.darkmode.enabled"
                        :checked="footer.darkmode.enabled"
                        @change="
                            $emit('darkModeToggle', footer.darkmode.enabled)
                        "
                    />
                    <i
                        v-show="footer.darkmode.enabled"
                        class="dark"
                        :class="footer.darkmode.icon"
                        :style="{ color: footer.darkmode.iconColor }"
                    />
                    <i
                        v-show="!footer.darkmode.enabled"
                        class="light"
                        :class="footer.darkmode.icon"
                        :style="{ color: 'grey' }"
                    />
                    <div
                        class="toggle-inner-circle"
                        :style="
                            footer.darkmode.enabled
                                ? {
                                      backgroundColor:
                                          footer.darkmode.circleColor,
                                      left: 'calc(100% - 20px)'
                                  }
                                : {
                                      backgroundColor:
                                          footer.darkmode.circleColor
                                  }
                        "
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ZekSidebar",
    props: {
        title: { type: [String, Object] },
        expandIcon: {
            type: Object,
            default: () => {
                return {
                    icon: "fa fa-bars",
                    iconType: "font-awesome"
                };
            }
        },
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
        },
        footer: {
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
        // Check if any link is active
        this.checkActiveLink();
    },
    methods: {
        onCollapse(event) {
            this.isCollapsed = !this.isCollapsed;
            this.styleObject.width = this.isCollapsed
                ? this.collapsedWidth
                : this.width || this.styleObj.width || "";
            this.$emit("onExpandCollapse", this.isCollapsed);
        },
        linkClicked(link) {
            this.sections.forEach(section => {
                section.links.forEach(l => {
                    l.isActive = false;
                });
            });
            link.isActive = true;
            this.$emit("linkClicked", link);
        },
        checkActiveLink(path) {
            this.sections.forEach(sec => {
                sec.links.forEach(link => {
                    if (window.location.pathname === link.url) {
                        link.isActive = true;
                    }
                });
            });
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
    justify-content: space-between;
}
.zek-sidebar-links {
    max-width: v-bind(width);
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-width: v-bind(collapsedWidth);
    text-align: center;
    justify-content: v-bind(justifyContent);
}
.link-container {
    cursor: pointer;
    list-style: none;
    margin-bottom: 15px;
    padding: 7px 0;
    border-radius: 15px;
    text-align: left;
    width: 100%;
    &.sidebar-title {
        min-height: 50px;
        .icon {
            object-fit: contain;
            height: 100%;
            float:right;
            vertical-align: bottom;
            :hover {
                color: v-bind(activeColor);
            }
        }
        .sidebar-title {
            margin-left: 8px;
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
.sidebar-footer {
    display: flex;
    align-items: center;
    padding: 10px 0;
    justify-content: space-between;
    border-top: 1px solid #efefef;
    .footer-darkmode {
        background: #43a8d2;
        box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        height: 20px;
        width: 100%;
        max-width: v-bind(collapsedWidth);
        margin: 0 5px;
        .darkmode-toggle {
            position: relative;
            border-radius: 20px;
            width: 100%;
            height: 100%;
            i {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                color: #fff;
                font-size: 0.75rem;
                color: #ffee00;
                animation: op 0.4s ease-in-out;
                &.dark {
                    left: 5px;
                }
                &.light {
                    right: 5px;
                }
                @keyframes op {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
            }
            input {
                width: 100%;
                height: 100%;
                opacity: 0;
                position: absolute;
                z-index: 1;
                cursor: pointer;
            }
            .toggle-inner-circle {
                position: absolute;
                height: 15px;
                width: 15px;
                bottom: 3px;
                left: 3px;
                background-color: #fff;
                transition: 0.4s;
                border-radius: 50%;
            }
        }
    }
}
</style>
