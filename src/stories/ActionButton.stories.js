import ZekButton from "../components/action-button/ActionButton.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Action Button',
    component: ZekButton,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        size: {
          control: 'select',
          options: ['small', 'medium', 'large', 'block'],
        },
        type: {
          control: 'select' ,
          options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link', 'raised']
        },
        theme: {
          control: 'select',
          options: ['material', 'bootstrap', 'custom']
        },
        disabled: {
          control: 'boolean'
        },
        active: {
          control: 'boolean'
        },
        loading: {
          control: 'boolean'
        },
        outlineButton: {
          control: 'boolean'
        }
        
      },
  };


  const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ZekButton },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<zek-button v-bind="args"></zek-button>',
  });

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  theme: '', 
  label: '',
  icon: '',
  url: '',
  size: '',
  type: '',
  disabled: false,
  loading: false,
  active: false,
  outlineButton: false,
  iconTrailing: false,
  styleObj: {
    "textTransform": "capitalize",
    "textAlign": "center"
  }
};