import ZekHeading from "../components/heading-block/HeadingBlock.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Heading Block',
    component: ZekHeading,
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


  const Template = (args, {argTypes}) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ZekHeading },
    props: Object.keys(argTypes),
    template: '<zek-heading v-bind="$props"></zek-heading>',
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