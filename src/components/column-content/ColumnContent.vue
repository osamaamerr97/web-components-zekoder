<template>
    <div class="column-content-wrapper">
        <div v-if="column && column.rows && column.rows.length" class="">
            <div v-for="(row,i) in column.rows" :key="'row'+i" class="row" :id="row.id" :class="row.class">
                <div v-for="(col,i) in row.columns" :key="'col'+i" :class="(col.columnWidth ? 'col-'+col.columnWidth : 'col')+' '+(col.class || '')" :id="col.id">
                    <zek-column-content :column="col"></zek-column-content>
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
            v-bind="column.content.data" v-on="column.content.events"
        ></zek-list>
        <zek-text
            v-else-if="column && column.content && column.content.component == 'text'"
            class="card-text"
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
            <vue-recaptcha ref="recaptcha" @verify="column.content.events.onVerify" @expired="column.content.events.onExpired" :loadRecaptchaScript="true" :sitekey="column.content.data.siteKey"></vue-recaptcha>
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
import ZekToggleButton from "../toggle-button/ToggleButton.vue"
import VueRecaptcha from '../../../node_modules/vue-recaptcha/dist/vue-recaptcha.es';
import ZekCountriesList from "../countries-list/CountriesList.vue";
import ZekFileUpload from '../file-upload/FileUpload.vue';

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
        column: Object //column can have rows or a component. Each row must have columns, columns can have more rows. Component can only be inside a column
    },
    created(){
    },
    methods: {
        stopPropagation(event){
            event.stopPropagation();
        }
    }

}
</script>