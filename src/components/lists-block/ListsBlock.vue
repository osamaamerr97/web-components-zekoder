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
    listItems: Array,
    type: {
      validator: function (value) {
        return ["ordered", "unordered"].includes(value);
      },
    },
    styleObj: Object,
  },
  data() {
      return {}
  },
  created() {
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