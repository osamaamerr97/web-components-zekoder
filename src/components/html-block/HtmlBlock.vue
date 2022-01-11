<template>

    <div :style="styleObj" v-html="cleanHtml"></div>

</template>

<script>
//   import {VueSanitize} from 'vue-sanitize';
  import sanitizeHtml from 'sanitize-html'

  export default {
    name: 'HtmlBlock',
    props: ['content', 'styleObj'],
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