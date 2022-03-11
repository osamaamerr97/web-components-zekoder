import ZekAreaChart from "../../components/charts/AreaChart.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Charts/Area Chart',
    component: ZekAreaChart,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {}
};

const Template = (args, { argTypes }) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ZekAreaChart },
    props: Object.keys(argTypes),
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<zek-area-chart v-bind="$props"></zek-area-chart>',
});

export const Primary = Template.bind({});
  // More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
    height: "500px"
};