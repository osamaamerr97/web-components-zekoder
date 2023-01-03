import ZekScheduler from '../components/scheduler/Scheduler.vue';

export default {
    title: 'Zekoder/Scheduler',
    component: ZekScheduler,
};

const Template = (args, { argTypes }) => ({
    components: { ZekScheduler },
    props: Object.keys(argTypes),
    template: '<ZekScheduler v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
    type: 'month',
    events: [
        {
            name: 'Event 1',
            start: new Date(),
            end: new Date(),
            color: 'red'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Next Date',
            start: new Date().setDate(new Date().getDate() + 1),
            end: new Date().setDate(new Date().getDate() + 2),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
        {
            name: 'Event 2',
            start: new Date(),
            end: new Date(),
            color: 'blue'
        },
    ]
};

export const Secondary = Template.bind({});
Secondary.args = {};
