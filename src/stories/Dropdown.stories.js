import Dropdown  from '../components/dropdown/Dropdown.vue';

export default {
    title: 'Zekoder/Dropdown',
    component: Dropdown,
    argTypes: {
    },
};

const Template = (args, { argTypes }) => ({
    components: { Dropdown },
    props: Object.keys(argTypes),
    template: '<zek-dropdown v-bind="$props"></zek-dropdown>',
});

export const Primary = Template.bind({});
Primary.args = {  };

export const Secondary = Template.bind({});
Secondary.args = {  };