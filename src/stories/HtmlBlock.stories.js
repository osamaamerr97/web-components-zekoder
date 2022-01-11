import HtmlBlock from "../components/html-block/HtmlBlock.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Html Block',
    component: HtmlBlock,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
    },
  };


  const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { HtmlBlock },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<HtmlBlock v-bind="args"></HtmlBlock> <br> End of story.',
  });

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  content: `
  My <strong>milkshake</strong> brings all the boys to the yard<br/>
  And <i>they're</i> like, it's better than yours
  <iframe src="https://www.w3schools.com"></iframe>
  ` ,
  styleObj: {
    "color": "#000000",
    "fontSize": "24px",
    "textTransform": "capitalize",
    "textDecoration": "underline"
  }
};