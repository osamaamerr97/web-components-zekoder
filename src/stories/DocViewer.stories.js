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

  export const PDF = Template.bind({});
  export const DOC = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args

PDF.args = {
    styleObj: {
        "width": "600px"
    },
    value: "https://www.orimi.com/pdf-test.pdf",
    type: "pdf",
    height: 255,
    showToolbar: true

};
DOC.args = {
    value: "https://homepages.inf.ed.ac.uk/neilb/TestWordDoc.doc",
    type: "office",
    height: 100
}

