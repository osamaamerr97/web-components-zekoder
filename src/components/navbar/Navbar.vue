<template>
    <nav id="zek-navbar" :class="customClass" :style="styleObj">
        <ul class="zek-navbar-menu" v-if="tabs && tabs.length">
            <li class="zek-navbar-menu-item" v-for="(tab, index) in tabs" :key="index">
                <ZekButton
                    :label="tab.label"
                    :url="tab.url"
                    theme= "bootstrap"
                    :customClass="'nav-tab' + tab.class"
                    :styleObj="{...tabStyle, ...tab.style}"
                    :disabled="tab.disabled"
                    :icon="tab.icon"
                    :active="tab.active"
                    @onClick="handleTabClick(index)"
                ></ZekButton>

                <ZekNavbar
                    v-if="tab.tabs && tab.showNested"
                    v-bind="tab"
                    v-on="$listeners"
                    class="position-absolute mt-3"
                />
            </li>
        </ul>
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
    },
    data() {
        return {};
    },
    methods: {
        handleTabClick(index) {
            this.tabs.forEach((tab, i) => {
                this.$set(tab, "showNested", i === index );
                this.$set(tab, "active", i === index );
            });
            this.$emit("tab-clicked", this.tabs[index]);
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
