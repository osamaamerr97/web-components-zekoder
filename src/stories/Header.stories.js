import ZekHeader from '../components/header/Header.vue';

export default {
  title: 'Zekoder/Header',
  component: ZekHeader,
  argTypes: {
    logo: {
      control: { type: 'text' },
    },
    logoProperties: {
      control: { type: 'object' },
    },
    text: {
      control: { type: 'text' },
    },
    sidebarButton: {
      control: { type: 'boolean' },
    },
    sidebarButtonProperties: {
      control: { type: 'object' },
    },
    menus: {
      control: { type: 'object' },
    },
    styleObj: {
      control: { type: 'object' },
    },
  }
};

const Template = (args, { argTypes }) => ({
  components: { ZekHeader },
  props: Object.keys(argTypes),
  template: '<zek-header v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
  logoProperties: {
    position: "left",
    url: "",
    sidbarIconPosition: "right",
    style: {
      width: "100px",
      height: "100px",
      textDecoration: "none",
    },
    textStyle: {
      fontSize: "1.5em",
      fontWeight: "bold",
      color: "black",
      textDecoration: "none",
    },
    logoStyle: {
      width: '70%'
    }
  },
  text: "Vue",
  sidebarButton: true,
  sidebarButtonProperties: {
    position: "right",
    target: "",
  },
  menus: [{
    label: "Home",
    links: ['#home', '#about', '#contact'],
  }, {
    label: "Home",
    links: ['#home', '#about', '#contact'],
  }, {
    label: "Home",
    links: ['#home', '#about', '#contact'],
  }, {
    label: "Home",
    links: ['#home', '#about', '#contact'],
  }],
  styleObj: {
    backgroundColor: "lightgrey",
    color: "black",
  }
};

export const Secondary = Template.bind({});
Secondary.args = {};