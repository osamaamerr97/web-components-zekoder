import ZekCardsList from "../components/cards-list/CardsList.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Cards List',
    component: ZekCardsList,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        flipOn: {
            control: { type: "select" },
            options: [ 'click', 'hover' ]
        },
        direction: {
            control: { type: "select" },
            options: [ 'top-down', 'down-top', 'right-left', 'left-right' ]
        }
    },
};


const Template = (args, {argTypes}) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ZekCardsList },
    props: Object.keys(argTypes),
    template: '<zek-cards-list v-bind="$props"></zek-cards-list>',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
    flipOn: 'click',
    cardsHeight: 300,
    cardsWidth: 200,
    cards: [
        {
            content: { //Content must have rows, rows must have columns, columns can have more rows. Component can only be inside a column 
                rows: [
                    {
                        columns: [
                            {
                                content: {
                                    component: 'image',
                                    data: {
                                        url: "https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=20&m=535695503&s=612x612&w=0&h=S16wHXc-b3AkL7YMrcFkR2pDGFJA1bRsPmAfQlfrwkc=",
                                        width: "120px",
                                        height: "120px",
                                    }
                                } 
                            },
                        ]
                    },
                    {
                        columns: [
                            {
                                columnWidth: 12,
                                rows: [
                                    {
                                        columns: [
                                            {
                                                columnWidth: 12,
                                                content: {
                                                    component: 'heading',
                                                    data: {
                                                        headingLevel: 2,
                                                        text: 'My card heading1'
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
                                                        lineBreaks: 0,
                                                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                                                        styleObj: {
                                                            fontSize: '12px'
                                                        }
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
            }
        },
        {
            content: { //Content must have rows, rows must have columns, columns can have more rows. Component can only be inside a column 
                rows: [
                    {
                        columns: [
                            {
                                content: {
                                    component: 'image',
                                    data: {
                                        url: "https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=20&m=535695503&s=612x612&w=0&h=S16wHXc-b3AkL7YMrcFkR2pDGFJA1bRsPmAfQlfrwkc=",
                                        width: "120px",
                                        height: "120px",
                                    }
                                } 
                            },
                        ]
                    },
                    {
                        columns: [
                            {
                                columnWidth: 12,
                                rows: [
                                    {
                                        columns: [
                                            {
                                                columnWidth: 12,
                                                content: {
                                                    component: 'heading',
                                                    data: {
                                                        headingLevel: 2,
                                                        text: 'My card heading2'
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
                                                        lineBreaks: 2,
                                                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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
            }
        },
        {
            content: { //Content must have rows, rows must have columns, columns can have more rows. Component can only be inside a column 
                rows: [
                    {
                        columns: [
                            {
                                content: {
                                    component: 'image',
                                    data: {
                                        url: "https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=20&m=535695503&s=612x612&w=0&h=S16wHXc-b3AkL7YMrcFkR2pDGFJA1bRsPmAfQlfrwkc=",
                                        width: "120px",
                                        height: "120px",
                                    }
                                } 
                            },
                        ]
                    },
                    {
                        columns: [
                            {
                                columnWidth: 12,
                                rows: [
                                    {
                                        columns: [
                                            {
                                                columnWidth: 12,
                                                content: {
                                                    component: 'heading',
                                                    data: {
                                                        headingLevel: 2,
                                                        text: 'My card heading3'
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
                                                        lineBreaks: 2,
                                                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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
            }
        },
        {
            content: { //Content must have rows, rows must have columns, columns can have more rows. Component can only be inside a column 
                rows: [
                    {
                        columns: [
                            {
                                content: {
                                    component: 'image',
                                    data: {
                                        url: "https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=20&m=535695503&s=612x612&w=0&h=S16wHXc-b3AkL7YMrcFkR2pDGFJA1bRsPmAfQlfrwkc=",
                                        width: "120px",
                                        height: "120px",
                                    }
                                } 
                            },
                        ]
                    },
                    {
                        columns: [
                            {
                                columnWidth: 12,
                                rows: [
                                    {
                                        columns: [
                                            {
                                                columnWidth: 12,
                                                content: {
                                                    component: 'heading',
                                                    data: {
                                                        headingLevel: 2,
                                                        text: 'My card heading4'
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
                                                        lineBreaks: 2,
                                                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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
            }
        },
        {
            content: { //Content must have rows, rows must have columns, columns can have more rows. Component can only be inside a column 
                rows: [
                    {
                        columns: [
                            {
                                content: {
                                    component: 'image',
                                    data: {
                                        url: "https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=20&m=535695503&s=612x612&w=0&h=S16wHXc-b3AkL7YMrcFkR2pDGFJA1bRsPmAfQlfrwkc=",
                                        width: "120px",
                                        height: "120px",
                                    }
                                } 
                            },
                        ]
                    },
                    {
                        columns: [
                            {
                                columnWidth: 12,
                                rows: [
                                    {
                                        columns: [
                                            {
                                                columnWidth: 12,
                                                content: {
                                                    component: 'heading',
                                                    data: {
                                                        headingLevel: 2,
                                                        text: 'My card heading5'
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
                                                        lineBreaks: 2,
                                                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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
            }
        },
        {
            content: { //Content must have rows, rows must have columns, columns can have more rows. Component can only be inside a column 
                rows: [
                    {
                        columns: [
                            {
                                content: {
                                    component: 'image',
                                    data: {
                                        url: "https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=20&m=535695503&s=612x612&w=0&h=S16wHXc-b3AkL7YMrcFkR2pDGFJA1bRsPmAfQlfrwkc=",
                                        width: "120px",
                                        height: "120px",
                                    }
                                } 
                            },
                        ]
                    },
                    {
                        columns: [
                            {
                                columnWidth: 12,
                                rows: [
                                    {
                                        columns: [
                                            {
                                                columnWidth: 12,
                                                content: {
                                                    component: 'heading',
                                                    data: {
                                                        headingLevel: 2,
                                                        text: 'My card heading6'
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
                                                        lineBreaks: 2,
                                                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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
            }
        }
    ],
    styleObj: {
    },
    cardsGap: '10px',
    rows: 1,
    columns: 4,
    cardStyle: {
        border: '1px solid black'
    }
};