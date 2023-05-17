import ZekDocViewer from '../components/doc-viewer/DocViewer.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Doc Viewer',
    component: ZekDocViewer,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
    },
  };

  const Template = (args, {argTypes}) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ZekDocViewer },
    props: Object.keys(argTypes),
    template: '<zek-doc-viewer v-bind="$props"></zek-doc-viewer>',
  });

  export const Primary = Template.bind({});
  export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

Primary.args = {
    styleObj: {
        "background-color": "red",
    }

};
Secondary.args = {
    styleObj: {
        "background-color": "red",
    }
}

