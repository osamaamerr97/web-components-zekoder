<template>

<ol v-if="type == 'ordered'" :style="styleObj">
    <li v-for="(item,i) in listItems" :key="i">
        {{ hasChildren(item) ? item.label : item}}
        <zek-list v-if="hasChildren(item)" :listItems="item.children" :type="item.listType" :style="styleObj" />
    </li>
</ol>
<ul v-else :style="styleObj">
    <li v-for="(item,i) in listItems" :key="i">
        {{ hasChildren(item) ? item.label : item}}
        <zek-list v-if="hasChildren(item)" :listItems="item.children" :type="item.listType" :style="styleObj" />
    </li>
</ul>

</template>

<script>
import ZekList from './ListsBlock.vue'
export default {
    name: "ZekList",
    components: {
        ZekList
    },
    props: {
        listItems: {
            type: Array,
            default: () => {return[
                'List Item 1',
                'List Item 2',
                'List Item 3',
                'List Item 4',
                'List Item 5',
            ]},
        },
        type: {
            type: String,
            validator: function (value) {
                return ["ordered", "unordered"].includes(value);
            },
            default: 'unordered'
        },
        styleObj: Object,
    },
    methods: {
        hasChildren(item) {
            const { children } = item;
            return children && children.length > 0;
        },
    },
};
</script>

<style lang="scss"></style>