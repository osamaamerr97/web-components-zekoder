import Sidebar from '../components/sidebar/Sidebar.vue';
import { action } from "@storybook/addon-actions"


export default {
    title: 'Zekoder/Sidebar',
    component: Sidebar,
    argTypes: {
        expandIcon: { control: 'object' },
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
        footer: {
            control: {
                type: 'object',
            }
        }
    }
};

const Template = (args, { argTypes }) => ({
    components: { 'zek-sidebar': Sidebar },
    props: Object.keys(argTypes),
    methods: { action },
    template: '<zek-sidebar @onCollapse="action(`Toggled`)()" @darkModeToggle="action(`darkmode toggled`)()" v-bind="$props"></zek-sidebar>',
});

export const Primary = Template.bind({});
Primary.args = {
    footer: {
        links: [
            {
                label: 'Settings',
                url: '#',
                tooltip: 'Settings',
                icon: 'fa fa-cog',
                isActive: false,
                isHovering: false,
            },
        ],
        // ! This should changed outside the component as it is reactive
        darkmode: {
            enabled: true,
            backgroundColor: '#000',
            icon: 'fa fa-moon',
            iconColor: 'yellow',
            circleColor: '#fff',
        }
    },
    expandIcon: {
        icon: 'https://www.pngfind.com/pngs/m/9-95287_double-left-chevron-svg-png-icon-free-download.png',
        iconType: 'custom',
        iconStyle: {
            padding: '0 20px',
        }
    },
    backgroundColor: '#e4e4e4',
    width: '300px',
    collapsedWidth: '60px',
    allowExpandCollapse: true,
    // ! Old way of passing sections
    links: [
        {
            label: 'Home',
            link: '#',
            tooltip: 'Home',
            icon: 'fa fa-home',
            isActive: true,
            isHovering: false,
        },
        {
            label: 'About',
            link: '#',
            tooltip: 'About',
            icon: 'fa fa-info',
            isActive: false,
            isHovering: false,
        },
        {
            label: 'Contact',
            link: '#',
            tooltip: 'Contact',
            icon: 'fa fa-phone',
            isActive: false,
            isHovering: false,
        },
    ],
    // ! New way of passing sections
    // sections: [
    //     {
    //         style: {
    //             marginLeft: '30px',
    //             borderLeft: '2px solid #fff',
    //         },
    //         title: {
    //             label: 'Dashboard',
    //             icon: 'fa fa-home',
    //             url: '#',
    //             tooltip: 'Home',
    //             icon: 'fa fa-home',
    //             isActive: true,
    //             isHovering: false,
    //             showArrow: true,
    //         },
    //         links: [
    //             {
    //                 label: 'Home',
    //                 url: '#',
    //                 tooltip: 'Home',
    //                 icon: 'fa fa-home',
    //                 isActive: false,
    //                 isHovering: false,
    //             },
    //             {
    //                 label: 'About',
    //                 url: '#',
    //                 tooltip: 'About',
    //                 icon: 'fa fa-info',
    //                 isActive: false,
    //                 isHovering: false,
    //             },
    //             {
    //                 label: 'Contact',
    //                 url: '#',
    //                 tooltip: 'Contact',
    //                 icon: 'fa fa-phone',
    //                 isActive: false,
    //                 isHovering: false,
    //             },
    //         ]
    //     },
    //     {
    //         title: {
    //             label: 'Utils',
    //             url: '#',
    //             tooltip: 'Settings',
    //             icon: 'fa fa-cog',
    //             isActive: false,
    //             isHovering: false,
    //             showArrow: true,
    //         },
    //         links: [
    //             {
    //                 label: 'Settings',
    //                 url: '#',
    //                 tooltip: 'Settings',
    //                 icon: 'fa fa-cog',
    //                 isActive: false,
    //                 isHovering: false,
    //             },
    //             {
    //                 label: 'Logout',
    //                 url: '#',
    //                 tooltip: 'Logout',
    //                 icon: 'fa fa-arrow-left',
    //                 isActive: false,
    //                 isHovering: false,
    //             },
    //         ],
    //     }
    // ],
    activeColor: '#000',
    styleObj: {
        "color": "red",
        "fontSize": "24px",
        "textTransform": "capitalize",
        "height": "500px"
    }

};

export const Secondary = Template.bind({});
Secondary.args = {};
