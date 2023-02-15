import ZekScrollPicker from '../components/scroll-picker/ScrollPicker.vue';
import { action } from "@storybook/addon-actions"
export default {
    title: 'Zekoder/Scroll Picker',
    component: ZekScrollPicker,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['date', 'time', 'datetime']
            }
        },
        monthFormat: {
            control: {
                type: 'select',
                options: ['long', 'short', 'number']
            }
        },
    }
};

const Template = (args, { argTypes }) => ({
    components: { ZekScrollPicker },
    props: Object.keys(argTypes),
    methods: { action },
    template: '<ZekScrollPicker v-bind="$props" @onChange="action(`onChange`)($event)" />',
});

export const Primary = Template.bind({});
Primary.args = {
    type: 'datetime',
    // initialValue: '1997-01-01 00:00',
    monthFormat: 'long',
    minDate: '1990-01-01',
    maxDate: '2020-12-31',
    width: '300px',
    height: '300px',
    margin: '0 0 0 10px',
    fontSize: '20px',
};

export const Secondary = Template.bind({});
Secondary.args = {};
