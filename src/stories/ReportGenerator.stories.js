import ReportGenerator from "../components/report-generator/ReportGenerator.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Report Generator',
    component: ReportGenerator,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
      onClick: {},
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
      },
    },
  };


  const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ReportGenerator },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<ReportGenerator v-bind="args"> STORYBOOK  </ReportGenerator>',
  });

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  yml: '~/src/stories/assets/test.yml',
  fileName: 'test.docx'
};