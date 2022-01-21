import Slider from "../components/slider/Slider.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Slider',
    component: Slider,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        showArrows: {
            control: Boolean
        },
        isInfinite: {
            control: Boolean
        },
        fadeEffect: {
            control: Boolean
        },
        autoPlay: {
            control: Boolean
        },
        speed: {
            control: Number
        },
        showDots: {
            control: Boolean
        },
        slides: {
            control: Object
        },
        styleObj: {
            control: Object
        }
        
      },
  };


  const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Slider },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<Slider v-bind="args"></Slider>',
  });

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
    slides : [
        {
            heading: "Heading 1",
            subHeading: "Sub Heading That Explains Further",
            description: "Passionate, professional and skilled professionals from across the globe, with persistence and drive, achieve the most complex of business goals and aspirations. Recruit from our approved professionals database or bring your team and let us manage their payments around the globe via prepaid cards, bank transfers or even crypt currency.",
            bullets: [
                "bullet point 1",
                "bullet point 2",
                "bullet point 3"
            ],
            bulletsBefore: false,
            image: {
                url: 'http://localhost:3000/_nuxt/assets/images/why-remoto.svg',
                position: 'right',
                cover: 'half'
            },
            button: {
                text: 'Click ME!',
                position: 'left', //left or right within the block
                showLink: false,
                url: '/startups'
            },
            style: {
                height: '500px',
                padding: '40px'
            },
            textPosition: 'left',
            textCover: 'half'
        },{
            heading: "Heading 1",
            subHeading: "Sub Heading That Explains Further",
            description: "Passionate, professional and skilled professionals from across the globe, with persistence and drive, achieve the most complex of business goals and aspirations. Recruit from our approved professionals database or bring your team and let us manage their payments around the globe via prepaid cards, bank transfers or even crypt currency.",
            bullets: [
                "bullet point 1",
                "bullet point 2",
                "bullet point 3"
            ],
            bulletsBefore: false,
            image: {
                url: 'http://localhost:3000/_nuxt/assets/images/why-remoto.svg',
                position: 'left',
                cover: 'half'
            },
            button: {
                text: 'Click ME!',
                position: 'right', //left or right within the block
                showLink: false,
                url: '/startups'
            },
            style: {
                height: '500px',
                padding: '40px',
                background: '#ebc8c8'
            },
            textPosition: 'right',
            textCover: 'half'
        }
        // {
        //     heading: "heading 2",
        //     subHeading: "subheading",
        //     description: "lorem ipsum dolor sit amet",
        //     bullets: [
        //         "bullet point 1",
        //         "bullet point 2",
        //         "bullet point 3"
        //     ]
        // },
        // {
        //     heading: "heading 3",
        //     subHeading: "subheading",
        //     description: "lorem ipsum dolor sit amet",
        //     bullets: [
        //         "bullet point 1",
        //         "bullet point 2",
        //         "bullet point 3"
        //     ]
        // }
    ],
    styleObj: {
        "textTransform": "capitalize",
        "textAlign": "center"
    }
};