import HeadingBlock from "../components/heading-block/HeadingBlock.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Heading Block',
    component: HeadingBlock,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        headingLevel: {
            control: 'select',
            options: [1, 2, 3, 4, 5, 6]
        },
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
        }
    },
  };


  const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { HeadingBlock },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<HeadingBlock v-bind="args"></HeadingBlock> <br> End of story.',
  });

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  text: 'My Heading',
  headingLevel: 1,
  spaceBefore: 0,
  spaceAfter: 0,
  styleObj: {
    "color": "#000000",
    "fontSize": "24px",
    "textTransform": "capitalize",
    "textDecoration": "underline"
  }
};