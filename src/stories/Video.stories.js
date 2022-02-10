import ZekVideo from "../components/video/Video.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Video',
    component: ZekVideo,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        source: {
            control: 'select',
            options: ['local', 'youtube','dailymotion','vimeo'],
        },
        url: {
            control: 'select',
            options: [
                'https://www.w3schools.com/tags/movie.mp4',
                'https://www.youtube.com/embed/tgbNymZ7vqY',
                'https://www.dailymotion.com/embed/video/x83l7sk',
                'https://player.vimeo.com/video/670960964'
            ]
        }
    },
  };


  const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ZekVideo },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<zek-video v-bind="args"></zek-video> <br> End of story.',
  });

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  height: 300,
  width: 600,
  source: 'vimeo',
//   url: 'https://www.w3schools.com/tags/movie.mp4',
//   url: 'https://www.dailymotion.com/embed/video/x83l7sk', //dailymotion
//   url: 'https://www.youtube.com/embed/tgbNymZ7vqY', //youtube
  url: 'https://player.vimeo.com/video/670960964', //vimeo
  isMuted: true,
  loop: false,
  showControls: true,
  autoplay: false,
  styleObj: {
  }
};