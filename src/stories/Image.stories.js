import Image from "../components/image/Image.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Image',
    component: Image,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        url : {
            control: 'string'
        },
        altText: {
            control: 'string'
        },
        width: {
            control: 'number'
        },
        height: {
            control: 'number'
        }
    },
  };


  const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Image },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<Image v-bind="args"></Image> <br> End of story.',
  });

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  url: 'https://remoto.world/_nuxt/img/companies.694de85.svg',
  altText: 'sample image',
  width: 500,
  height: 500,
  styleObj: {
    "color": "red",
    "fontSize": "24px",
    "textTransform": "capitalize",
    "textDecoration": "underline"
  }
};