import TextBlock from "../components/text-block/TextBlock.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Text Block',
    component: TextBlock,
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


  const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { TextBlock },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<TextBlock v-bind="args"></TextBlock> <br> End of story.',
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