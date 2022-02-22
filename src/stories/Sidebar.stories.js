import Sidebar from '../components/sidebar/Sidebar.vue';
import { action } from "@storybook/addon-actions"


export default {
    title: 'Zekoder/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: {
            control: {
                type: 'color',
            },
        },
        width: {
            control: {
                type: 'text',
            },
        },
        collapsedWidth: {
            control: {
                type: 'text',
            },
        },
        links: {
            control: {
                type: 'object',
            }
        },
        activeColor: {
            control: {
                type: 'color',
            },
        },
        styleObj: {
            control: {
                type: 'object',
            }
        },
    }
};

const Template = (args, { argTypes }) => ({
    components: { 'zek-sidebar': Sidebar },
    props: Object.keys(argTypes),
    methods: { action },
    template: '<zek-sidebar @onCollapse="action(`Toggled`)()" v-bind="$props"></zek-sidebar>',
});

export const Primary = Template.bind({});
Primary.args = {
    backgroundColor: '#fff',
    width: '300px',
    collapsedWidth: '60px',
    links: [
        {
            label: 'Home',
            link: '#',
            tooltip: 'Home',
            icon: 'home',
            isActive: true,
        },
        {
            label: 'About',
            link: '#',
            tooltip: 'About',
            icon: 'info',
            isActive: false,
        },
        {
            label: 'Contact',
            link: '#',
            tooltip: 'Contact',
            icon: 'phone',
            isActive: false,
        },
    ],
    activeColor: '#000',
    styleObj: {
        "color": "red",
        "fontSize": "24px",
        "textTransform": "capitalize",
    }

};

export const Secondary = Template.bind({});
Secondary.args = {};