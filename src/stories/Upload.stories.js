import { action } from '@storybook/addon-actions';
import ZekUpload from '../components/upload-component/Upload.vue';
export default {
    title: 'Zekoder/Upload',
    component: ZekUpload,
    argTypes: {
        id: { control: 'text' },
        name: { control: 'text' },
        type: { control: 'select', options: ['file', 'image'] },
        acceptedFileTypes: { control: 'object' },
        showPreview: { control: 'boolean' },
        previewSettings: { control: 'object' },
        multiple: { control: 'boolean' },
    }
};

const Template = (args, { argTypes }) => ({
    components: { "zek-upload": ZekUpload },
    props: Object.keys(argTypes),
    methods: { action },
    template: '<zek-upload v-bind="$props" @onUpload="action(`uploaded`)()"></zek-upload>',
});

export const Primary = Template.bind({});
Primary.args = {
    id: 'upload',
    name: 'upload',
    type: 'file',
    acceptedFileTypes: ['jpg', 'jpeg', 'png', 'gif'],
    showPreview: true,
    previewSettings: {
        width: '100px',
        height: '100px',
        padding: '15px',
        display: 'flex'
    },
    multiple: false,
};

export const Secondary = Template.bind({});
Secondary.args = {};