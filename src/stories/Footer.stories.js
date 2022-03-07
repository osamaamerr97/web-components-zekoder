import ZekFooter  from '../components/footer/Footer.vue';

export default {
    title: 'Zekoder/Footer',
    component: ZekFooter,
    argTypes: {
        height: {
            control: { type: 'text' },
        },
        columns: {
            control: { type: 'object' },
        },
        socialLinks: {
            control: { type: 'object' },
        },
        image: {
            control: { type: 'text' },
        },
        imagePosition: {
            control: { type: 'select' },
            options: ['left', 'right', 'center'],
        },
        textStyle: {
            control: { type: 'text' },
        },
        styleObj: {
            control: { type: 'object' },
        },
    }
};

const Template = (args, { argTypes }) => ({
    components: {'zek-footer': ZekFooter },
    props: Object.keys(argTypes),
    template: '<zek-footer v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
    height: 'fit-content',
    columns: [
        {
            links: [
                {
                    text: 'About',
                    href: '#'
                },
                {
                    text: 'Contact',
                    href: '#'
                },
                {
                    text: 'Privacy',
                    href: '#'
                },
                {
                    text: 'Terms',
                    href: '#'
                }
            ]
        },
        {
            links: [
                {
                    text: 'Facebook',
                    href: '#'
                },
                {
                    text: 'Twitter',
                    href: '#'
                },
                {
                    text: 'Instagram',
                    href: '#'
                },
                {
                    text: 'LinkedIn',
                    href: '#'
                }
            ]
        },
        {
            links: [
                {
                    text: 'Privacy',
                    href: '#'
                },
                {
                    text: 'Terms',
                    href: '#'
                }
            ]
        }
    ],
    socialLinks: [
        {
            icon: 'facebook',
            // facebook icon link

            href: '#'
        },
        {
            icon: 'twitter',
            href: '#'
        },
        {
            icon: 'instagram',
            href: '#'
        },
        {
            icon: 'linkedin',
            href: '#'
        }
    ],
    image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    styleObj: {
        "backgroundColor": "#f5f5f5",
        "padding": "2rem 0",
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "space-around",
        "alignItems": "flex-start",
        "textAlign": "left",
        "color": "#333",
        "fontSize": "1.2rem",
        "fontWeight": "bold",
        "fontFamily": "Roboto, sans-serif",
        "textTransform": "uppercase",
        "letterSpacing": "0.1rem",
        "borderTop": "1px solid #ccc",
    }

 };

export const Secondary = Template.bind({});
Secondary.args = {  };