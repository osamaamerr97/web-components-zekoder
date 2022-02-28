import ZekRadioButton from "../components/radio-button/RadioButton.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Radio Button',
    component: ZekRadioButton,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        alignment: {
            control: { type: "select" },
            options: [ 'vertical', 'horizontal' ]
        },
    },
  };


  const Template = (args, { argTypes }) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ZekRadioButton },
    props: Object.keys(argTypes),
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<zek-radio-button v-bind="$props"></zek-radio-button>',
  });

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  theme: '', 
  label: 'Example Radio Buttons',
  alignment: 'vertical',
  justifyItems: true,
  items: [
      {
          text: 'Radio 1',
          value: 20
      },
      {
          text: 'Radio 2',
          value: 30
      },
      {
          text: 'Radio 3',
          value: 40
      }
  ],
  styleObj: {
    "textTransform": "capitalize",
    "textAlign": "center"
  }
};