import ZekContainer from '../components/container/Container.vue';

export default {
    title: 'Zekoder/Container',
    component: ZekContainer,
    argTypes: {
        direction: {
            control: { type: 'select' },
            options: ['row', 'column'],
        },
        backgroundColor: {
            control: { type: 'color' },
        },
        padding: {
            control: { type: 'text' },
        },
        width: {
            control: { type: 'select' },
            options: Array.from({ length: 12 }, (_, i) => i + 1),
        },
        height: {
            control: { type: 'text' },
        },
        size: {
            control: { type: 'select' },
            options: ['absolute', 'flexible'],
        },
        styleObj: {
            control: { type: 'object' },
        },

    }
};

const Template = (args, { argTypes }) => ({
    components: { ZekContainer },
    props: Object.keys(argTypes),
    template: '<zek-container v-bind="$props"> <span>one</span> <span>two</span> </zek-container>',
});

export const Primary = Template.bind({});
Primary.args = {
    direction: 'row',
    backgroundColor: 'red',
    padding: '10px',
    width: 1,
    height: '100px',
    size: 'absolute',
    styleObj: {
        border: '1px solid #000',
    },
};