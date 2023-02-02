<template>
    <p @click="$emit('onClick', $event)" :style="styleObj">
        <span v-if="value"> {{value}} </span>
    </p>

</template>

<script>

  export default {
    name: 'ZekText',
    props: {
        text: String,
        lineBreaks: Number,
        styleObj: Object,
        dataField: String
    },
    data() {
        return{}
    },
    created() {
        // console.log(this.map)
    },
    computed: {
        value(){
            return this.dataField ? this.dataField : this.text;
        }
    },
  }
</script>

<style lang="scss"></style>
