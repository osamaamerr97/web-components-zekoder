import ZekColumnContent from '../components/column-content/ColumnContent.vue';

export default {
    title: 'Zekoder/Column Content',
    component: ZekColumnContent,
};

const Template = (args, { argTypes }) => ({
    components: { ZekColumnContent },
    props: Object.keys(argTypes),
    template: '<ZekColumnContent v-bind="$props"/>',
});

export const Column = Template.bind({});
Column.args = {
    column: {
        columnWidth: 12,
        content: {
            component: 'button',
            data: {
                siteKey: '6Lc6BjYUAAAAAKe1GcC5KiSfzod7iB6ZkZfYXuyp',
            },
        }
    }
};

