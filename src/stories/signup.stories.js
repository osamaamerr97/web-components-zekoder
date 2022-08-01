import ZekSignup  from '../components/signup/Signup.vue';

export default {
    title: 'Zekoder/Signup',
    component: ZekSignup,
    argTypes: {
    
    },
};

const Template = (args, { argTypes }) => ({
    components: { ZekSignup },
    props: Object.keys(argTypes),
    template: '<zek-signup v-bind="$props"></zek-signup>',
});

export const Primary = Template.bind({});
Primary.args = {
    showCaptcha: true
 };

export const Wireframe = Template.bind({});
Wireframe.args = {};