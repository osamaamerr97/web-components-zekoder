import ZekTreemapChart from "../../components/charts/TreemapChart.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Charts/Treemap Chart',
    component: ZekTreemapChart,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {}
};

const Template = (args, { argTypes }) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ZekTreemapChart: ZekTreemapChart },
    props: Object.keys(argTypes),
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<zek-treemap-chart v-bind="$props"></zek-treemap-chart>',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
    height: "500px",
    width: "90%",
    styleObj: {
        border: "2px solid green"
    },
    id: '0',
    title: {
        text: 'My Fruit Chart',
        style: {
            color: 'rgb(255,0,0)',
            fontSize: '24px'
        }
    },
    data: [
        {
            color: '#ff0000',
            data: 55,
            datakey: "A",
            label: "A",
        },
        {
            color: '#00ff00',
            data: 25,
            datakey: "B",
            label: "B",
        },
        {
            color: '#0000ff',
            data: 15,
            datakey: "C",
            label: "C",
        },
        {
            color: '#ff00ff',
            data: 10,
            datakey: "D",
            label: "D",
        },
        {
            color: '#00ffff',
            data: 5,
            datakey: "E",
            label: "E",
        },
        {
            color: '#ffff00',
            data: 3,
            datakey: "F",
            label: "F",
        }
    ],
    apiInfo: {
        url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
        method: 'get',
        type: 'http',
        query: ''
    }
};