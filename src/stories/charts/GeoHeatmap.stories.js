import ZekGeoHeatmap from "../../components/charts/GeoHeatmap.vue";
import { action } from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Charts/Geo Heatmap',
    component: ZekGeoHeatmap,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {}
};

const Template = (args, { argTypes }) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ZekGeoHeatmap: ZekGeoHeatmap },
    props: Object.keys(argTypes),
    methods: { action },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<zek-geo-heatmap  @dataPointSelection="action(`selected`)()" v-bind="$props"></zek-geo-heatmap>',
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
    options: {
        lowColor: '#ff0000',
        highColor: '#00ff00',
        defaultCountryFillColor: '#ffffff',
        countryStrokeColor: '#000000',
    },
    data: [
        {
            data: 55,
            datakey: "us",
            label: "US",
        },
        {
            data: 25,
            datakey: "ca",
            label: "CA",
        },
        {
            data: 15,
            datakey: "uk",
            label: "UK",
        },
        {
            data: 10,
            datakey: "af",
            label: "AF",
        },
        {
            data: 5,
            datakey: "ru",
            label: "RU",
        },
        {
            data: 3,
            datakey: "au",
            label: "au",
        }
    ],
    apiInfo: {
        url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
        method: 'get',
        type: 'http',
        query: ''
    }
};