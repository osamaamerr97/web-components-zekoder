import ListsBlock  from '../components/lists-block/ListsBlock.vue';

export default {
    title: 'Zekoder/Lists Block',
    component: ListsBlock,
};

const Template = (args) => ({
    components: { ListsBlock },
    setup() {
        return { args };
    },
    template: '<ListsBlock v-bind="args"></ListsBlock>',
});

export const Primary = Template.bind({});
Primary.args = {
    listItems: ["item 1", "item 2", "item 3"],
    type: 'unordered',
    styleObj: {
        "color": "#000000",
        "fontSize": "24px",
        "textTransform": "capitalize",
        "textDecoration": "underline"
    }

 };