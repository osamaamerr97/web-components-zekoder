import ZekCaptcha from '../components/re-captcha/ReCaptcha.vue';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Zekoder/ReCaptcha',
    component: ZekCaptcha,
};

const Template = (args, { argTypes }) => ({
    components: { ZekCaptcha },
    props: Object.keys(argTypes),
    methods: { action },
    template: '<ZekCaptcha v-bind="$props" @onVerify="action(`onVerify`)($event)" @onExpired="action(`onExpired`)($event)"/>',
});

export const primary = Template.bind({});
primary.args = {
    siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
};
