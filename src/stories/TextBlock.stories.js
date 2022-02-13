import ZekText from "../components/text-block/TextBlock.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Text Block',
    component: ZekText,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        spaceBefore: {
            control: {
                type: 'number',
                min: 0,
                step: 5
            }
        },
        spaceAfter: {
            control: {
                type: 'number',
                min: 0,
                step: 5
            }
        },
        lineBreaks: {
            control: {
                type: 'number',
                min: 0,
                step: 1
            }
        }
    },
  };


  const Template = (args, {argTypes}) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ZekText },
    props: Object.keys(argTypes),
    template: '<zek-text v-bind="$props"></zek-text>',
  });

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  text: 'Lorem Ipsumd dolor sit amet.',
  lineBreaks: 0,
  spaceBefore: 0,
  spaceAfter: 0,
  styleObj: {
    "color": "red",
    "fontSize": "24px",
    "textTransform": "capitalize",
    "textDecoration": "underline"
  }
};