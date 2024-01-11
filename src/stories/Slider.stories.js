import ZekSlider from "../components/slider/Slider.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Slider',
    component: ZekSlider,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        showArrows: {
            control: 'boolean'
        },
        isInfinite: {
            control: 'boolean'
        },
        fadeEffect: {
            control: 'boolean'
        },
        autoPlay: {
            control: 'boolean'
        },
        speed: {
            control: 'number'
        },
        showDots: {
            control: 'boolean'
        },
        slides: {
            control: 'object'
        },
        styleObj: {
            control: 'object'
        }
      },
  };


  const Template = (args, {argTypes}) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ZekSlider },
    props: Object.keys(argTypes),
    template: '<ZekSlider v-bind="$props"/>',
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
                url: 'https://media.istockphoto.com/id/1283504873/photo/mosque-and-bosphorus-bridge.jpg?b=1&s=612x612&w=0&k=20&c=TEusjn06D_GyNThCV430JbSFAUZa2ggE588kt28K46M=',
                position: 'center',
                cover: 'full'
            },
            button: {
                text: 'Click ME!',
                position: 'left', //left or right within the block
                showLink: false,
                url: '/startups'
            },
            style: {
                height: '50px',
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
                url: '',
                position: 'left',
                cover: 'full'
            },
            button: {
                text: 'Click ME!',
                position: 'right', //left or right within the block
                showLink: false,
                url: '/startups'
            },
            style: {
                height: '50px',
                padding: '40px',
                background: '#ebc8c8'
            },
            textPosition: 'right',
            textCover: 'half'
        },
        {
            heading: "heading 2",
            subHeading: "subheading",
            description: "lorem ipsum dolor sit amet",
            bullets: [
                "bullet point 1",
                "bullet point 2",
                "bullet point 3"
            ]
        },
        {
            heading: "heading 3",
            subHeading: "subheading",
            description: "lorem ipsum dolor sit amet",
            bullets: [
                "bullet point 1",
                "bullet point 2",
                "bullet point 3"
            ]
        },

        {
            heading: "heading 3",
            subHeading: "subheading",
            description: "lorem ipsum dolor sit amet",
            bullets: [
                "bullet point 1",
                "bullet point 2",
                "bullet point 3"
            ]
        },

        {
            heading: "heading 3",
            subHeading: "subheading",
            description: "lorem ipsum dolor sit amet",
            bullets: [
                "bullet point 1",
                "bullet point 2",
                "bullet point 3"
            ]
        },

        {
            heading: "heading 3",
            subHeading: "subheading",
            description: "lorem ipsum dolor sit amet",
            bullets: [
                "bullet point 1",
                "bullet point 2",
                "bullet point 3"
            ]
        },

        {
            heading: "heading 3",
            subHeading: "subheading",
            description: "lorem ipsum dolor sit amet",
            bullets: [
                "bullet point 1",
                "bullet point 2",
                "bullet point 3"
            ]
        },

        {
            heading: "heading 3",
            subHeading: "subheading",
            description: "lorem ipsum dolor sit amet",
            bullets: [
                "bullet point 1",
                "bullet point 2",
                "bullet point 3"
            ]
        },

        {
            heading: "heading 3",
            subHeading: "subheading",
            description: "lorem ipsum dolor sit amet",
            bullets: [
                "bullet point 1",
                "bullet point 2",
                "bullet point 3"
            ]
        },

        {
            heading: "heading 3",
            subHeading: "subheading",
            description: "lorem ipsum dolor sit amet",
            bullets: [
                "bullet point 1",
                "bullet point 2",
                "bullet point 3"
            ]
        },

        {
            heading: "heading 3",
            subHeading: "subheading",
            description: "lorem ipsum dolor sit amet",
            bullets: [
                "bullet point 1",
                "bullet point 2",
                "bullet point 3"
            ]
        },

    ],
    styleObj: {
        "textTransform": "capitalize",
        "textAlign": "center"
    }
};
export const Pics = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Pics.args = {
    slides : [
        {
            pic: 'https://media.istockphoto.com/id/1283504873/photo/mosque-and-bosphorus-bridge.jpg?b=1&s=612x612&w=0&k=20&c=TEusjn06D_GyNThCV430JbSFAUZa2ggE588kt28K46M=',
        },
        {
            pic: 'https://media.istockphoto.com/id/1283504873/photo/mosque-and-bosphorus-bridge.jpg?b=1&s=612x612&w=0&k=20&c=TEusjn06D_GyNThCV430JbSFAUZa2ggE588kt28K46M=',
        },
        {
            pic: 'https://media.istockphoto.com/id/1283504873/photo/mosque-and-bosphorus-bridge.jpg?b=1&s=612x612&w=0&k=20&c=TEusjn06D_GyNThCV430JbSFAUZa2ggE588kt28K46M=',
        },
        {
            pic: 'https://media.istockphoto.com/id/1283504873/photo/mosque-and-bosphorus-bridge.jpg?b=1&s=612x612&w=0&k=20&c=TEusjn06D_GyNThCV430JbSFAUZa2ggE588kt28K46M=',
        },
        {
            pic: 'https://media.istockphoto.com/id/1283504873/photo/mosque-and-bosphorus-bridge.jpg?b=1&s=612x612&w=0&k=20&c=TEusjn06D_GyNThCV430JbSFAUZa2ggE588kt28K46M=',
        },
        {
            pic: 'https://media.istockphoto.com/id/1283504873/photo/mosque-and-bosphorus-bridge.jpg?b=1&s=612x612&w=0&k=20&c=TEusjn06D_GyNThCV430JbSFAUZa2ggE588kt28K46M=',
        },
    ],
    styleObj: {
        "textTransform": "capitalize",
        "textAlign": "center"
    }
};

export const Videos = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Videos.args = {
    slides : [
        {
            video: {
                source: 'vimeo',
                url: 'https://player.vimeo.com/video/670960964',
                height: '100%',
                width: '100%',
                showControls: true,
            }
        },
        {
            video: {
                source: 'vimeo',
                url: 'https://player.vimeo.com/video/816852990',
                height: '100%',
                width: '100%',
                // showControls: true,
                isMuted: true,
                overlay: {
                    component: {
                        template: "<div @mouseover='log' style='display: flex; justify-content: center;align-items: center;background-color: lightgrey; opacity: 0.4'><h1>Overlay</h1></div>",
                        methods: {
                            log() {
                                console.log('overlay')
                            }
                        }
                    }
                },
            }
        },
        {
            video: {
                source: 'vimeo',
                url: 'https://player.vimeo.com/video/670960964',
                height: '100%',
                width: '100%',
                showControls: true,
            }
        },
    ],
    styleObj: {
        "textTransform": "capitalize",
        "textAlign": "center",
        width: '100%',
        height: '500px',
    }
};
