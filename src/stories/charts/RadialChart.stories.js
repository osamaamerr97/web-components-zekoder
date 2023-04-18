import ZekRadialChart from "../../components/charts/RadialChart.vue";
import { action } from '@storybook/addon-actions';
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Charts/Radial Chart',
    component: ZekRadialChart,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {}
};

const Template = (args, { argTypes }) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ZekRadialChart: ZekRadialChart },
    props: Object.keys(argTypes),
    methods: { action },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<zek-radial-chart @dataPointSelection="action(`selected`)()" v-bind="$props"></zek-radial-chart>',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
    height: "500px",
    width: "90%",
    id: '0',
    stroke: {
        width: 0.5,
    },
    data: [{
        color: '#9149CD',
        data: 40,
        dataKey: 'grapes',
        label: 'grapes',
        gradient: {    // Like in CSS linear-gradient(242.49deg, #9149CD 49.59%, #D95C93 85.05%)
            deg: 243,
            color1: '#9149CD',
            opacity: 0.5,           // Has to be a number
            color2: '#D95C93',
            opcaity: 0.85
        }
    }],
    apiInfo: {
        url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
        method: 'get',
        type: 'http',
        query: ''
    },
    showLegend: true,
};
