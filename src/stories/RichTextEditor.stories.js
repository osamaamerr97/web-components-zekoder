import ZekRichTextEditor from "../components/rich-text-editor/RichTextEditor.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "Zekoder/Rich Text Editor",
  component: ZekRichTextEditor
};

const Template = (args, { argTypes }) => ({
  components: { ZekRichTextEditor },
  props: Object.keys(argTypes),
  methods: { action },
  template: '<ZekRichTextEditor v-bind="$props" @onChange="action(`onChange`)($event)"/>'
});

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Enter text here",
  toolbar: [
    // node_modules/yimo-vue-editor/src/assets/js/wangEditor.js line 3278
    "source",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block"
  ],
  initialValue: `
    <!DOCTYPE html>
    <html lang="" xml:lang="" xmlns="http://www.w3.org/1999/xhtml">
     <head>
      <title>
       viko-html.html
      </title>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
      <style type="text/css">
       <!--
      p {margin: 0; padding: 0;}	.ft50{font-size:10px;font-family:TTMJJA+Helvetica-NormalTr;color:#f89728;}
      .ft51{font-size:30px;font-family:TTMJJA+HelveticaTr;color:#f89728;}
      .ft52{font-size:18px;font-family:TTMJJA+Helvetica-NormalTr;color:#ffffff;}
      .ft53{font-size:15px;font-family:TTMJJA+Helvetica-NormalTr;color:#ffffff;}
      .ft54{font-size:13px;font-family:TTMJJA+Helvetica-NormalTr;color:#000000;}
      .ft55{font-size:12px;font-family:TTMJJA+HelveticaTr;color:#ffffff;}
      .ft56{font-size:10px;font-family:TTMJJA+Helvetica-LightNormalTr;color:#000000;}
      .ft57{font-size:10px;font-family:TTMJJA+HelveticaNeue-Light;color:#000000;}
      .ft58{font-size:10px;font-family:TTMJJA+Wingdings;color:#2f8540;}
      .ft59{font-size:9px;font-family:TTMJJA+Helvetica-LightNormalTr;color:#000000;}
      .ft510{font-size:9px;font-family:TTMJJA+HelveticaTr;color:#000000;}
      .ft511{font-size:8px;font-family:TTMJJA+HelveticaTr;color:#000000;}
      .ft512{font-size:8px;font-family:TTMJJA+Helvetica-LightNormalTr;color:#000000;}
      .ft513{font-size:9px;line-height:11px;font-family:TTMJJA+Helvetica-LightNormalTr;color:#000000;}
    -->
      </style>
     </head>
     <body bgcolor="#A0A0A0" link="blue" style="margin: 0; padding:0 ;background-color: white" vlink="blue">
      <div id="page5-div" style="position:relative;width:892px;height:1262px;">
       <img alt="background image" height="1262" src="viko005.png" width="892"/>
       <p class="ft50" style="position:absolute;top:1233px;left:840px;white-space:nowrap">
        5
       </p>
       <p class="ft51" style="position:absolute;top:40px;left:64px;white-space:nowrap">
        Rolling
       </p>
       <p class="ft52" style="position:absolute;top:125px;left:68px;white-space:nowrap">
        Rollina Siva Six Key and Socket Series (White - Cream)
       </p>
       <p class="ft54" style="position:absolute;top:162px;left:105px;white-space:nowrap">
        Reference Number
       </p>
       <p class="ft54" style="position:absolute;top:162px;left:314px;white-space:nowrap">
        Product Name
       </p>
       <p class="ft54" style="position:absolute;top:155px;left:501px;white-space:nowrap">
        In the box
       </p>
       <p class="ft54" style="position:absolute;top:169px;left:513px;white-space:nowrap">
        Number
       </p>
       <p class="ft54" style="position:absolute;top:155px;left:580px;white-space:nowrap">
        Sixteen
       </p>
       <p class="ft54" style="position:absolute;top:169px;left:590px;white-space:nowrap">
        Number
       </p>
       <p class="ft54" style="position:absolute;top:156px;left:667px;white-space:nowrap">
        Mechanism+
       </p>
       <p class="ft54" style="position:absolute;top:168px;left:663px;white-space:nowrap">
        Valve/Lid
       </p>
       <p class="ft55" style="position:absolute;top:193px;left:68px;white-space:nowrap">
        Phone Number-Data Rates
       </p>
       <p class="ft56" style="position:absolute;top:215px;left:104px;white-space:nowrap">
        9044X013
       </p>
       <p class="ft56" style="position:absolute;top:215px;left:195px;white-space:nowrap">
        Phone Jack RJ11
       </p>
       <p class="ft56" style="position:absolute;top:215px;left:521px;white-space:nowrap">
        12
       </p>
       <p class="ft56" style="position:absolute;top:215px;left:595px;white-space:nowrap">
        120
       </p>
       <p class="ft57" style="position:absolute;top:215px;left:688px;white-space:nowrap">
        ₺50,10
       </p>
       <p class="ft58" style="position:absolute;top:216px;left:804px;white-space:nowrap">
        ü
       </p>
       <p class="ft56" style="position:absolute;top:233px;left:104px;white-space:nowrap">
        9044X033
       </p>
       <p class="ft56" style="position:absolute;top:233px;left:195px;white-space:nowrap">
        Two RJ11 Phone Jacks
       </p>
       <p class="ft56" style="position:absolute;top:233px;left:521px;white-space:nowrap">
        12
       </p>
       <p class="ft56" style="position:absolute;top:233px;left:595px;white-space:nowrap">
        120
       </p>
       <p class="ft57" style="position:absolute;top:233px;left:688px;white-space:nowrap">
        ₺80,10
       </p>
       <p class="ft58" style="position:absolute;top:234px;left:804px;white-space:nowrap">
        Translation: 2
       </p>
       <p class="ft56" style="position:absolute;top:250px;left:104px;white-space:nowrap">
        9044X032
       </p>
       <p class="ft56" style="position:absolute;top:250px;left:195px;white-space:nowrap">
        RJ45 CAT5E Network Jack
       </p>
       <p class="ft56" style="position:absolute;top:250px;left:521px;white-space:nowrap">
        12
       </p>
       <p class="ft56" style="position:absolute;top:250px;left:595px;white-space:nowrap">
        120
       </p>
       <p class="ft57" style="position:absolute;top:251px;left:685px;white-space:nowrap">
        ₺143,00
       </p>
       <p class="ft58" style="position:absolute;top:252px;left:804px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft56" style="position:absolute;top:268px;left:104px;white-space:nowrap">
        9044X034
       </p>
       <p class="ft56" style="position:absolute;top:268px;left:195px;white-space:nowrap">
        Two Data Ports (2 x RJ45 CAT5E)
       </p>
       <p class="ft56" style="position:absolute;top:268px;left:521px;white-space:nowrap">
        12
       </p>
       <p class="ft56" style="position:absolute;top:268px;left:595px;white-space:nowrap">
        120
       </p>
       <p class="ft57" style="position:absolute;top:269px;left:685px;white-space:nowrap">
        ₺270,00
       </p>
       <p class="ft58" style="position:absolute;top:269px;left:804px;white-space:nowrap">
        Ü
       </p>
       <p class="ft56" style="position:absolute;top:286px;left:104px;white-space:nowrap">
        9044X078
       </p>
       <p class="ft56" style="position:absolute;top:286px;left:195px;white-space:nowrap">
        RJ45 CAT6 Socket
       </p>
       <p class="ft56" style="position:absolute;top:286px;left:521px;white-space:nowrap">
        12
       </p>
       <p class="ft56" style="position:absolute;top:286px;left:595px;white-space:nowrap">
        120
       </p>
       <p class="ft57" style="position:absolute;top:287px;left:685px;white-space:nowrap">
        ₺143,00
       </p>
       <p class="ft58" style="position:absolute;top:287px;left:804px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft56" style="position:absolute;top:304px;left:104px;white-space:nowrap">
        9044X079
       </p>
       <p class="ft56" style="position:absolute;top:304px;left:195px;white-space:nowrap">
        Two RJ45 CAT6 Data Jacks
       </p>
       <p class="ft56" style="position:absolute;top:304px;left:521px;white-space:nowrap">
        12
       </p>
       <p class="ft56" style="position:absolute;top:304px;left:595px;white-space:nowrap">
        120
       </p>
       <p class="ft57" style="position:absolute;top:304px;left:685px;white-space:nowrap">
        ₺270,00
       </p>
       <p class="ft58" style="position:absolute;top:305px;left:804px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft56" style="position:absolute;top:322px;left:104px;white-space:nowrap">
        9044X081
       </p>
       <p class="ft56" style="position:absolute;top:322px;left:195px;white-space:nowrap">
        No Jackpot.
       </p>
       <p class="ft56" style="position:absolute;top:322px;left:521px;white-space:nowrap">
        12
       </p>
       <p class="ft56" style="position:absolute;top:322px;left:595px;white-space:nowrap">
        120
       </p>
       <p class="ft57" style="position:absolute;top:322px;left:688px;white-space:nowrap">
        ₺50,10
       </p>
       <p class="ft58" style="position:absolute;top:323px;left:804px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft56" style="position:absolute;top:339px;left:104px;white-space:nowrap">
        9044X035
       </p>
       <p class="ft56" style="position:absolute;top:339px;left:195px;white-space:nowrap">
        Number Data Phone Jack (RJ45 CAT5E - RJ11)
       </p>
       <p class="ft56" style="position:absolute;top:339px;left:521px;white-space:nowrap">
        12
       </p>
       <p class="ft56" style="position:absolute;top:339px;left:595px;white-space:nowrap">
        120
       </p>
       <p class="ft57" style="position:absolute;top:340px;left:685px;white-space:nowrap">
        ₺160,00
       </p>
       <p class="ft58" style="position:absolute;top:341px;left:804px;white-space:nowrap">
        Ü
       </p>
       <p class="ft56" style="position:absolute;top:357px;left:104px;white-space:nowrap">
        9044X080
       </p>
       <p class="ft56" style="position:absolute;top:357px;left:195px;white-space:nowrap">
        Number data phone socket (RJ45 CAT6 - RJ11)
       </p>
       <p class="ft56" style="position:absolute;top:357px;left:521px;white-space:nowrap">
        12
       </p>
       <p class="ft56" style="position:absolute;top:357px;left:595px;white-space:nowrap">
        120
       </p>
       <p class="ft57" style="position:absolute;top:358px;left:685px;white-space:nowrap">
        ₺160,00
       </p>
       <p class="ft58" style="position:absolute;top:358px;left:804px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft55" style="position:absolute;top:378px;left:68px;white-space:nowrap">
        Diminish
       </p>
       <p class="ft56" style="position:absolute;top:401px;left:104px;white-space:nowrap">
        9044X047
       </p>
       <p class="ft56" style="position:absolute;top:401px;left:195px;white-space:nowrap">
        Rotary Dimmer R 40-600W
       </p>
       <p class="ft56" style="position:absolute;top:401px;left:521px;white-space:nowrap">
        10
       </p>
       <p class="ft56" style="position:absolute;top:401px;left:595px;white-space:nowrap">
        100
       </p>
       <p class="ft57" style="position:absolute;top:401px;left:685px;white-space:nowrap">
        ₺208,00
       </p>
       <p class="ft58" style="position:absolute;top:402px;left:804px;white-space:nowrap">
        Ü
       </p>
       <p class="ft56" style="position:absolute;top:418px;left:104px;white-space:nowrap">
        9044X092
       </p>
       <p class="ft56" style="position:absolute;top:418px;left:195px;white-space:nowrap">
        40-400W/VA Dimmer RC Pro
       </p>
       <p class="ft56" style="position:absolute;top:418px;left:524px;white-space:nowrap">
        8
       </p>
       <p class="ft56" style="position:absolute;top:418px;left:598px;white-space:nowrap">
        80
       </p>
       <p class="ft57" style="position:absolute;top:419px;left:685px;white-space:nowrap">
        ₺359,00
       </p>
       <p class="ft58" style="position:absolute;top:419px;left:804px;white-space:nowrap">
        Ü
       </p>
       <p class="ft56" style="position:absolute;top:436px;left:104px;white-space:nowrap">
        9044X040
       </p>
       <p class="ft56" style="position:absolute;top:436px;left:195px;white-space:nowrap">
        20-500W/VA dimmer switch.
       </p>
       <p class="ft56" style="position:absolute;top:436px;left:524px;white-space:nowrap">
        8
       </p>
       <p class="ft56" style="position:absolute;top:436px;left:598px;white-space:nowrap">
        80
       </p>
       <p class="ft57" style="position:absolute;top:437px;left:685px;white-space:nowrap">
        ₺436,00
       </p>
       <p class="ft58" style="position:absolute;top:437px;left:804px;white-space:nowrap">
        ü
       </p>
       <p class="ft56" style="position:absolute;top:454px;left:104px;white-space:nowrap">
        9044X095
       </p>
       <p class="ft56" style="position:absolute;top:454px;left:195px;white-space:nowrap">
        1-10V Dimmer
       </p>
       <p class="ft56" style="position:absolute;top:454px;left:524px;white-space:nowrap">
        8
       </p>
       <p class="ft56" style="position:absolute;top:454px;left:598px;white-space:nowrap">
        80
       </p>
       <p class="ft57" style="position:absolute;top:455px;left:685px;white-space:nowrap">
        ₺450,00
       </p>
       <p class="ft58" style="position:absolute;top:455px;left:804px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft56" style="position:absolute;top:472px;left:104px;white-space:nowrap">
        9044X094
       </p>
       <p class="ft56" style="position:absolute;top:472px;left:195px;white-space:nowrap">
        Dimmer 6-100W/VA Vavien Pro
       </p>
       <p class="ft56" style="position:absolute;top:472px;left:524px;white-space:nowrap">
        8
       </p>
       <p class="ft56" style="position:absolute;top:472px;left:598px;white-space:nowrap">
        80
       </p>
       <p class="ft57" style="position:absolute;top:472px;left:685px;white-space:nowrap">
        ₺468,00
       </p>
       <p class="ft58" style="position:absolute;top:473px;left:804px;white-space:nowrap">
        ü
       </p>
       <p class="ft55" style="position:absolute;top:493px;left:68px;white-space:nowrap">
        Media Connectors
       </p>
       <p class="ft56" style="position:absolute;top:515px;left:104px;white-space:nowrap">
        9044X023
       </p>
       <p class="ft56" style="position:absolute;top:515px;left:195px;white-space:nowrap">
        VGA Connector Clamp
       </p>
       <p class="ft56" style="position:absolute;top:515px;left:521px;white-space:nowrap">
        12
       </p>
       <p class="ft56" style="position:absolute;top:515px;left:595px;white-space:nowrap">
        120
       </p>
       <p class="ft57" style="position:absolute;top:516px;left:685px;white-space:nowrap">
        ₺333,00
       </p>
       <p class="ft58" style="position:absolute;top:516px;left:804px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft56" style="position:absolute;top:533px;left:104px;white-space:nowrap">
        9044X025
       </p>
       <p class="ft56" style="position:absolute;top:533px;left:195px;white-space:nowrap">
        VGA Connector
       </p>
       <p class="ft56" style="position:absolute;top:533px;left:521px;white-space:nowrap">
        12
       </p>
       <p class="ft56" style="position:absolute;top:533px;left:595px;white-space:nowrap">
        120
       </p>
       <p class="ft57" style="position:absolute;top:533px;left:685px;white-space:nowrap">
        ₺333,00
       </p>
       <p class="ft58" style="position:absolute;top:534px;left:804px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft56" style="position:absolute;top:551px;left:104px;white-space:nowrap">
        9044X026
       </p>
       <p class="ft56" style="position:absolute;top:551px;left:195px;white-space:nowrap">
        USB Connector
       </p>
       <p class="ft56" style="position:absolute;top:551px;left:521px;white-space:nowrap">
        12
       </p>
       <p class="ft56" style="position:absolute;top:551px;left:595px;white-space:nowrap">
        120
       </p>
       <p class="ft57" style="position:absolute;top:551px;left:685px;white-space:nowrap">
        ₺284,00
       </p>
       <p class="ft58" style="position:absolute;top:552px;left:804px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft56" style="position:absolute;top:569px;left:104px;white-space:nowrap">
        9044X028
       </p>
       <p class="ft56" style="position:absolute;top:569px;left:195px;white-space:nowrap">
        HDMI Connector
       </p>
       <p class="ft56" style="position:absolute;top:569px;left:521px;white-space:nowrap">
        12
       </p>
       <p class="ft56" style="position:absolute;top:569px;left:595px;white-space:nowrap">
        120
       </p>
       <p class="ft57" style="position:absolute;top:569px;left:685px;white-space:nowrap">
        ₺388,00
       </p>
       <p class="ft58" style="position:absolute;top:570px;left:804px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft56" style="position:absolute;top:586px;left:104px;white-space:nowrap">
        9044X029
       </p>
       <p class="ft56" style="position:absolute;top:586px;left:195px;white-space:nowrap">
        Fiber Optic Connector
       </p>
       <p class="ft56" style="position:absolute;top:586px;left:521px;white-space:nowrap">
        12
       </p>
       <p class="ft56" style="position:absolute;top:586px;left:595px;white-space:nowrap">
        120
       </p>
       <p class="ft57" style="position:absolute;top:587px;left:685px;white-space:nowrap">
        ₺144,00
       </p>
       <p class="ft58" style="position:absolute;top:587px;left:804px;white-space:nowrap">
        ü
       </p>
       <p class="ft55" style="position:absolute;top:607px;left:68px;white-space:nowrap">
        Electronic Products
       </p>
       <p class="ft56" style="position:absolute;top:630px;left:100px;white-space:nowrap">
        9044X167 *
       </p>
       <p class="ft56" style="position:absolute;top:630px;left:195px;white-space:nowrap">
        Mechanical Keyed E. Saver 230V ESCR
       </p>
       <p class="ft56" style="position:absolute;top:630px;left:521px;white-space:nowrap">
        10
       </p>
       <p class="ft56" style="position:absolute;top:630px;left:595px;white-space:nowrap">
        100
       </p>
       <p class="ft57" style="position:absolute;top:630px;left:685px;white-space:nowrap">
        ₺329,00
       </p>
       <p class="ft58" style="position:absolute;top:631px;left:804px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft56" style="position:absolute;top:647px;left:100px;white-space:nowrap">
        9044X151 *
       </p>
       <p class="ft56" style="position:absolute;top:647px;left:195px;white-space:nowrap">
        13,56 MHz E. Saver 5V ESCR
       </p>
       <p class="ft56" style="position:absolute;top:647px;left:521px;white-space:nowrap">
        10
       </p>
       <p class="ft56" style="position:absolute;top:647px;left:595px;white-space:nowrap">
        100
       </p>
       <p class="ft57" style="position:absolute;top:648px;left:685px;white-space:nowrap">
        ₺899,00
       </p>
       <p class="ft58" style="position:absolute;top:649px;left:804px;white-space:nowrap">
        ü
       </p>
       <p class="ft56" style="position:absolute;top:665px;left:100px;white-space:nowrap">
        9044X166 *
       </p>
       <p class="ft56" style="position:absolute;top:665px;left:195px;white-space:nowrap">
        Mechanical Keyed E.Saver 5V ESCR
       </p>
       <p class="ft56" style="position:absolute;top:665px;left:521px;white-space:nowrap">
        10
       </p>
       <p class="ft56" style="position:absolute;top:665px;left:595px;white-space:nowrap">
        100
       </p>
       <p class="ft57" style="position:absolute;top:666px;left:685px;white-space:nowrap">
        ₺378,00
       </p>
       <p class="ft58" style="position:absolute;top:666px;left:804px;white-space:nowrap">
        Ü
       </p>
       <p class="ft56" style="position:absolute;top:683px;left:101px;white-space:nowrap">
        90551288 *
       </p>
       <p class="ft56" style="position:absolute;top:683px;left:195px;white-space:nowrap">
        Energy Saving Kart
       </p>
       <p class="ft56" style="position:absolute;top:683px;left:518px;white-space:nowrap">
        100
       </p>
       <p class="ft56" style="position:absolute;top:683px;left:595px;white-space:nowrap">
        400
       </p>
       <p class="ft57" style="position:absolute;top:684px;left:688px;white-space:nowrap">
        ₺49,50
       </p>
       <p class="ft58" style="position:absolute;top:684px;left:804px;white-space:nowrap">
        ü
       </p>
       <p class="ft56" style="position:absolute;top:701px;left:104px;white-space:nowrap">
        9044X011
       </p>
       <p class="ft56" style="position:absolute;top:701px;left:195px;white-space:nowrap">
        Analog Thermostat
       </p>
       <p class="ft56" style="position:absolute;top:701px;left:524px;white-space:nowrap">
        6
       </p>
       <p class="ft56" style="position:absolute;top:701px;left:598px;white-space:nowrap">
        60
       </p>
       <p class="ft57" style="position:absolute;top:701px;left:685px;white-space:nowrap">
        ₺696,00
       </p>
       <p class="ft58" style="position:absolute;top:702px;left:804px;white-space:nowrap">
        Ü
       </p>
       <p class="ft56" style="position:absolute;top:719px;left:104px;white-space:nowrap">
        9044X037
       </p>
       <p class="ft56" style="position:absolute;top:719px;left:195px;white-space:nowrap">
        Music Broadcast (Speaker) Socket
       </p>
       <p class="ft56" style="position:absolute;top:719px;left:521px;white-space:nowrap">
        12
       </p>
       <p class="ft56" style="position:absolute;top:719px;left:595px;white-space:nowrap">
        120
       </p>
       <p class="ft57" style="position:absolute;top:719px;left:685px;white-space:nowrap">
        ₺115,00
       </p>
       <p class="ft58" style="position:absolute;top:720px;left:804px;white-space:nowrap">
        ü
       </p>
       <p class="ft56" style="position:absolute;top:736px;left:104px;white-space:nowrap">
        9044X054
       </p>
       <p class="ft56" style="position:absolute;top:736px;left:195px;white-space:nowrap">
        Music Broadcast Key
       </p>
       <p class="ft56" style="position:absolute;top:736px;left:524px;white-space:nowrap">
        8
       </p>
       <p class="ft56" style="position:absolute;top:736px;left:598px;white-space:nowrap">
        80
       </p>
       <p class="ft57" style="position:absolute;top:737px;left:685px;white-space:nowrap">
        ₺238,00
       </p>
       <p class="ft58" style="position:absolute;top:738px;left:804px;white-space:nowrap">
        ü
       </p>
       <p class="ft56" style="position:absolute;top:754px;left:104px;white-space:nowrap">
        9044X091
       </p>
       <p class="ft56" style="position:absolute;top:754px;left:195px;white-space:nowrap">
        Emergency Announced Music Broadcast Key
       </p>
       <p class="ft56" style="position:absolute;top:754px;left:524px;white-space:nowrap">
        6
       </p>
       <p class="ft56" style="position:absolute;top:754px;left:598px;white-space:nowrap">
        60
       </p>
       <p class="ft57" style="position:absolute;top:755px;left:685px;white-space:nowrap">
        ₺419,00
       </p>
       <p class="ft58" style="position:absolute;top:755px;left:804px;white-space:nowrap">
        ü
       </p>
       <p class="ft56" style="position:absolute;top:772px;left:104px;white-space:nowrap">
        9044X082
       </p>
       <p class="ft56" style="position:absolute;top:772px;left:195px;white-space:nowrap">
        Channel Select Key
       </p>
       <p class="ft56" style="position:absolute;top:772px;left:524px;white-space:nowrap">
        8
       </p>
       <p class="ft56" style="position:absolute;top:772px;left:598px;white-space:nowrap">
        80
       </p>
       <p class="ft57" style="position:absolute;top:773px;left:685px;white-space:nowrap">
        ₺404,00
       </p>
       <p class="ft58" style="position:absolute;top:773px;left:804px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft56" style="position:absolute;top:790px;left:104px;white-space:nowrap">
        9044X009
       </p>
       <p class="ft56" style="position:absolute;top:790px;left:195px;white-space:nowrap">
        Buzzer
       </p>
       <p class="ft56" style="position:absolute;top:790px;left:521px;white-space:nowrap">
        12
       </p>
       <p class="ft56" style="position:absolute;top:790px;left:595px;white-space:nowrap">
        120
       </p>
       <p class="ft57" style="position:absolute;top:790px;left:685px;white-space:nowrap">
        ₺150,00
       </p>
       <p class="ft58" style="position:absolute;top:791px;left:804px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft55" style="position:absolute;top:811px;left:68px;white-space:nowrap">
        Frames and Overhead Cabinets
       </p>
       <p class="ft56" style="position:absolute;top:833px;left:104px;white-space:nowrap">
        9048X051
       </p>
       <p class="ft56" style="position:absolute;top:833px;left:195px;white-space:nowrap">
        Single Frame
       </p>
       <p class="ft56" style="position:absolute;top:833px;left:521px;white-space:nowrap">
        24
       </p>
       <p class="ft56" style="position:absolute;top:833px;left:595px;white-space:nowrap">
        240
       </p>
       <p class="ft57" style="position:absolute;top:834px;left:691px;white-space:nowrap">
        ₺3,50
       </p>
       <p class="ft58" style="position:absolute;top:834px;left:804px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft56" style="position:absolute;top:851px;left:104px;white-space:nowrap">
        9048X052
       </p>
       <p class="ft56" style="position:absolute;top:851px;left:195px;white-space:nowrap">
        Two-Way Frame
       </p>
       <p class="ft56" style="position:absolute;top:851px;left:521px;white-space:nowrap">
        10
       </p>
       <p class="ft56" style="position:absolute;top:851px;left:595px;white-space:nowrap">
        200
       </p>
       <p class="ft57" style="position:absolute;top:852px;left:688px;white-space:nowrap">
        ₺26,00
       </p>
       <p class="ft58" style="position:absolute;top:852px;left:804px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft56" style="position:absolute;top:869px;left:104px;white-space:nowrap">
        9048X053
       </p>
       <p class="ft56" style="position:absolute;top:869px;left:195px;white-space:nowrap">
        Three-Way Horizontal Frame
       </p>
       <p class="ft56" style="position:absolute;top:869px;left:521px;white-space:nowrap">
        10
       </p>
       <p class="ft56" style="position:absolute;top:869px;left:595px;white-space:nowrap">
        120
       </p>
       <p class="ft57" style="position:absolute;top:869px;left:688px;white-space:nowrap">
        ₺32,00
       </p>
       <p class="ft58" style="position:absolute;top:870px;left:804px;white-space:nowrap">
        ü
       </p>
       <p class="ft56" style="position:absolute;top:887px;left:104px;white-space:nowrap">
        9048X054
       </p>
       <p class="ft56" style="position:absolute;top:887px;left:195px;white-space:nowrap">
        Four-Way Frame
       </p>
       <p class="ft56" style="position:absolute;top:887px;left:521px;white-space:nowrap">
        10
       </p>
       <p class="ft56" style="position:absolute;top:887px;left:595px;white-space:nowrap">
        120
       </p>
       <p class="ft57" style="position:absolute;top:887px;left:688px;white-space:nowrap">
        ₺39,10
       </p>
       <p class="ft58" style="position:absolute;top:888px;left:804px;white-space:nowrap">
        Ü
       </p>
       <p class="ft56" style="position:absolute;top:904px;left:104px;white-space:nowrap">
        9048X055
       </p>
       <p class="ft56" style="position:absolute;top:904px;left:195px;white-space:nowrap">
        Five-Frame Grid
       </p>
       <p class="ft56" style="position:absolute;top:904px;left:521px;white-space:nowrap">
        10
       </p>
       <p class="ft56" style="position:absolute;top:904px;left:598px;white-space:nowrap">
        80
       </p>
       <p class="ft57" style="position:absolute;top:905px;left:688px;white-space:nowrap">
        ₺49,50
       </p>
       <p class="ft58" style="position:absolute;top:906px;left:804px;white-space:nowrap">
        ü
       </p>
       <p class="ft56" style="position:absolute;top:922px;left:104px;white-space:nowrap">
        9048X056
       </p>
       <p class="ft56" style="position:absolute;top:922px;left:195px;white-space:nowrap">
        Six-Panel Flat
       </p>
       <p class="ft56" style="position:absolute;top:922px;left:521px;white-space:nowrap">
        10
       </p>
       <p class="ft56" style="position:absolute;top:922px;left:598px;white-space:nowrap">
        60
       </p>
       <p class="ft57" style="position:absolute;top:923px;left:688px;white-space:nowrap">
        ₺57,90
       </p>
       <p class="ft58" style="position:absolute;top:923px;left:804px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft56" style="position:absolute;top:940px;left:104px;white-space:nowrap">
        9048X057
       </p>
       <p class="ft56" style="position:absolute;top:940px;left:195px;white-space:nowrap">
        Dual Socket Frame
       </p>
       <p class="ft56" style="position:absolute;top:940px;left:521px;white-space:nowrap">
        10
       </p>
       <p class="ft56" style="position:absolute;top:940px;left:595px;white-space:nowrap">
        120
       </p>
       <p class="ft57" style="position:absolute;top:941px;left:688px;white-space:nowrap">
        ₺13,40
       </p>
       <p class="ft58" style="position:absolute;top:941px;left:804px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft56" style="position:absolute;top:958px;left:104px;white-space:nowrap">
        9048X059
       </p>
       <p class="ft56" style="position:absolute;top:958px;left:195px;white-space:nowrap">
        Ceiling box extension piece
       </p>
       <p class="ft56" style="position:absolute;top:958px;left:521px;white-space:nowrap">
        12
       </p>
       <p class="ft56" style="position:absolute;top:958px;left:595px;white-space:nowrap">
        120
       </p>
       <p class="ft57" style="position:absolute;top:958px;left:688px;white-space:nowrap">
        ₺14,90
       </p>
       <p class="ft58" style="position:absolute;top:959px;left:804px;white-space:nowrap">
        ü
       </p>
       <p class="ft56" style="position:absolute;top:976px;left:104px;white-space:nowrap">
        9048X058
       </p>
       <p class="ft56" style="position:absolute;top:976px;left:195px;white-space:nowrap">
        Single wall box
       </p>
       <p class="ft56" style="position:absolute;top:976px;left:526px;white-space:nowrap">
        الرئيس[-] Translation: President
       </p>
       <p class="ft56" style="position:absolute;top:976px;left:598px;white-space:nowrap">
        32
       </p>
       <p class="ft57" style="position:absolute;top:976px;left:688px;white-space:nowrap">
        ₺18,30
       </p>
       <p class="ft58" style="position:absolute;top:977px;left:804px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft59" style="position:absolute;top:1186px;left:64px;white-space:nowrap">
        Rollina series is sold in two parts, (mechanism + button/lid) and (frame).
       </p>
       <p class="ft513" style="position:absolute;top:1196px;left:64px;white-space:nowrap">
        You can see the technical content and wiring diagrams of our products in the Technical Specifications section of our VİKO
        <br/>
        General Catalogue on our corporate website. Please call for different Energy Saver prices and
        <br/>
        special Energy Saver varieties for projects.
       </p>
       <p class="ft511" style="position:absolute;top:1167px;left:64px;white-space:nowrap">
        0=White, 1=Cream
       </p>
      </div>
     </body>
    </html>`
};

export const Secondary = Template.bind({});
Secondary.args = {};
