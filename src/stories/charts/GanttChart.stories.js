import ZekGanttChart from "../../components/charts/GanttChart.vue";

export default {
    title: 'Zekoder/Charts/Gantt Chart',
    component: ZekGanttChart,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
};
const Template = (args, { argTypes }) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ZekGanttChart },
    props: Object.keys(argTypes),
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<zek-gantt-chart v-bind="$props"></zek-gantt-chart>',
});

export const Primary = Template.bind({});

Primary.args = {
    showTooltip: true,
    data: [
        {
            name: "Task 1",
            data: [
                {
                    x: "LOL",
                    y: [1, 5]
                }
            ]
        },
        {
            name: "Task 2",
            data: [
                {
                    x: "Lmao",
                    y: [10, 30]
                }
            ]
        },
    ],
    showLegend: false,
    title: "Gantt Chart",
    borderRadius: "75px",
    grid: {
        row: {
            colors: ['#f3f4f5', '#fff'],
            opacity: 1,
            show: true,
        }
    },
    xAxis: {
        type: "datetime",
        min: 1,
        max: 30,
        tickAmount: 30,
        labels: {
            style: {
                colors: "blue",
                fontWeight: "bold",
            }
        }
    },
    yAxis: {
        type: "datetime",
        axisBorder: {
            show: false
        },
        labels: {
            show: false
        },
    },
    showTooltip: true,
}