<template>

    <div :class="cssClass" :style="styleObj" v-html="cleanHtml" @click="$emit('onClick', $event)"></div>

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
    computed: {
        cleanHtml() {
            return sanitizeHtml(this.content, {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
                allowedAttributes: { ... sanitizeHtml.defaults.allowedAttributes, i: ['class'], a: ['href', 'name', 'target']}
            });
        }
    }
  }
</script>

<style lang="scss"></style>
