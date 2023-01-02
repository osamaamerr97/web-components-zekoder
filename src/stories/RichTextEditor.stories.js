import ZekRichTextEditor from '../components/rich-text-editor/RichTextEditor.vue';
import { action } from "@storybook/addon-actions"


export default {
    title: 'Zekoder/Rich Text Editor',
    component: ZekRichTextEditor,
};

const Template = (args, { argTypes }) => ({
    components: { ZekRichTextEditor },
    props: Object.keys(argTypes),
    methods: { action },
    template: '<ZekRichTextEditor v-bind="$props" @onChange="action(`onChange`)($event)"/>',
});

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Enter text here',
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
    ],

 };

export const Secondary = Template.bind({});
Secondary.args = {  };
