import ListsBlock  from '../components/lists-block/ListsBlock.vue';

export default {
    title: 'Zekoder/Lists Block',
    component: ListsBlock,
    argTypes: {
        listItems: {
            control: {
                type: 'object',
            }
        },
        type: {
            control: { type: 'select' },
            options: ['ordered', 'unordered'],
        },
        childrenType: {
            control: { type: 'select' },
            options: ['ordered', 'unordered'],
        },
        styleObj: {
            control: {
                type: 'object',
            }
        }
    },
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
    listItems: [
        "item 0",
        {
            label: "item 1", children: [
                { label: "item", children: ["sub-item"] }
            ]
        },
        "item 2",
        "item 3"
    ],
    type: 'unordered',
    childrenType: 'unordered',
    styleObj: {
        "color": "#000000",
        "fontSize": "24px",
        "textTransform": "capitalize",
        "textDecoration": "underline"
    }

 };