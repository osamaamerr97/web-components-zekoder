import ZekHtml from "../components/html-block/HtmlBlock.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Html Block',
    component: ZekHtml,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
    },
  };


  const Template = (args, {argTypes}) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ZekHtml },
    props: Object.keys(argTypes),
    template: '<zek-html v-bind="$props"></zek-html>',
  });

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  content: `
  <strong>Hello World</strong>
  <iframe src="https://www.w3schools.com"></iframe>
  ` ,
  styleObj: {
    "color": "#000000",
    "fontSize": "24px",
    "textTransform": "capitalize",
    "textDecoration": "underline"
  }
};