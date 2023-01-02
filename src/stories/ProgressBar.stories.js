import ZekProgressBar from '../components/progress-bar/ProgressBar.vue';

export default {
    title: 'Zekoder/Progess Bar',
    component: ZekProgressBar,

};

const Template = (args, { argTypes }) => ({
    components: { ZekProgressBar },
    props: Object.keys(argTypes),
    template: '<zek-progress-bar v-bind="$props"></zek-progress-bar>',
});

export const Primary = Template.bind({});
Primary.args = {
    value: 50,
    max: 100,
    color: 'primary',
    height: '10px',
    backgroundColor: 'lightgray',
 };
