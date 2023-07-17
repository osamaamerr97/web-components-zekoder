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
  initialValue: `<!DOCTYPE html>
    <html lang="" xml:lang="" xmlns="http://www.w3.org/1999/xhtml">
     <head>
      <!-- <base href="D:\Drive\translate_pdf\test-ln\src\examples\viko\" target="_blank"> -->
    
      <title>
       viko-html.html
      </title>
      <link href="https://fonts.googleapis.com/css2?family=Helvetica+Neue&amp;display=swap" rel="stylesheet"/>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
      <style type="text/css">
       <!--
        @page { size : portrait }
        @page rotated { size : landscape }
        table { page : rotated }
    
      p {margin: 0; padding: 0;}	.ft10{font-size:46px;font-family:TTMJJA+HelveticaNeueLTPro-ThCn;color:#ffffff;}
      .ft11{font-size:61px;font-family:'Helvetica Neue', Arial, sans-serif;color:#000000;}
      .ft12{font-size:40px;font-family:TTMJJA+HelveticaNeueLTStd-Cn;color:#ffffff;}
      .ft13{font-size:11px;font-family:TTMJJA+HelveticaNeue;color:#000000;}
    -->
      </style>
     </head>
     <body bgcolor="#A0A0A0" link="blue" style="margin: 0; padding:0 ;background-color: white" vlink="blue">
      <div id="page1-div" style="position:relative;width:892px;height:1262px;">
      <img alt="background image" height="1262" src="viko001.png" width="892"/>
       <p class="ft10" style="position:absolute;top:1048px;left:588px;white-space:nowrap">
        Viko 2022-3
       </p>
       <p class="ft11" style="position:absolute;top:203px;left:64px;white-space:nowrap">
        Innovative Solutions
       </p>
       <p class="ft11" style="position:absolute;top:271px;left:64px;white-space:nowrap">
        Secure Lives
       </p>
       <p class="ft12" style="position:absolute;top:1096px;left:586px;white-space:nowrap">
        Price List
       </p>
       <p class="ft13" style="position:absolute;top:1204px;left:64px;white-space:nowrap">
        ewtr.panasonic.com
       </p>
      </div>
     </body>
    </html>
    <!DOCTYPE html>
    <html lang="" xml:lang="" xmlns="http://www.w3.org/1999/xhtml">
     <head>
      <title>
       viko-html.html
      </title>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
      <style type="text/css">
       <!--
      p {margin: 0; padding: 0;}	.ft20{font-size:9px;font-family:TTMJJA+DINTr;color:#000000;-moz-transform: matrix(         0,         -1,          1,          0, 0, 0);-webkit-transform: matrix(         0,         -1,          1,          0, 0, 0);-o-transform: matrix(         0,         -1,          1,          0, 0, 0);-ms-transform: matrix(         0,         -1,          1,          0, 0, 0);-moz-transform-origin: left 75%;-webkit-transform-origin: left 75%;-o-transform-origin: left 75%;-ms-transform-origin: left 75%;}
      .ft21{font-size:14px;font-family:TTMJJA+DINAlternate;color:#000000;}
      .ft22{font-size:11px;font-family:TTMJJA+DINTr;color:#000000;}
      .ft23{font-size:13px;font-family:TTMJJA+Helvetica;color:#000000;}
      .ft24{font-size:14px;line-height:28px;font-family:TTMJJA+DINAlternate;color:#000000;}
    -->
      </style>
     </head>
     <body bgcolor="#A0A0A0" link="blue" style="margin: 0; padding:0 ;background-color: white" vlink="blue">
      <div id="page2-div" style="position:relative;width:892px;height:1262px;">
       <img alt="background image" height="1262" src="viko002.png" width="892"/>
       <p class="ft20" style="position:absolute;top:1206px;left:829px;white-space:nowrap">
        10/2022
       </p>
       <p class="ft24" style="position:absolute;top:1155px;left:48px;white-space:nowrap">
        Panasonic Electric Works Elektrik San. ve Tic. A.Ş.,
        <br/>
        Abdurrahmangazi Mah., Ebubekir Cad. No. 44, 34887 Sancaktepe, Istanbul, Turkey, F: +90 (216) 564 55 44.
        <br/>
       </p>
       <p class="ft21" style="position:absolute;top:1198px;left:69px;white-space:nowrap">
        444 8 456 ewtr.panasonic.com info@tr.panasonic.com
       </p>
      </div>
     </body>
    </html>
    <!DOCTYPE html>
    <html lang="" xml:lang="" xmlns="http://www.w3.org/1999/xhtml">
     <head>
      <title>
       viko-html.html
      </title>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
      <style type="text/css">
       <!--
      p {margin: 0; padding: 0;}	.ft30{font-size:10px;font-family:TTMJJA+Helvetica-NormalTr;color:#f89728;}
      .ft31{font-size:12px;font-family:TTMJJA+HelveticaNeue;color:#000000;}
    -->
      </style>
     </head>
     <body bgcolor="#A0A0A0" link="blue" style="margin: 0; padding:0 ;background-color: white" vlink="blue">
      <div id="page3-div" style="position:relative;width:892px;height:1262px;">
       <img alt="background image" height="1262" src="viko003.png" width="892"/>
       <p class="ft30" style="position:absolute;top:1233px;left:840px;white-space:nowrap">
        3
       </p>
       <p class="ft31" style="position:absolute;top:1171px;left:64px;white-space:nowrap">
        Prices are in TL, excluding VAT, and are valid as of 10.10.2022. Delivery date to be invoiced.
       </p>
       <p class="ft31" style="position:absolute;top:1187px;left:64px;white-space:nowrap">
        Prices listed are valid. Panasonic Electric Works Turkey reserves the right to make changes to prices without prior notice.
       </p>
       <p class="ft31" style="position:absolute;top:1203px;left:64px;white-space:nowrap">
        Panasonic Electric Works Turkey not responsible for any typographical or printing errors in prices and images.
       </p>
      </div>
     </body>
    </html>
    <!DOCTYPE html>
    <html lang="" xml:lang="" xmlns="http://www.w3.org/1999/xhtml">
     <head>
      <title>
       viko-html.html
      </title>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
      <style type="text/css">
       <!--
      p {margin: 0; padding: 0;}	.ft40{font-size:10px;font-family:TTMJJA+Helvetica-NormalTr;color:#f89728;}
      .ft41{font-size:30px;font-family:TTMJJA+HelveticaTr;color:#f89728;}
      .ft42{font-size:18px;font-family:TTMJJA+Helvetica-NormalTr;color:#ffffff;}
      .ft43{font-size:15px;font-family:TTMJJA+Helvetica-NormalTr;color:#ffffff;}
      .ft44{font-size:13px;font-family:TTMJJA+Helvetica-NormalTr;color:#000000;}
      .ft45{font-size:12px;font-family:TTMJJA+HelveticaTr;color:#ffffff;}
      .ft46{font-size:10px;font-family:TTMJJA+Helvetica-LightNormalTr;color:#000000;}
      .ft47{font-size:10px;font-family:TTMJJA+HelveticaNeue-Light;color:#000000;}
      .ft48{font-size:10px;font-family:TTMJJA+Wingdings;color:#2f8540;}
      .ft49{font-size:9px;font-family:TTMJJA+Helvetica-LightNormalTr;color:#000000;}
      .ft410{font-size:8px;font-family:TTMJJA+HelveticaTr;color:#000000;}
      .ft411{font-size:8px;font-family:TTMJJA+Helvetica-LightNormalTr;color:#000000;}
    -->
      </style>
     </head>
     <body bgcolor="#A0A0A0" link="blue" style="margin: 0; padding:0 ;background-color: white" vlink="blue">
      <div id="page4-div" style="position:relative;width:892px;height:1262px;">
       <img alt="background image" height="1262" src="viko004.png" width="892"/>
       <p class="ft40" style="position:absolute;top:1233px;left:47px;white-space:nowrap">
        4
       </p>
       <p class="ft41" style="position:absolute;top:40px;left:47px;white-space:nowrap">
        Rollina
       </p>
       <p class="ft42" style="position:absolute;top:125px;left:51px;white-space:nowrap">
        Rollina Six Keys and Sockets Series (White - Cream)
       </p>
       <p class="ft44" style="position:absolute;top:162px;left:88px;white-space:nowrap">
        Reference Number
       </p>
       <p class="ft44" style="position:absolute;top:162px;left:297px;white-space:nowrap">
        Product Name
       </p>
       <p class="ft44" style="position:absolute;top:155px;left:484px;white-space:nowrap">
        In the box
       </p>
       <p class="ft44" style="position:absolute;top:169px;left:496px;white-space:nowrap">
        Number
       </p>
       <p class="ft44" style="position:absolute;top:155px;left:563px;white-space:nowrap">
        Forty-six
       </p>
       <p class="ft44" style="position:absolute;top:169px;left:573px;white-space:nowrap">
        Quantity
       </p>
       <p class="ft44" style="position:absolute;top:156px;left:650px;white-space:nowrap">
        Mechanism+
       </p>
       <p class="ft44" style="position:absolute;top:168px;left:646px;white-space:nowrap">
        Valve/Lid
       </p>
       <p class="ft45" style="position:absolute;top:193px;left:51px;white-space:nowrap">
        Keys
       </p>
       <p class="ft46" style="position:absolute;top:215px;left:87px;white-space:nowrap">
        9044X001
       </p>
       <p class="ft46" style="position:absolute;top:215px;left:178px;white-space:nowrap">
        Key
       </p>
       <p class="ft46" style="position:absolute;top:215px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:215px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:215px;left:671px;white-space:nowrap">
        ₺34,80
       </p>
       <p class="ft48" style="position:absolute;top:216px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:233px;left:87px;white-space:nowrap">
        9044X019
       </p>
       <p class="ft46" style="position:absolute;top:233px;left:178px;white-space:nowrap">
        Light Switch
       </p>
       <p class="ft46" style="position:absolute;top:233px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:233px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:233px;left:671px;white-space:nowrap">
        ₺54,90
       </p>
       <p class="ft48" style="position:absolute;top:234px;left:787px;white-space:nowrap">
        ü
       </p>
       <p class="ft46" style="position:absolute;top:250px;left:87px;white-space:nowrap">
        9044X044
       </p>
       <p class="ft46" style="position:absolute;top:250px;left:178px;white-space:nowrap">
        Dual Key
       </p>
       <p class="ft46" style="position:absolute;top:250px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:250px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:251px;left:671px;white-space:nowrap">
        ₺69,10
       </p>
       <p class="ft48" style="position:absolute;top:252px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:268px;left:87px;white-space:nowrap">
        9044X083
       </p>
       <p class="ft46" style="position:absolute;top:268px;left:178px;white-space:nowrap">
        Impulse Computer
       </p>
       <p class="ft46" style="position:absolute;top:268px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:268px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:269px;left:671px;white-space:nowrap">
        ₺69,10
       </p>
       <p class="ft48" style="position:absolute;top:269px;left:787px;white-space:nowrap">
        üü
       </p>
       <p class="ft46" style="position:absolute;top:286px;left:87px;white-space:nowrap">
        9044X088
       </p>
       <p class="ft46" style="position:absolute;top:286px;left:178px;white-space:nowrap">
        DND/MUR Controller
       </p>
       <p class="ft46" style="position:absolute;top:286px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:286px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:287px;left:671px;white-space:nowrap">
        ₺69,10
       </p>
       <p class="ft48" style="position:absolute;top:287px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:304px;left:87px;white-space:nowrap">
        9044X002
       </p>
       <p class="ft46" style="position:absolute;top:304px;left:178px;white-space:nowrap">
        Computer.
       </p>
       <p class="ft46" style="position:absolute;top:304px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:304px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:304px;left:671px;white-space:nowrap">
        ₺44,50
       </p>
       <p class="ft48" style="position:absolute;top:305px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:322px;left:87px;white-space:nowrap">
        9044X050
       </p>
       <p class="ft46" style="position:absolute;top:322px;left:178px;white-space:nowrap">
        Literal Commutator
       </p>
       <p class="ft46" style="position:absolute;top:322px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:322px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:322px;left:671px;white-space:nowrap">
        ₺61,50
       </p>
       <p class="ft48" style="position:absolute;top:323px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:339px;left:87px;white-space:nowrap">
        9044X068
       </p>
       <p class="ft46" style="position:absolute;top:339px;left:178px;white-space:nowrap">
        Three Key
       </p>
       <p class="ft46" style="position:absolute;top:339px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:339px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:340px;left:671px;white-space:nowrap">
        ₺51,60
       </p>
       <p class="ft48" style="position:absolute;top:341px;left:787px;white-space:nowrap">
        Ü
       </p>
       <p class="ft46" style="position:absolute;top:357px;left:87px;white-space:nowrap">
        9044X003
       </p>
       <p class="ft46" style="position:absolute;top:357px;left:178px;white-space:nowrap">
        Light Key
       </p>
       <p class="ft46" style="position:absolute;top:357px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:357px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:358px;left:671px;white-space:nowrap">
        ₺36,30
       </p>
       <p class="ft48" style="position:absolute;top:358px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:375px;left:87px;white-space:nowrap">
        9044X014
       </p>
       <p class="ft46" style="position:absolute;top:375px;left:178px;white-space:nowrap">
        Lit Key Switch
       </p>
       <p class="ft46" style="position:absolute;top:375px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:375px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:376px;left:671px;white-space:nowrap">
        ₺54,90
       </p>
       <p class="ft48" style="position:absolute;top:376px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:393px;left:87px;white-space:nowrap">
        9044X018
       </p>
       <p class="ft46" style="position:absolute;top:393px;left:178px;white-space:nowrap">
        Emergency Pull Alarm Button
       </p>
       <p class="ft46" style="position:absolute;top:393px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:393px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:393px;left:671px;white-space:nowrap">
        ₺57,90
       </p>
       <p class="ft48" style="position:absolute;top:394px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:411px;left:87px;white-space:nowrap">
        9044X004
       </p>
       <p class="ft46" style="position:absolute;top:411px;left:178px;white-space:nowrap">
        Vavien
       </p>
       <p class="ft46" style="position:absolute;top:411px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:411px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:411px;left:671px;white-space:nowrap">
        ₺44,30
       </p>
       <p class="ft48" style="position:absolute;top:412px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:428px;left:87px;white-space:nowrap">
        9044X063
       </p>
       <p class="ft46" style="position:absolute;top:428px;left:178px;white-space:nowrap">
        Lit Fountain
       </p>
       <p class="ft46" style="position:absolute;top:428px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:428px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:429px;left:671px;white-space:nowrap">
        ₺61,50
       </p>
       <p class="ft48" style="position:absolute;top:430px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:446px;left:87px;white-space:nowrap">
        9044X017
       </p>
       <p class="ft46" style="position:absolute;top:446px;left:178px;white-space:nowrap">
        Computer Operator
       </p>
       <p class="ft46" style="position:absolute;top:446px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:446px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:447px;left:671px;white-space:nowrap">
        ₺61,50
       </p>
       <p class="ft48" style="position:absolute;top:447px;left:787px;white-space:nowrap">
        ü
       </p>
       <p class="ft46" style="position:absolute;top:464px;left:87px;white-space:nowrap">
        9044X031
       </p>
       <p class="ft46" style="position:absolute;top:464px;left:178px;white-space:nowrap">
        Intermediary (Middleman)
       </p>
       <p class="ft46" style="position:absolute;top:464px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:464px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:465px;left:671px;white-space:nowrap">
        ₺61,50
       </p>
       <p class="ft48" style="position:absolute;top:465px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:482px;left:87px;white-space:nowrap">
        9044X039
       </p>
       <p class="ft46" style="position:absolute;top:482px;left:178px;white-space:nowrap">
        Two-way switch
       </p>
       <p class="ft46" style="position:absolute;top:482px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:482px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:482px;left:671px;white-space:nowrap">
        ₺69,10
       </p>
       <p class="ft48" style="position:absolute;top:483px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:500px;left:87px;white-space:nowrap">
        9044X038
       </p>
       <p class="ft46" style="position:absolute;top:500px;left:178px;white-space:nowrap">
        Literal two-way switch.
       </p>
       <p class="ft46" style="position:absolute;top:500px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:500px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:500px;left:671px;white-space:nowrap">
        ₺96,30
       </p>
       <p class="ft48" style="position:absolute;top:501px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:518px;left:87px;white-space:nowrap">
        9044X016
       </p>
       <p class="ft46" style="position:absolute;top:518px;left:178px;white-space:nowrap">
        Blind Remote Key
       </p>
       <p class="ft46" style="position:absolute;top:518px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:518px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:518px;left:671px;white-space:nowrap">
        ₺74,30
       </p>
       <p class="ft48" style="position:absolute;top:519px;left:787px;white-space:nowrap">
        Ü
       </p>
       <p class="ft46" style="position:absolute;top:535px;left:87px;white-space:nowrap">
        9044X072
       </p>
       <p class="ft46" style="position:absolute;top:535px;left:178px;white-space:nowrap">
        Number Data Phone Socket (RJ45 CAT5E - RJ11)
       </p>
       <p class="ft46" style="position:absolute;top:535px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:535px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:536px;left:668px;white-space:nowrap">
        ₺138,00
       </p>
       <p class="ft48" style="position:absolute;top:536px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:553px;left:87px;white-space:nowrap">
        9044X098
       </p>
       <p class="ft46" style="position:absolute;top:553px;left:178px;white-space:nowrap">
        Cooler Key
       </p>
       <p class="ft46" style="position:absolute;top:553px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:553px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:554px;left:671px;white-space:nowrap">
        ₺69,10
       </p>
       <p class="ft48" style="position:absolute;top:554px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:571px;left:87px;white-space:nowrap">
        9044X005
       </p>
       <p class="ft46" style="position:absolute;top:571px;left:178px;white-space:nowrap">
        Door Automatic Key
       </p>
       <p class="ft46" style="position:absolute;top:571px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:571px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:571px;left:671px;white-space:nowrap">
        ₺36,30
       </p>
       <p class="ft48" style="position:absolute;top:572px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:589px;left:87px;white-space:nowrap">
        9044X006
       </p>
       <p class="ft46" style="position:absolute;top:589px;left:178px;white-space:nowrap">
        Key Ring
       </p>
       <p class="ft46" style="position:absolute;top:589px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:589px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:589px;left:671px;white-space:nowrap">
        ₺36,30
       </p>
       <p class="ft48" style="position:absolute;top:590px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:607px;left:87px;white-space:nowrap">
        9044X027
       </p>
       <p class="ft46" style="position:absolute;top:607px;left:178px;white-space:nowrap">
        Lit-up bell key.
       </p>
       <p class="ft46" style="position:absolute;top:607px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:607px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:607px;left:671px;white-space:nowrap">
        ₺62,80
       </p>
       <p class="ft48" style="position:absolute;top:608px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:624px;left:87px;white-space:nowrap">
        9044X077
       </p>
       <p class="ft46" style="position:absolute;top:624px;left:178px;white-space:nowrap">
        Cable Outlet
       </p>
       <p class="ft46" style="position:absolute;top:624px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:624px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:625px;left:671px;white-space:nowrap">
        ₺31,00
       </p>
       <p class="ft48" style="position:absolute;top:625px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:642px;left:87px;white-space:nowrap">
        9044X090
       </p>
       <p class="ft46" style="position:absolute;top:642px;left:178px;white-space:nowrap">
        Space Cover
       </p>
       <p class="ft46" style="position:absolute;top:642px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:642px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:643px;left:671px;white-space:nowrap">
        ₺29,40
       </p>
       <p class="ft48" style="position:absolute;top:643px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:660px;left:87px;white-space:nowrap">
        90480020
       </p>
       <p class="ft46" style="position:absolute;top:660px;left:178px;white-space:nowrap">
        IP44 Key Socket Set
       </p>
       <p class="ft46" style="position:absolute;top:660px;left:504px;white-space:nowrap">
        10
       </p>
       <p class="ft46" style="position:absolute;top:660px;left:578px;white-space:nowrap">
        100
       </p>
       <p class="ft47" style="position:absolute;top:660px;left:671px;white-space:nowrap">
        ₺17,30
       </p>
       <p class="ft48" style="position:absolute;top:661px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:678px;left:87px;white-space:nowrap">
        90480021
       </p>
       <p class="ft46" style="position:absolute;top:678px;left:178px;white-space:nowrap">
        IP44 Commutator Kit
       </p>
       <p class="ft46" style="position:absolute;top:678px;left:504px;white-space:nowrap">
        10
       </p>
       <p class="ft46" style="position:absolute;top:678px;left:578px;white-space:nowrap">
        100
       </p>
       <p class="ft47" style="position:absolute;top:678px;left:671px;white-space:nowrap">
        ₺18,30
       </p>
       <p class="ft48" style="position:absolute;top:679px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft45" style="position:absolute;top:699px;left:51px;white-space:nowrap">
        Prizes
       </p>
       <p class="ft46" style="position:absolute;top:721px;left:87px;white-space:nowrap">
        9044X008
       </p>
       <p class="ft46" style="position:absolute;top:721px;left:178px;white-space:nowrap">
        Grounded Plug
       </p>
       <p class="ft46" style="position:absolute;top:721px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:721px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:722px;left:671px;white-space:nowrap">
        ₺44,50
       </p>
       <p class="ft48" style="position:absolute;top:722px;left:787px;white-space:nowrap">
        Ü
       </p>
       <p class="ft46" style="position:absolute;top:739px;left:87px;white-space:nowrap">
        9044X042
       </p>
       <p class="ft46" style="position:absolute;top:739px;left:178px;white-space:nowrap">
        Grounded Plug C.K.
       </p>
       <p class="ft46" style="position:absolute;top:739px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:739px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:739px;left:671px;white-space:nowrap">
        ₺58,50
       </p>
       <p class="ft48" style="position:absolute;top:740px;left:787px;white-space:nowrap">
        Translation: ü
       </p>
       <p class="ft46" style="position:absolute;top:757px;left:87px;white-space:nowrap">
        9044X012
       </p>
       <p class="ft46" style="position:absolute;top:757px;left:178px;white-space:nowrap">
        Socket with Cover Grounded
       </p>
       <p class="ft46" style="position:absolute;top:757px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:757px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:757px;left:671px;white-space:nowrap">
        ₺64,70
       </p>
       <p class="ft48" style="position:absolute;top:758px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:775px;left:87px;white-space:nowrap">
        9044X045
       </p>
       <p class="ft46" style="position:absolute;top:775px;left:178px;white-space:nowrap">
        UPS Ground Outlet.
       </p>
       <p class="ft46" style="position:absolute;top:775px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:775px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:775px;left:671px;white-space:nowrap">
        ₺62,00
       </p>
       <p class="ft48" style="position:absolute;top:776px;left:787px;white-space:nowrap">
        ü
       </p>
       <p class="ft46" style="position:absolute;top:792px;left:87px;white-space:nowrap">
        9044X070
       </p>
       <p class="ft46" style="position:absolute;top:792px;left:178px;white-space:nowrap">
        Grounded Plug Outlet Cover.
       </p>
       <p class="ft46" style="position:absolute;top:792px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:792px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:793px;left:671px;white-space:nowrap">
        ₺81,90
       </p>
       <p class="ft48" style="position:absolute;top:793px;left:787px;white-space:nowrap">
        ü
       </p>
       <p class="ft46" style="position:absolute;top:810px;left:87px;white-space:nowrap">
        9044X056
       </p>
       <p class="ft46" style="position:absolute;top:810px;left:178px;white-space:nowrap">
        Double-grounded outlet
       </p>
       <p class="ft46" style="position:absolute;top:810px;left:504px;white-space:nowrap">
        10
       </p>
       <p class="ft46" style="position:absolute;top:810px;left:581px;white-space:nowrap">
        60
       </p>
       <p class="ft47" style="position:absolute;top:811px;left:671px;white-space:nowrap">
        ₺52,50
       </p>
       <p class="ft48" style="position:absolute;top:811px;left:787px;white-space:nowrap">
        Ü
       </p>
       <p class="ft46" style="position:absolute;top:828px;left:87px;white-space:nowrap">
        9042X056
       </p>
       <p class="ft46" style="position:absolute;top:828px;left:178px;white-space:nowrap">
        Double-Earth Socket Set
       </p>
       <p class="ft46" style="position:absolute;top:828px;left:504px;white-space:nowrap">
        10
       </p>
       <p class="ft46" style="position:absolute;top:828px;left:581px;white-space:nowrap">
        60
       </p>
       <p class="ft47" style="position:absolute;top:828px;left:671px;white-space:nowrap">
        ₺65,90
       </p>
       <p class="ft48" style="position:absolute;top:829px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:846px;left:87px;white-space:nowrap">
        9044X058
       </p>
       <p class="ft46" style="position:absolute;top:846px;left:178px;white-space:nowrap">
        Dual Grounded Outlet Socket
       </p>
       <p class="ft46" style="position:absolute;top:846px;left:504px;white-space:nowrap">
        10
       </p>
       <p class="ft46" style="position:absolute;top:846px;left:581px;white-space:nowrap">
        60
       </p>
       <p class="ft47" style="position:absolute;top:846px;left:671px;white-space:nowrap">
        ₺72,70
       </p>
       <p class="ft48" style="position:absolute;top:847px;left:787px;white-space:nowrap">
        ü
       </p>
       <p class="ft46" style="position:absolute;top:864px;left:87px;white-space:nowrap">
        9042X058
       </p>
       <p class="ft46" style="position:absolute;top:864px;left:178px;white-space:nowrap">
        Double-Grounded Outlet Assembly
       </p>
       <p class="ft46" style="position:absolute;top:864px;left:504px;white-space:nowrap">
        10
       </p>
       <p class="ft46" style="position:absolute;top:864px;left:581px;white-space:nowrap">
        60
       </p>
       <p class="ft47" style="position:absolute;top:864px;left:671px;white-space:nowrap">
        ₺86,10
       </p>
       <p class="ft48" style="position:absolute;top:865px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:881px;left:87px;white-space:nowrap">
        9044X057
       </p>
       <p class="ft46" style="position:absolute;top:881px;left:178px;white-space:nowrap">
        Dual UPS Grounded Outlet.
       </p>
       <p class="ft46" style="position:absolute;top:881px;left:504px;white-space:nowrap">
        10
       </p>
       <p class="ft46" style="position:absolute;top:881px;left:581px;white-space:nowrap">
        60
       </p>
       <p class="ft47" style="position:absolute;top:882px;left:671px;white-space:nowrap">
        ₺74,30
       </p>
       <p class="ft48" style="position:absolute;top:882px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:899px;left:87px;white-space:nowrap">
        90480022
       </p>
       <p class="ft46" style="position:absolute;top:899px;left:178px;white-space:nowrap">
        IP44 Socket Set
       </p>
       <p class="ft46" style="position:absolute;top:899px;left:504px;white-space:nowrap">
        10
       </p>
       <p class="ft46" style="position:absolute;top:899px;left:578px;white-space:nowrap">
        100
       </p>
       <p class="ft47" style="position:absolute;top:900px;left:671px;white-space:nowrap">
        ₺13,60
       </p>
       <p class="ft48" style="position:absolute;top:900px;left:787px;white-space:nowrap">
        Ü
       </p>
       <p class="ft45" style="position:absolute;top:920px;left:51px;white-space:nowrap">
        TV Satellite sockets
       </p>
       <p class="ft46" style="position:absolute;top:943px;left:79px;white-space:nowrap">
        9044X059-60
       </p>
       <p class="ft46" style="position:absolute;top:943px;left:178px;white-space:nowrap">
        TV Pass-Through (8-12dB)
       </p>
       <p class="ft46" style="position:absolute;top:943px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:943px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:943px;left:671px;white-space:nowrap">
        ₺67,40
       </p>
       <p class="ft48" style="position:absolute;top:944px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:960px;left:87px;white-space:nowrap">
        9044X010
       </p>
       <p class="ft46" style="position:absolute;top:960px;left:178px;white-space:nowrap">
        TV Prize Winner
       </p>
       <p class="ft46" style="position:absolute;top:960px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:960px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:961px;left:671px;white-space:nowrap">
        ₺67,40
       </p>
       <p class="ft48" style="position:absolute;top:961px;left:787px;white-space:nowrap">
        ü
       </p>
       <p class="ft46" style="position:absolute;top:978px;left:87px;white-space:nowrap">
        9044X049
       </p>
       <p class="ft46" style="position:absolute;top:978px;left:178px;white-space:nowrap">
        TV resistanceless
       </p>
       <p class="ft46" style="position:absolute;top:978px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:978px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:979px;left:671px;white-space:nowrap">
        ₺67,40
       </p>
       <p class="ft48" style="position:absolute;top:979px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:996px;left:79px;white-space:nowrap">
        9044X022-24
       </p>
       <p class="ft46" style="position:absolute;top:996px;left:178px;white-space:nowrap">
        TV-Radio Switchable 7-12dB
       </p>
       <p class="ft46" style="position:absolute;top:996px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:996px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:996px;left:668px;white-space:nowrap">
        ₺253,00
       </p>
       <p class="ft48" style="position:absolute;top:997px;left:787px;white-space:nowrap">
        Ü
       </p>
       <p class="ft46" style="position:absolute;top:1014px;left:87px;white-space:nowrap">
        9044X021
       </p>
       <p class="ft46" style="position:absolute;top:1014px;left:178px;white-space:nowrap">
        TV-Radio Prize-Winning
       </p>
       <p class="ft46" style="position:absolute;top:1014px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:1014px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:1014px;left:668px;white-space:nowrap">
        ₺253,00
       </p>
       <p class="ft48" style="position:absolute;top:1015px;left:787px;white-space:nowrap">
        ü
       </p>
       <p class="ft46" style="position:absolute;top:1032px;left:87px;white-space:nowrap">
        9044X041
       </p>
       <p class="ft46" style="position:absolute;top:1032px;left:178px;white-space:nowrap">
        Satellite Dish Terminal
       </p>
       <p class="ft46" style="position:absolute;top:1032px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:1032px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:1032px;left:668px;white-space:nowrap">
        ₺309,00
       </p>
       <p class="ft48" style="position:absolute;top:1033px;left:787px;white-space:nowrap">
        ü
       </p>
       <p class="ft46" style="position:absolute;top:1049px;left:87px;white-space:nowrap">
        9044X052
       </p>
       <p class="ft46" style="position:absolute;top:1049px;left:178px;white-space:nowrap">
        Satellite Dish Transition (13dB)
       </p>
       <p class="ft46" style="position:absolute;top:1049px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:1049px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:1050px;left:668px;white-space:nowrap">
        ₺354,00
       </p>
       <p class="ft48" style="position:absolute;top:1050px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:1067px;left:87px;white-space:nowrap">
        9044X053
       </p>
       <p class="ft46" style="position:absolute;top:1067px;left:178px;white-space:nowrap">
        Two Satellite Outlets (SAT-SAT-TV-RAD)
       </p>
       <p class="ft46" style="position:absolute;top:1067px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:1067px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:1068px;left:668px;white-space:nowrap">
        ₺309,00
       </p>
       <p class="ft48" style="position:absolute;top:1068px;left:787px;white-space:nowrap">
        ü
       </p>
       <p class="ft46" style="position:absolute;top:1085px;left:87px;white-space:nowrap">
        9044X085
       </p>
       <p class="ft46" style="position:absolute;top:1085px;left:178px;white-space:nowrap">
        TV-SAT Wall Outlet
       </p>
       <p class="ft46" style="position:absolute;top:1085px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:1085px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:1085px;left:668px;white-space:nowrap">
        ₺234,00
       </p>
       <p class="ft48" style="position:absolute;top:1086px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft46" style="position:absolute;top:1103px;left:79px;white-space:nowrap">
        9044X086-87
       </p>
       <p class="ft46" style="position:absolute;top:1103px;left:178px;white-space:nowrap">
        Satellite socket transition 8-11dB
       </p>
       <p class="ft46" style="position:absolute;top:1103px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:1103px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:1103px;left:668px;white-space:nowrap">
        ₺253,00
       </p>
       <p class="ft48" style="position:absolute;top:1104px;left:787px;white-space:nowrap">
        ü
       </p>
       <p class="ft46" style="position:absolute;top:1121px;left:87px;white-space:nowrap">
        9044X096
       </p>
       <p class="ft46" style="position:absolute;top:1121px;left:178px;white-space:nowrap">
        Satellite Receptor F Connected
       </p>
       <p class="ft46" style="position:absolute;top:1121px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:1121px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:1121px;left:671px;white-space:nowrap">
        ₺89,00
       </p>
       <p class="ft48" style="position:absolute;top:1122px;left:787px;white-space:nowrap">
        ü
       </p>
       <p class="ft46" style="position:absolute;top:1138px;left:87px;white-space:nowrap">
        9044X097
       </p>
       <p class="ft46" style="position:absolute;top:1138px;left:178px;white-space:nowrap">
        Connector-equipped Satellite Receiver (10dB)
       </p>
       <p class="ft46" style="position:absolute;top:1138px;left:504px;white-space:nowrap">
        12
       </p>
       <p class="ft46" style="position:absolute;top:1138px;left:578px;white-space:nowrap">
        120
       </p>
       <p class="ft47" style="position:absolute;top:1139px;left:671px;white-space:nowrap">
        ₺89,00
       </p>
       <p class="ft48" style="position:absolute;top:1139px;left:787px;white-space:nowrap">
        Translation: 252
       </p>
       <p class="ft49" style="position:absolute;top:1196px;left:47px;white-space:nowrap">
        Rollina series is sold in two parts, mechanism + button/lid and frame.
       </p>
       <p class="ft49" style="position:absolute;top:1207px;left:47px;white-space:nowrap">
        You can see technical content and connection diagrams related to our products in Technical Specifications section of VİKO General Catalogue published on our corporate website.
       </p>
       <p class="ft410" style="position:absolute;top:1208px;left:718px;white-space:nowrap">
        Opposite of multiplication.
       </p>
       <p class="ft410" style="position:absolute;top:1167px;left:47px;white-space:nowrap">
        0= White, 1= Cream
       </p>
      </div>
     </body>
    </html>
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
