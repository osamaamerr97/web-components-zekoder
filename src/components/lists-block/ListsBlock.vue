<template>

<ol v-if="type == 'ordered'" :style="styleObj">
    <li v-for="(item,i) in listItems" :key="i">
        {{ hasChildren(item) ? item.label : item}}
        <ListsBlock v-if="hasChildren(item)" :listItems="item.children" :type="item.listType" :style="styleObj" />
    </li>
</ol>
<ul v-else :style="styleObj">
    <li v-for="(item,i) in listItems" :key="i">
        {{ hasChildren(item) ? item.label : item}}
        <ListsBlock v-if="hasChildren(item)" :listItems="item.children" :type="item.listType" :style="styleObj" />
    </li>
</ul>

</template>

<script>
import ListsBlock from './ListsBlock.vue'
export default {
  name: "ListsBlock",
  components: {
    ListsBlock
  },
  props: {
    listItems: Object,
    type: {
      validator: function (value) {
        return ["ordered", "unordered"].includes(value);
      },
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

<style></style>