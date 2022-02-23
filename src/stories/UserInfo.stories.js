import UserInfo from '../components/user-info-component/UserInfo.vue';

export default {
    title: 'Zekoder/UserInfo',
    component: UserInfo,
    argTypes: {
        firstName: {
            control: {
                type: 'text'
            }
        },
        lastName: {
            control: {
                type: 'text'
            }
        },
        status: {
            control: {
                type: 'text'
            }
        },
        dropdownLinks: {
            control: {
                type: 'object'
            }
        },
        showName: {
            control: {
                type: 'boolean'
            }
        },
        namePosition: {
            control: {
                type: 'select',
                options: ['left', 'right']
            }
        },
        avatar: {
            control: {
                type: 'text'
            }
        },
        styleObj: {
            control: {
                type: 'object'
            }
        },
        dropdownStyleObj: {
            control: {
                type: 'object'
            }
        },
    }
};

const Template = (args, { argTypes }) => ({
    components: { "zek-user-info": UserInfo },
    props: Object.keys(argTypes),
    template: '<zek-user-info v-bind="$props"></zek-user-info>',
});

export const Primary = Template.bind({});
Primary.args = {
    firstName: 'John',
    lastName: 'Doe',
    avatar: 'https://avatars3.githubusercontent.com/u/1234?s=460&v=4',
    status: 'online',
    showName: true,
    namePosition: 'left',
    dropdownLinks: [
        {
            label: 'Link 1',
            url: 'https://google.com'
        },
        {
            label: 'Link 2',
            url: 'https://google.com'
        },
        {
            label: 'Link 3',
            url: 'https://google.com'
        }
    ],
    styleObj: {
        "fontSize": "24px",
        "textTransform": "capitalize",
        "backgroundColor": "yellow",
        "borderRadius": "10px",
    },
    dropdownStyleObj: {
    }
};

export const Secondary = Template.bind({});
Secondary.args = {};