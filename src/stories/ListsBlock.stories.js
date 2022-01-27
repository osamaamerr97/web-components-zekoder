import ZekList  from '../components/lists-block/ListsBlock.vue';

export default {
    title: 'Zekoder/Lists Block',
    component: ZekList,
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
        styleObj: {
            control: {
                type: 'object',
            }
        }
    },
};

const Template = (args) => ({
    components: { ZekList },
    setup() {
        return { args };
    },
    template: '<zek-list v-bind="args"></zek-list>',
});

export const Primary = Template.bind({});
Primary.args = {
    listItems: [
        "item 0",
        {
            label: "item 1",
            listType: "ordered",
            children: [
                {
                    label: "item",
                    listType: "unordered",
                    children: ["sub-item"]
                }
            ]
        },
        "item 2",
        "item 3"
    ],
    type: 'unordered',
    styleObj: {
        "color": "#000000",
        "fontSize": "24px",
        "textTransform": "capitalize",
        "textDecoration": "underline"
    }

 };