import ZekGuidedForm from "../components/guided-form/GuidedForm.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Guided Form',
    component: ZekGuidedForm,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
    },
};

const Template = (args, { argTypes }) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ZekGuidedForm },
    props: Object.keys(argTypes),
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<ZekGuidedForm v-bind="$props"></ZekGuidedForm>',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
    steps: [
        {
            type: 'email',
            id: 'email',
            title: 'Please provide your email',
            label: {
                text: "Email address",
                style: {color: 'brown', width:'100%'}
            },
            required: true,
            description: 'String (text below question)',
            placeholder: 'Please enter your email here',
        },
        {
            type: 'text',
            id: 'f_name',
            title: 'What is your first name?',
            required: true,
            value: 'First',
            placeholder: 'Please provide your name',
            max: 7,
        },
        {
            type: 'longText',
            id: 'desc',
            title: 'Description',
            label: {
                html: "<strong>Detailed Description</strong>",
                style: {color: 'purple'}
            },
            required: true,
            value: "2",
        },
    ],
    allowNavigate: true,
    customClass: 'my-custom-class',
    styleObj: {
        color: 'blue'
    }
};