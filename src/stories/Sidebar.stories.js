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
        sections: {
            control: {
                type: 'object',
            }
        },
        activeColor: {
            control: {
                type: 'color',
            },
        },
        alignItems: {
            control: {
                type: 'select',
                options: ['start', 'center']
            }
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
    backgroundColor: '#e4e4e4',
    width: '3000px',
    collapsedWidth: '60px',
    allowExpandCollapse: true,
    // ! Old way of passing sections
    // links: [
    //     {
    //         label: 'Home',
    //         link: '#',
    //         tooltip: 'Home',
    //         icon: 'home',
    //         isActive: true,
    //     },
    //     {
    //         label: 'About',
    //         link: '#',
    //         tooltip: 'About',
    //         icon: 'info',
    //         isActive: false,
    //     },
    //     {
    //         label: 'Contact',
    //         link: '#',
    //         tooltip: 'Contact',
    //         icon: 'phone',
    //         isActive: false,
    //     },
    // ],
    // ! New way of passing sections
    sections: [
        {
            style: {
                marginLeft: '30px',
                borderLeft: '2px solid #fff',
            },
            title: {
                label: 'Dashboard',
                icon: 'fa fa-home',
                url: '#',
                tooltip: 'Home',
                icon: 'fa fa-home',
                isActive: true,
                isHovering: false,
                showArrow: true,
            },
            links: [
                {
                    label: 'Home',
                    url: '#',
                    tooltip: 'Home',
                    icon: 'fa fa-home',
                    isActive: false,
                    isHovering: false,
                },
                {
                    label: 'About',
                    url: '#',
                    tooltip: 'About',
                    icon: 'fa fa-info',
                    isActive: false,
                    isHovering: false,
                },
                {
                    label: 'Contact',
                    url: '#',
                    tooltip: 'Contact',
                    icon: 'fa fa-phone',
                    isActive: false,
                    isHovering: false,
                },
            ]
        },
        {
            title: {
                label: 'Utils',
                url: '#',
                tooltip: 'Settings',
                icon: 'fa fa-cog',
                isActive: false,
                isHovering: false,
                showArrow: true,
            },
            links: [
                {
                    label: 'Settings',
                    url: '#',
                    tooltip: 'Settings',
                    icon: 'fa fa-cog',
                    isActive: false,
                    isHovering: false,
                },
                {
                    label: 'Logout',
                    url: '#',
                    tooltip: 'Logout',
                    icon: 'fa fa-arrow-left',
                    isActive: false,
                    isHovering: false,
                },
            ],
        }
    ],
    activeColor: '#000',
    styleObj: {
        "color": "red",
        "fontSize": "24px",
        "textTransform": "capitalize",
        "height": "3000px"
    }

};

export const Secondary = Template.bind({});
Secondary.args = {};
