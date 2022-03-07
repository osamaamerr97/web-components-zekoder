<template>
  <footer :style="styleObject">
      <ul
        v-for="(column, index) in columns"
        :key="index"
        class="footer__column"
      >
        <li
          v-for="(link, index) in column.links"
          :key="index"
          class="footer__item"
        >
          <a :href="link.href" class="footer__link">{{ link.text }}</a>
        </li>
      </ul>
    <div style="display: flex; align-items: center; position: absolute; bottom: 0">
      <a
        v-for="(link, i) in socialLinks"
        :key="i"
        :href="link.href"
        class="footer__link"
      >
        <i :class="`fab fa-${link.icon}`" style="color:inherit; margin: 0 5px;" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "ZekFooter",
  props: {
    height: {
      type: String,
      required: true,
    },
    columns: {
      type: Array,
    },
    socialLinks: {
      type: Array,
    },
    socialLinksPosition: {
      type: String,
      default: "right",
    },
    image: {
      type: String,
    },
    imagePosition: {
      type: String,
      default: "left",
    },
    textStyle: {
      type: String,
    },
    styleObj: {
      type: Object,
    },
  },
  computed: {
    styleObject() {
      return {
        ...this.styleObj,
        position: this.styleObj.position ||  'relative' || 'relative',
        height: this.height || this.styleObj.height || 'auto',
        backgroundImage: `url(${this.image})` || this.styleObj.backgroundImage || '',
        backgroundPosition: this.imagePosition || this.styleObj.backgroundPosition || '',
        textTransform: this.textStyle || this.styleObj.textTransform || '',
      };
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>