<template>
    <div class="column-content-wrapper">
        <div v-if="column && column.rows && column.rows.length" class="">
            <div v-for="(row, i) in column.rows" :key="'row' + i" class="row" :id="row.id" :class="row.class">
                <div
                    v-for="(col, j) in row.columns"
                    :key="'col' + j"
                    :class="(col.columnWidth ? 'col-' + col.columnWidth : 'col') + ' ' + (col.class || '')"
                    :id="col.id"
                >
                    <zek-column-content :column="col" :map="col.map"></zek-column-content>
                </div>
            </div>
        </div>
        <zek-button
            @click="stopPropagation($event)"
            v-else-if="column && column.content && column.content.component == 'button'"
            v-bind="column.content.data"
            v-on="column.content.events"
        ></zek-button>
        <zek-heading
            v-else-if="column && column.content && column.content.component == 'heading'"
            v-bind="column.content.data"
            v-on="column.content.events"
        ></zek-heading>
        <zek-html
            v-else-if="column && column.content && column.content.component == 'html'"
            v-bind="column.content.data"
            v-on="column.content.events"
        ></zek-html>
        <zek-image
            v-else-if="column && column.content && column.content.component == 'image'"
            v-bind="column.content.data"
            v-on="column.content.events"
        ></zek-image>
        <i
            v-else-if="column && column.content && column.content.component == 'icon'"
            class="card-icon"
            :class="column.content.icon"
        ></i>
        <zek-list
            v-else-if="column && column.content && column.content.component == 'list'"
            v-bind="column.content.data"
            v-on="column.content.events"
        ></zek-list>
        <zek-text
            v-else-if="column && column.content && column.content.component == 'text'"
            class="card-text"
            :map="apiData ? apiData[column.content.map] : ''"
            v-bind="column.content.data"
            v-on="column.content.events"
        ></zek-text>
        <zek-initials
            v-else-if="column && column.content && column.content.component == 'initials'"
            class="card-initials"
            v-bind="column.content.data"
        ></zek-initials>
        <client-only v-else-if="column && column.content && column.content.component == 'video'">
            <zek-video v-bind="column.content.data" v-on="column.content.events"></zek-video>
        </client-only>
        <zek-radio-button
            @click="stopPropagation($event)"
            v-else-if="column && column.content && column.content.component == 'radio-button'"
            v-bind="column.content.data"
            v-on="column.content.events"
        ></zek-radio-button>
        <zek-dropdown
            @click="stopPropagation($event)"
            v-else-if="column && column.content && column.content.component == 'dropdown'"
            v-bind="column.content.data"
            v-on="column.content.events"
        ></zek-dropdown>
        <zek-countries-list
            @click="stopPropagation($event)"
            v-else-if="column && column.content && column.content.component == 'countries-list'"
            v-bind="column.content.data"
            v-on="column.content.events"
        ></zek-countries-list>
        <zek-input
            @click="stopPropagation($event)"
            v-else-if="column && column.content && column.content.component == 'input'"
            v-bind="column.content.data"
            v-on="column.content.events"
        ></zek-input>
        <zek-textarea
            @click="stopPropagation($event)"
            v-else-if="column && column.content && column.content.component == 'textarea'"
            v-bind="column.content.data"
            v-on="column.content.events"
        ></zek-textarea>
        <zek-card
            v-else-if="column && column.content && column.content.component == 'card'"
            v-bind="column.content.data"
            v-on="column.content.events"
        ></zek-card>
        <zek-collapsible-container
            v-else-if="column && column.content && column.content.component == 'collapsible-container'"
            v-bind="column.content.data"
            v-on="column.content.events"
        ></zek-collapsible-container>
        <zek-table
            v-else-if="column && column.content && column.content.component == 'table'"
            v-bind="column.content.data"
            v-on="column.content.events"
        ></zek-table>
        <zek-file-upload
            v-else-if="column && column.content && column.content.component == 'file-upload'"
            v-bind="column.content.data"
            v-on="column.content.events"
        ></zek-file-upload>
        <zek-toggle-button
            v-else-if="column && column.content && column.content.component == 'toggle-button'"
            v-bind="column.content.data"
            v-on="column.content.events"
        ></zek-toggle-button>
        <component
            v-else-if="column && column.content && column.content.type == 'custom'"
            :is="column.content.component"
            v-bind="column.content.data"
            v-on="column.content.events"
        ></component>
        <div
            v-else-if="column && column.content && column.content.component == 'captcha'"
            v-bind="column.content.data"
            v-on="column.content.events"
        >
            <vue-recaptcha
                ref="recaptcha"
                @verify="column.content.events.onVerify"
                @expired="column.content.events.onExpired"
                :loadRecaptchaScript="true"
                :sitekey="column.content.data.siteKey"
            ></vue-recaptcha>
        </div>
    </div>
