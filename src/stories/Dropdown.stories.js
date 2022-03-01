import Dropdown from '../components/dropdown/Dropdown.vue';
import { action } from "@storybook/addon-actions"

export default {
    title: 'Zekoder/Dropdown',
    component: Dropdown,
    argTypes: {
        label: {
            control: { type: 'text' },
        },
        items: {
            control: { type: 'object' },
        },
        selectType: {
            control: { type: 'select' },
            options: ['Single', 'Multi'],
        },
        theme: {
            control: { type: 'select' },
            options: ['Material', 'Bootstrap', 'Custom'],
        },
        showIcon: {
            control: { type: 'boolean' },
        },
        styleObj: {
            control: { type: 'object' },
        },
        listStyle: {
            control: { type: 'object' },
        },
        itemStyle: {
            control: { type: 'object' },
        },
        selectedItemStyle: {
            control: { type: 'object' },
        },
        onToggle: { action: 'onToggle' },
    },
};

const Template = (args, { argTypes }) => ({
    components: { 'zek-dropdown': Dropdown },
    props: Object.keys(argTypes),
    methods: { action },
    template: `<zek-dropdown @onToggle="action('Toggled')()" @onSelect="action('Selected')()" v-bind="$props"></zek-dropdown>`,
});

export const Primary = Template.bind({});
Primary.args = {
    label: 'Dropdown',
    items: ['1', '2', '3'],
    selectType: 'Single',
    theme: 'Custom',
    showIcon: true,
    styleObj: {
        height: 'fit-content',
        width: '100%',
    },
    buttonStyle: {
        backgroundColor: 'lightgrey',
        borderRadius: '5px',
        outline: 'none',
        border: 'none',
        width: '100%',
    },
    itemStyle: {
        backgroundColor: '#ffff',
    },
    selectedItemStyle: {
        backgroundColor: '#f5f5f5',
    },

};

export const Secondary = Template.bind({});
Secondary.args = {};