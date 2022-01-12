<template>

<ol v-if="type == 'ordered'" :style="styleObj">
    <li v-for="(item,i) in listItems" :key="i">
        {{item}}
    </li>
</ol>
<ul v-else :style="styleObj">
    <li v-for="(item,i) in listItems" :key="i">
        {{item}}
    </li>
</ul>

</template>

<script>

  export default {
    name: 'ListsBlock',
    props: {
      'listItems' : Array,
      'type': {validator: function (value) {
        return ['ordered', 'unordered'].includes(value);}
      },
      'styleObj': Object},
  }
</script>

<style></style>