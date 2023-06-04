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
    label: "Upload Image",
    uploadUrl: "https://zecommons.dev.zekoder.net/image?thumbnail_width=200&thumbnail_height=200&file_name=image1&file_description=testing-upload",
    placeholder: "<span class='p-2'>Upload</span><i class='fa fa-upload'></i>",
    width: "100px",
    height: "100px",
    stylePanelLayout: "compact circle", // using inputStyle give more control
    extraProps: {
        stylePanelShowRemoveButton: false,
        stylePanelShowProgress: true,
        stylePanelShowSize: true,
        stylePanelShowFilename: true,
        stylePanelShowFiletypeIcon: true,
        stylePanelShowUploadedIcon: true,
    },
    styleObject: {
        display: "flex",
        alignItems: "center",
    },
    inputStyle: {
        "background-color": "red",
        "border": "1px solid black",
        "border-radius": "50%",
        "margin": "0 10px",
    },
    deleteButton: { // ZekButton props
        label: "Delete",
        styleObj: {
            "background-color": "red",
            "color": "white",
            "border": "1px solid black",
            "border-radius": "10px",
            "padding": "5px 10px",
            "margin": "10px",
            height: "30px",
        },
    },
    acceptedFileTypes: ["application/pdf"],
    allowImagePreview: false
};
