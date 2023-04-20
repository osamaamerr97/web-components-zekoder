import ZekXYChart from "../../components/charts/XYChart.vue";
import { action } from "@storybook/addon-actions";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Charts/XY Chart',
    component: ZekXYChart,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['line', 'bar', 'horizontal-bar', 'stacked-bar', 'area', 'scatter', 'radar','heatmap']
            }
        }
    }
};

const Template = (args, { argTypes }) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ZekXyChart: ZekXYChart },
    props: Object.keys(argTypes),
    methods: { action },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<zek-xy-chart v-bind="$props" @dataPointSelection="action(`selected`)()"></zek-xy-chart>',
});

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
  // More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
    type: "area",
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
        }],
    },
    showLegend: true
};
Secondary.args = {
    type: "bar",
    height: "500px",
    width: "90%",
    id: '0',
    data: [
        {
            year: '1990',
            grapes: '30',
            color: 'rgb(100, 3, 251)'
        },
        {
            year: '1991',
            grapes: '35',
            color: 'rgb(46, 44, 49)'
        },
        {
            year: '1992',
            grapes: '43',
        },
        {
            year: '1993',
            grapes: '48',
        },
        {
            year: '1994',
            grapes: '33',
        },
        {
            year: '1995',
            grapes: '30',
        },
        {
            year: '1996',
            grapes: '25',
        },
        {
            year: '1997',
            grapes: '29',
        },
    ],
    xAxis: {
        dataKey: 'year',
        tickSize: '12px',
        type: 'category',
        show: false
    },
    yAxis: {
        tickSize: '14px',
        tickColor: '#000000',
        series: [{
            color: 'rgb(100, 3, 251)',
            // data: [30, 40, 45, 50, 49, 60, 70],
            dataKey: 'grapes',
            label: 'grapes',
        }],
        borderRadius: 30
    },
    gradient: {    // Like in CSS linear-gradient(242.49deg, #9149CD 49.59%, #D95C93 85.05%)
        deg: 243,
        color1: '#9149CD',
        opacity: 0.5,           // Has to be a number
        color2: '#D95C93',
        opcaity: 0.85
    },
    showLegend: false,

};
