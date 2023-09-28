import ZekNavbar from '../components/navbar/Navbar.vue';

export default {
    title: 'Zekoder/navbar',
    component: ZekNavbar,
    argTypes: {

        tabs: {
        control: { type: 'object' },
      },
      navStyle: {
        control: { type: 'object' },
      },
      tabStyle: {
        control: { type: 'object' },
      },
      textStyle: {
        control: { type: 'object' },
      },
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
     backgroundColor: "black"
    },
    nestedStyleObj: {
     backgroundColor: "black",
     marginTop: "40px"
    },
    tabStyle: {
      fontSize: "1.5em",
      fontWeight: "bold",
      backgroundColor: "white",
      textDecoration: "none",
      color: "red"
    },
    nestedTabStyles: {
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
    disabled: true
  }, {
    label: 'About',
    tabs: [
      { label: 'Company', url: '/company', icon: 'fa fa-building', styleObj: { marginRight: '5px' } },
      { label: 'Team', url: '/team', icon: 'fa fa-users', styleObj: { marginRight: '5px' } }
    ],
    icon: 'fa fa-info-circle',
    url: '#',
    showNested: false,
    styleObj: { marginRight: '5px' }
  }, {
    label: "Home",
    url: "#",
    icon: "fas fa-envelope",
    styleObj: {marginRight: "5px"}
  }, {
    label: "Home",
    url: "#",
    icon: "fas fa-envelope",
    styleObj: {marginRight: "5px"}
  }],
};

