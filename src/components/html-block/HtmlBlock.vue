<template>

    <div :class="cssClass" :style="styleObj" v-html="cleanHtml"></div>

</template>

<script>
  import sanitizeHtml from 'sanitize-html'

  export default {
    name: 'ZekHtml',
    props: {
        content: String,
        cssClass: String,
        styleObj: Object
    },
    data() {
        return {
            cleanHtml : ''
        }
    },
    created() {
        this.cleanHtml = sanitizeHtml(this.content, {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
            allowedAttributes: { ... sanitizeHtml.defaults.allowedAttributes, i: ['class'], a: ['href', 'name', 'target']}
        });
    }
  }
</script>

<style lang="scss"></style>