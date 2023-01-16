import ZekTable from "../components/table/Table.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Zekoder/Table',
    component: ZekTable,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        headerType: {
          control: 'select',
          options: ['light', 'dark'],
        },
        type: {
          control: 'multi-select' ,
          options: ['dark', 'striped', 'hover', 'bordered', 'small', 'borderless']
        }

      },
  };


  const Template = (args, { argTypes }) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ZekTable },
    props: Object.keys(argTypes),
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<zek-table v-bind="$props" @rowsSelected="logSelection($event)"></zek-table>',
    methods: {
        logSelection(sel){
            console.log(sel);
        }
    }
  });

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
    columns: [
        {
            label: 'Author',
            dataField: 'lauthor',
            component: {
                props: ['row'],
                template: "<div class='text-success'> <h1> {{row.fname}} </h1> <br> <h3> {{row.lname}} </h3> </div>",
            },
            styleObj: {
                width: '150px'
            }
        },
        {
            label: 'Date',
            dataField: 'ldate',
            styleObj: {
                width: '150px'
            }
        },
        {
            label: 'Source',
            dataField: 'lsource',
            sortable: true,
            styleObj: {
            }
        },
    ], //array of object of type {Label, dataField, styleObj}
    headerType: 'light', //light or dark,
    type: ['dark', 'hover', 'striped'], // one or multiple of: dark, hover, striped, bordered, borderless, small
    caption: 'user info table',
    data: [
    ],
    showRowIndex: true,
    allowSelection: true,
    pagination: {
        itemsPerPage: 2
    },
    styleObj: {
        "textTransform": "capitalize",
        "textAlign": "center",
        "width": "100%"
    },
    dataSource: "https://api.newspaper.cloudai.network/documents/",
    mapping: {
        lauthor: 'author',
        ldate: 'date',
        lsource: 'source'
    },
};
