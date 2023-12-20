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
//   toolbar: "",
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
