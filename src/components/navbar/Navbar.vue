<template>
    <nav id="zek-navbar" :class="customClass" :style="styleObj">
        <ul class="zek-navbar-menu" v-if="tabs && tabs.length">
            <li
                class="zek-navbar-menu-item"
                :style="tabStyle"
                v-for="(tab, index) in tabs"
                :key="index"
                >
                <ZekButton
                    :label="tab.label"
                    :url="tab.url"
                    customClass="nav-tab"
                    :styleObj="tab.tabStyle"
                    :disabled="tab.disabled"
                    :icon="tab.icon"
                > </ZekButton>
            </li>
        </ul>
        <NavBar   v-for="(tab, index) in tabs"
                :key="index" :tabs="tab.tabs" :styleObj="nestedStyleObj" :tabStyle="nestedTabStyle" />
    </nav>
</template>

<script>
import ZekButton from "../action-button/ActionButton.vue";

export default {
    name: "ZekNavbar",
    components: {
        ZekButton
    },
    props: {
        tabs: {
            type: Array,
            required: true
        },
        styleObj: {
            type: Object,
            default: () => ({})
        },
        customClass: {
            type: String,
            default: "zek-navbar-wrapper"
        },
        tabStyle: {
            type: Object,
            default: () => ({})
        },
        nestedTabStyle: {
            type: Object,
            default: () => ({})
        },
        nestedStyleObj: {
            type: Object,
            default: () => ({})
        },
    },
    data() {
        return {
            showNestedTabs: false
        };
    },
    methods: {
        getTabStyle(index) {
            return this.tabStyle;
        },
        handleTabClick(index) {
            this.$set(this.tabs[index], "showNested", !this.tabs[index].showNested);
        }
    }
};
</script>

<style scoped>
/* Add your global and specific styles here */
nav {
    background-color: #f0f0f0;
    padding: 10px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline;
    margin-right: 10px;
}

a {
    text-decoration: none;
    color: black;
    padding: 5px 10px;
    /* Add test style for <a> tags */
    border: 1px solid #ccc;
}

span {
    cursor: pointer;
}

i {
    margin-right: 5px;
}
</style>
