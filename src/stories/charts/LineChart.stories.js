import ZekLineChart from "../../components/charts/LineChart.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Charts/Line Chart',
    component: ZekLineChart,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {}
};

const Template = (args, { argTypes }) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ZekLineChart: ZekLineChart },
    props: Object.keys(argTypes),
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<zek-line-chart v-bind="$props"></zek-line-chart>',
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
            year: '1990',
            grapes: '30',
            apples: '55'
        },
        {
            year: '1991',
            grapes: '35',
            apples: '50'
        },
        {
            year: '1992',
            grapes: '43',
            apples: '45'
        },
        {
            year: '1993',
            grapes: '48',
            apples: '42'
        },
        {
            year: '1994',
            grapes: '33',
            apples: '50'
        },
        {
            year: '1995',
            grapes: '30',
            apples: '55'
        },
        {
            year: '1996',
            grapes: '25',
            apples: '58'
        },
        {
            year: '1997',
            grapes: '29',
            apples: '65'
        },
    ],
    apiInfo: {
        url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
        method: 'get',
        type: 'http',
        query: ''
    },
    xAxis: {
        label: 'years',
        dataKey: 'year',
        tickSize: '12px',
        type: 'category'
    },
    yAxis: {
        label: {
            text: 'fruit farms',
            style: {
                color: 'green',
                fontSize: '18px'
            }
        },
        tickSize: '14px',
        tickColor: '#000000',
        series: [{
            color: 'rgb(100, 3, 251)',
            // data: [30, 40, 45, 50, 49, 60, 70],
            dataKey: 'grapes',
            label: 'grapes'
        }, {
            color: '#f77c5f',
            // data: [55, 49, 45, 49, 30, 28, 40],
            dataKey: 'apples',
            label: 'apples'
        }]
    }
};