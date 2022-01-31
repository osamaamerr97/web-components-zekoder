<template>

    <template v-if="column && column.rows && column.rows.length">
        <div v-for="row in column.rows" :key="row" class="row">
            <div v-for="col in row.columns" :key="col" :class="col.columnWidth ? 'col-'+col.columnWidth : 'col'">
                <zek-column-content :column="col"></zek-column-content>
            </div>
        </div>
    </template>
    <zek-button @click="stopPropagation($event)" v-else-if="column && column.content && column.content.component == 'button'" v-bind="column.content.data" v-on="column.content.events" > </zek-button>
    <zek-heading v-else-if="column && column.content && column.content.component == 'heading'" v-bind="column.content.data" v-on="column.content.events" > </zek-heading>
    <zek-html v-else-if="column && column.content && column.content.component == 'html'" v-bind="column.content.data" v-on="column.content.events" > </zek-html>
    <zek-image v-else-if="column && column.content && column.content.component == 'image'" v-bind="column.content.data" v-on="column.content.events" > </zek-image>
    <zek-list v-else-if="column && column.content && column.content.component == 'list'" v-bind="column.content.data" v-on="column.content.events" > </zek-list>
    <zek-text v-else-if="column && column.content && column.content.component == 'text'" v-bind="column.content.data" v-on="column.content.events" > </zek-text>

    
</template>

<script>
import ZekButton from "../action-button/ActionButton.vue";
import ZekHeading from "../heading-block/HeadingBlock.vue";
import ZekHtml from "../html-block/HtmlBlock.vue";
import ZekImage from "../image/Image.vue";
import ZekList from "../lists-block/ListsBlock.vue";
import ZekText from "../text-block/TextBlock.vue";
import ZekColumnContent from "./ColumnContent.vue"

export default {
    components: {ZekButton, ZekHeading, ZekHtml, ZekImage, ZekList, ZekText, ZekColumnContent},
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