import ZekCard from "../components/card/Card.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Card',
    component: ZekCard,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
    },
};


const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ZekCard },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<zek-card v-bind="args"></zek-card> <br> End of story.',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
    heading: {
        text: 'My Heading',
        headingLevel: 6,
        spaceBefore: 0,
        spaceAfter: 0,
        styleObj: {
            color: '#ffffff',
            backgroundColor: '#1abc9c',
            padding: '10px'
        }
    },
    backgroundColor: '#fffff',
    hoverBackgroundColor: '',
    content: { //Content must have rows, rows must have columns, columns can have more rows. Component can only be inside a column 
        rows: [
            {
                columns: [
                    {
                        columnWidth: 6, // 1-12
                        content: {
                            component: 'image',
                            data: {
                                url: "https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=20&m=535695503&s=612x612&w=0&h=S16wHXc-b3AkL7YMrcFkR2pDGFJA1bRsPmAfQlfrwkc=",
                                width: "200px",
                                height: "200px",
                            }
                        } 
                    },
                    {
                        columnWidth: 6,
                        rows: [
                            {
                                columns: [
                                    {
                                        columnWidth: 12,
                                        content: {
                                            component: 'heading',
                                            data: {
                                                headingLevel: 2,
                                                text: 'My card heading'
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                columns: [
                                    {
                                        columnWidth: 12,
                                        content: {
                                            component: 'heading',
                                            data: {
                                                headingLevel: 3,
                                                text: 'My subheading'
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                columns: [
                                    {
                                        columnWidth: 12,
                                        content: {
                                            component: 'text',
                                            data: {
                                                lineBreak: 2,
                                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus lacus eget ligula feugiat, finibus convallis felis imperdiet. Fusce diam dolor, dapibus at nulla ut, ultricies tincidunt est. Maecenas sed malesuada eros, quis hendrerit arcu. Donec vehicula sem leo, semper malesuada arcu viverra tempor. Curabitur commodo est et nisl scelerisque volutpat. Mauris in sapien sollicitudin, tincidunt ante vel, rhoncus leo. Pellentesque eget ipsum in augue feugiat porta. Nam eleifend ultricies mauris ac eleifend. Donec tempor hendrerit semper. Nunc congue tristique orci, id tincidunt urna placerat ac. Nullam pellentesque nisi in molestie sodales.'
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                columns: [
                                    {
                                        columnWidth: 12,
                                        content: {
                                            component: 'list',
                                            data: {
                                                type: 'unordered',
                                                listItems: ['Bullet point 1', 'Bullet point 2', 'Bullet point 3']
                                            }
                                        }
                                    }
                                ]
                            }
                        ]
                    }

                ],

            }
        ]
    },
    styleObj: {
        border: 'solid 1px #1abc9c'
    }
};