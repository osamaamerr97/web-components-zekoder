import Image from "../components/image/Image.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
    title: "Zekoder/Image",
    component: Image,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        url: {
            control: "text",
        },
        altText: {
            control: "text",
        },
        width: {
            control: "text",
        },
        height: {
            control: "text",
        },
        sourceUrl: {
            control: "text",
        },
        sourceTarget: {
            control: { type: "select" },
            options: [ 'self', 'blank' ],
        },
        imageColor: {
            control: { type: "select" },
            options: [ 'normal', 'greyscale' ],
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
    url: "https://remoto.world/_nuxt/img/companies.694de85.svg",
    altText: "sample image",
    width: "500px",
    height: "500px",
    sourceUrl: null,
    sourceTarget: '_self',
    imageColor: 'normal',
    hover: {
        action: 'picture', // greyscale, normal, text, picture
        alternatePicture: 'https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=20&m=535695503&s=612x612&w=0&h=S16wHXc-b3AkL7YMrcFkR2pDGFJA1bRsPmAfQlfrwkc=',
        textOverlay: {
            heading: '',
            description: '',
            bullets: ''
        }
    },
    styleObj: {
        color: "red",
        fontSize: "24px",
        textTransform: "capitalize",
        textDecoration: "underline",
    },
};
