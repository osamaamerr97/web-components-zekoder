import Sidebar from '../components/sidebar/Sidebar.vue';

export default {
    title: 'Zekoder/Sidebar',
    component: Sidebar,
};

const Template = (args, { argTypes }) => ({
    components: { 'zek-sidebar': Sidebar },
    props: Object.keys(argTypes),
    template: '<zek-sidebar v-bind="$props"></zek-sidebar>/>',
});

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};