import ZekNavbar from '../components/navbar/Navbar.vue';

export default {
    title: 'Zekoder/navbar',
    component: ZekNavbar,
    argTypes: {

    }
  };
const Template = (args, { argTypes }) => ({
  components: { ZekNavbar },
  props: Object.keys(argTypes),
  template: '<zek-navbar v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
    styleObj: {
     backgroundColor: "white"
    },
    nestedStyleObj: {
     backgroundColor: "white",

    },
    tabStyle: {
      fontSize: "1em",
      fontWeight: "bold",
      backgroundColor: "white",
      textDecoration: "none",
      color: "black"
    },
    nestedTabStyle: {
        fontSize: "1em",
        fontWeight: "bold",
        backgroundColor: "white",
        textDecoration: "none",
        color: "blue",
        marginTop: "10px"
    },
  tabs: [{
    label: "Home",
    url: "#",
    icon: "fas fa-envelope",
    styleObj: {marginRight: "10px"},
    disabled: true,
    showNested: false,

    tabs: [
        { label: 'blabla', url: '#', icon: 'fa fa-building', styleObj: { marginRight: '5px' } },
        { label: 'lol', url: '#', icon: 'fa fa-users', styleObj: { marginRight: '5px' } }
      ],
  }, {
    label: 'About',
    tabs: [
      { label: 'Company', url: '#', icon: 'fa fa-building', styleObj: { marginRight: '5px' } },
      { label: 'Team', url: '#', icon: 'fa fa-users', styleObj: { marginRight: '5px' } }
    ],
    icon: 'fa fa-info-circle',
    url: '#',
    showNested: false,
    active: true,
    styleObj: { marginRight: '5px' }
  }, {
    label: "Home",
    url: "#",
    icon: "fas fa-envelope",
    styleObj: {marginRight: "5px"},
    showNested: false,
    active: false,
    tabs: [
        { label: 'balbal2', url: '#', icon: 'fa fa-building', styleObj: { marginRight: '5px' } },
        { label: 'lol2', url: '#', icon: 'fa fa-users', styleObj: { marginRight: '5px' } }
      ],
  }, {
    label: "Home",
    url: "#",
    icon: "fas fa-envelope",
    styleObj: {marginRight: "5px"},
    showNested: false,
    active: false,
    tabs: [
        { label: 'blabla3', url: '#', icon: 'fa fa-building', styleObj: { marginRight: '5px' } },
        { label: 'lol3', url: '#', icon: 'fa fa-users', styleObj: { marginRight: '5px' } }
      ],
  }],
};

