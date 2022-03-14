import ZekPieChart from "../../components/charts/PieChart.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Charts/Pie Chart',
    component: ZekPieChart,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {}
};

const Template = (args, { argTypes }) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ZekPieChart: ZekPieChart },
    props: Object.keys(argTypes),
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<zek-pie-chart v-bind="$props"></zek-pie-chart>',
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
    data: [55, 66, 12],
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    apiInfo: {
        url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
        method: 'get',
        type: 'http',
        query: ''
    },
    labels: ['Grapes', 'Apples'],
};