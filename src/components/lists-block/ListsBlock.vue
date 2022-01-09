<template>

<ol v-if="type == 'ordered'">
    <li v-for="(item,i) in listItems" :key="i" v-bind:style="styleObj">
        {{item}}
    </li>
</ol>
<ul v-if="type == 'unordered'">
    <li v-for="(item,i) in listItems" :key="i" v-bind:style="styleObj">
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