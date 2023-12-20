<template>
    <nav id="zek-navbar" :class="customClass" :style="styleObj">
        <ul class="zek-navbar-menu" v-if="tabs && tabs.length">
            <li class="zek-navbar-menu-item" v-for="(tab, index) in tabs" :key="index" :class="`${tab.active ? activeClass : 'zek-active-tab'}`">
                <ZekButton
                    :label="tab.label"
                    :url="tab.url"
                    theme= "bootstrap"
                    :customClass="'nav-tab ' + tab.class"
                    :styleObj="{...tabStyle, ...tab.style}"
                    :disabled="tab.disabled"
                    :icon="tab.icon"
                    :active="tab.active"
                    @onClick="handleTabClick(index)"
                ></ZekButton>
            </li>
        </ul>
        <ZekNavbar
            v-if="selectedTab && selectedTab.tabs?.length"
            v-bind="selectedTab"
            v-on="$listeners"
        />
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
        activeTab: {
            type: String,
            default: ""
        },
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
        activeClass: {
            type: String,
            default: "active-tab"
        },
        tabStyle: {
            type: Object,
            default: () => ({})
        },
    },
    created() {
        this.tabs.forEach((tab, i) => {
            this.$set(tab, "active", i === 0 && !tab.disabled);
            this.$set(tab, "disabled", tab.disabled || false)
        });
    },
    methods: {
        handleTabClick(index) {
            this.tabs.forEach((tab, i) => {
                tab.active = i === index;
            });
            this.$emit("onTabClick", this.tabs[index]);
        }
    },
    computed: {
        selectedTab() {
            return this.tabs?.find(tab => tab.active);
        }
    },
    watch: {
        activeTab(val) {
            this.tabs.forEach((tab, i) => {
                tab.active = !tab.disabled && (tab.url === val || tab.label?.toLowerCase() === val);
            });
        }
    }
};
</script>

<style scoped>

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline;
    margin-right: 10px;
}
button {
    border: none !important;
}
.active {   /* active class appar on the element but I am not sure why the styles doesn't appear */
    background: rgb(65, 65, 241);
    padding: 5px 10px;
    border-radius: 5px;
}
.btn-primary.active:focus {
    box-shadow: none;
}

</style>
