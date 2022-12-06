import ZekFileUpload from "../components/file-upload/FileUpload.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/File Upload',
    component: ZekFileUpload,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
    },
  };


  const Template = (args, {argTypes}) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ZekFileUpload },
    props: Object.keys(argTypes),
    template: '<zek-file-upload v-bind="$props"></zek-file-upload>',
  });

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
    uploadUrl: "https://zecommons.dev.zekoder.net/image?thumbnail_width=200&thumbnail_height=200&file_name=image1&file_description=testing-upload"
};