<template>

    <div v-if="column && column.rows && column.rows.length" class="row">
        <div v-for="(row,i) in column.rows" :key="'row'+i" class="row">
            <div v-for="(col,i) in row.columns" :key="'col'+i" :class="col.columnWidth ? 'col-'+col.columnWidth : 'col'">
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

export default {
    components: {
        ZekButton, 
        ZekHeading, 
        ZekHtml, 
        ZekImage, 
        ZekList, 
        ZekText, 
        ZekInitials,
        ZekVideo
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