</template>

<script>
import ZekButton from "../action-button/ActionButton.vue";
import ZekInitials from "../initials/Initials.vue";
import ZekHeading from "../heading-block/HeadingBlock.vue";
import ZekHtml from "../html-block/HtmlBlock.vue";
import ZekImage from "../image/Image.vue";
import ZekList from "../lists-block/ListsBlock.vue";
import ZekText from "../text-block/TextBlock.vue";
import ZekVideo from "../video/Video.vue";
import ZekRadioButton from "../radio-button/RadioButton.vue";
import ZekDropdown from "../dropdown/Dropdown.vue";
import ZekInput from "../input-field/InputField.vue";
import ZekTextarea from "../textarea/Textarea.vue";
import ZekCard from "../card/Card.vue";
import ZekCollapsibleContainer from "../collapsible-container/CollapsibleContainer.vue";
import ZekTable from "../table/Table.vue";
import ZekToggleButton from "../toggle-button/ToggleButton.vue";
import VueRecaptcha from "../../../node_modules/vue-recaptcha/dist/vue-recaptcha.es";
import ZekCountriesList from "../countries-list/CountriesList.vue";
import ZekFileUpload from "../file-upload/FileUpload.vue";
import axios from "axios";
export default {
    components: {
        ZekButton,
        ZekHeading,
        ZekHtml,
        ZekImage,
        ZekList,
        ZekText,
        ZekInitials,
        ZekVideo,
        ZekRadioButton,
        ZekDropdown,
        ZekInput,
        ZekTextarea,
        ZekCard,
        ZekCollapsibleContainer,
        ZekTable,
        ZekToggleButton,
        ZekCountriesList,
        VueRecaptcha,
        ZekFileUpload
    },
    name: "ZekColumnContent",
    props: {
        column: Object, //column can have rows or a component. Each row must have columns, columns can have more rows. Component can only be inside a column
        map: Object
    },
    // data() {
    //     return {
    //         apiData: this.map ?? undefined
    //     };
    // },
    computed: {
        apiData: {
            get() {
                return this.map;
            },
            set(value) {
                return value;
            }
        },
        isColumn() {
            return this.column && this.column.content ? true : false;
        },
        isRow() {
            return this.column && this.column.rows ? true : false;
        }
    },
    created() {
        if (this.column.rows) {
            this.processDataSourceForRow(this.column);
        } else if (this.column.dataSource) {
            this.processDataSourceForColumn(this.column);
        } else if (this.column.map) {
            this.processMap(this.column);
        }
    },
    watch: {
        map(val) {
            this.apiData = val;
        }
    },
    methods: {
        processMap(column) {
            // For each column, if it has a map, then we are going to replace the map with the data from the api
            if (column.map) {
                column.map = this.apiData;
            } else if (column.rows) { // if the column has rows, then we are going to loop through the rows and columns
                column.rows.forEach(row => {
                    row.columns.forEach(column => {
                        this.processMap(column);
                    });
                });
            }
        },
        processDataSourceForRow(column) {
            if (column.rows) {
                column.rows.forEach((row, i) => {
                    if(row.dataSource){
                        this.processDataSource(row.dataSource)
                            .then(response => {
                                row.columns.forEach(column => {
                                    column.map = response.data.data[i]; // ? if the call is row level then we are expecting multiple rows and we are using the index of the row to get the data
                                });
                            })
                            .catch(error => {
                                console.log(error);
                            });
                    } else if (row.map) {
                        console.log("Yessir")
                        row.columns.forEach(column => {
                            column.map = row.map;
                        });
                    }
                });
            }
        },
        processDataSourceForColumn(column) {
            if (column.dataSource) {
                this.processDataSource(column.dataSource).then(response => {
                    this.apiData = response.data.data[0]; // ? if the call is column level then we are expecting only one row
                });
            }
        },
        async processDataSource(dataSource) {
            return await axios({
                method: dataSource.method,
                url: `${dataSource.url}/q`,
                data: dataSource.requestBody,
                headers: dataSource.headers
            });
        },
        stopPropagation(event) {
            event.stopPropagation();
        }
    }
};
</script>
