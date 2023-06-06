import ZekCodeEditor from '../components/code-editor/CodeEditor.vue';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Zekoder/Code Editor',
    component: ZekCodeEditor,
};

const Template = (args, { argTypes }) => ({
    components: { ZekCodeEditor },
    props: Object.keys(argTypes),
    methods: { action },
    template: '<ZekCodeEditor v-bind="$props" @onInput="action(`onInput`)($event)"/>',
});

export const primary = Template.bind({});
primary.args = {
    // Set value to a generic python STUB
    value: `def main():
    print("Hello World!")`,
    // Set language to python
    language: 'python',
    // Set theme to monokai
    theme: 'monokai',
};

export const secondary = Template.bind({});
secondary.args = {
    // Set value to a generic CSS STUB
    value: `body {
    background-color: #000;
    color: #fff;
    }`,
    // Set language to CSS
    language: 'css',
    // Set theme to monokai
    theme: 'monokai',
};

