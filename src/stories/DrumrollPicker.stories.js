import ZekDrumroll from '../components/drumroll-picker/DrumrollPicker.vue';
import { action } from "@storybook/addon-actions"
export default {
    title: 'Zekoder/Drumroll Picker',
    component: ZekDrumroll,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['date', 'time', 'datetime']
            }
        },
        format: {
            control: { type: 'text' }
        },
    }
    };

    const Template = (args, { argTypes }) => ({
        components: { ZekDrumroll },
        props: Object.keys(argTypes),
        methods: { action },
        template: '<ZekDrumroll v-bind="$props" @onChange="action(`onChange`)($event)" />',
    });

    export const Primary = Template.bind({});
Primary.args = {
        type: 'datetime',
        initialValue: '1997-01-01 00:00'
    };

    export const Secondary = Template.bind({});
    Secondary.args = {};
