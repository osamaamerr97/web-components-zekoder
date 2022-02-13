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


  const Template = (args, {argTypes}) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ReportGenerator },
    props: Object.keys(argTypes),
    template: '<ReportGenerator v-bind="$props"> STORYBOOK  </ReportGenerator>',
  });

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  yml: '~/src/stories/assets/test.yml',
  fileName: 'test.docx'
};