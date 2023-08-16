import ZekRightPanel from '../components/right-panel/RightPanel.vue';

export default {
    title: 'Zekoder/RightPanel',
    component: ZekRightPanel,
};

const Template = (args, { argTypes }) => ({
    components: { ZekRightPanel },
    props: Object.keys(argTypes),
    template: '<ZekRightPanel v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
    show: true,
    formProps: {
        heading: 'hello',
        subheading: 'babla',
        inputs: [
            {
                label: 'first name',
                type: 'text',
                inputType: 'text',
            }
        ]
    },
    styleObj: {
        color: 'red'
    }
}
