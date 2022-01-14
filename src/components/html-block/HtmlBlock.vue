<template>

    <div :style="styleObj" v-html="cleanHtml"></div>

</template>

<script>
  import sanitizeHtml from 'sanitize-html'

  export default {
    name: 'HtmlBlock',
    props: {
        content: String,
        styleObj: Object
    },
    data() {
        return {
            cleanHtml : ''
        }
    },
    created() {
        this.cleanHtml = sanitizeHtml(this.content);
    }
  }
</script>

<style></style>