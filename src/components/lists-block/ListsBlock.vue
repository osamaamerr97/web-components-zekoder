<template>

<ol v-if="type == 'ordered'" :style="styleObj">
    <li v-for="(item,i) in listItems" :key="i">
        {{item}}
    </li>
</ol>
<ul v-if="type == 'unordered'" :style="styleObj">
    <li v-for="(item,i) in listItems" :key="i">
        {{item}}
    </li>
</ul>

</template>

<script>

  export default {
    name: 'ListsBlock',
    props: ['listItems', 'type', 'styleObj'],
    data() {
        return {
            styleObject : {
            }
        }
    },
    methods: {

    },
    created() {
    }
  }
</script>

<style></style>