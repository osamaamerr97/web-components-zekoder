import ZekCalendar from '../components/calendar/Calendar.vue';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Zekoder/Calendar',
    component: ZekCalendar,
    argTypes: {
        theme: {
            control: 'select',
            options: ['material', 'bootstrap']
        },
        type: {
            control: 'select',
            options: ['date', 'month', 'year']
        }
    }
};

const Template = (args, { argTypes }) => ({
    components: { ZekCalendar },
    props: Object.keys(argTypes),
    methods: { action },
    template: '<ZekCalendar v-bind="$props" @onChange="action(`onChange`)($event)" />',
});

export const Primary = Template.bind({});
Primary.args = {
    theme: 'bootstrap',
    disabledDates: {
        dates: [
            "2023-01-01",
            "2023-01-02",
            "2023-01-03",
            "2023-01-05",
        ]
    },
    multiple: false,
};

export const Secondary = Template.bind({});
Secondary.args = {};
