import ZekNavbar from "../components/navbar/Navbar.vue";
import { action } from "@storybook/addon-actions";

export default {
    title: "Zekoder/navbar",
    component: ZekNavbar,
    argTypes: {}
};
const Template = (args, { argTypes }) => ({
    components: { ZekNavbar },
    props: Object.keys(argTypes),
    methods: { action },
    template: '<zek-navbar @onTabClick="action(`onTabClicked`)($event)" v-bind="$props"/>'
});

export const Primary = Template.bind({});
Primary.args = {
    styleObj: {
        backgroundColor: "white"
    },

    tabStyle: {
        fontSize: "1em",
        fontWeight: "bold",
        backgroundColor: "white",
        textDecoration: "none",
        color: "black"
    },

    tabs: [
        {
            label: "Home",
            url: "/home",
            icon: "fas fa-envelope",
            styleObj: { marginRight: "10px" },
            disabled: true,
            tabs: [
                { label: "blabla", url: "#", icon: "fa fa-building", styleObj: { marginRight: "5px" } },
                { label: "lol", url: "#", icon: "fa fa-users", styleObj: { marginRight: "5px" } }
            ]
        },
        {
            label: "About",
            tabs: [
                { label: "Company", url: "#", icon: "fa fa-building", styleObj: { marginRight: "5px" } },
                { label: "Team", url: "#", icon: "fa fa-users", styleObj: { marginRight: "5px" } }
            ],
            icon: "fa fa-info-circle",
            url: "/about",
            styleObj: { marginRight: "5px" }
        },
        {
            label: "New",
            url: "#",
            icon: "fas fa-envelope",
            styleObj: { marginRight: "5px" },
            tabs: [
                { label: "balbal2", url: "#", icon: "fa fa-building", styleObj: { marginRight: "5px" } },
                { label: "lol2", url: "#", icon: "fa fa-users", styleObj: { marginRight: "5px" } }
            ]
        },
        {
            label: "Home",
            url: "#",
            icon: "fas fa-envelope",
            styleObj: { marginRight: "5px" },
            tabs: []
        }
    ]
};
