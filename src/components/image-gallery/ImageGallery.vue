<template>
    <div 
        class="zek-image-gallery"
        :class="customClass" 
        :style="styleObj"
    >
        <VueSlickCarousel v-bind="settings">
            <div v-for="(image, i) in images" :key="i">
                <img class="w-100" :src="image"/>
            </div>
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name: 'ZekImageGallery',
    components: { VueSlickCarousel },
    props: {
        showArrows: {
            type: Boolean,
            default: false
        },
        showDots: {
            type: Boolean,
            default: false
        },
        settings: Object,
        images: Array,
        customClass: String,
        styleObj: Object
    },
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
    }
}
</script>

<style lang="scss">
.zek-image-gallery {
    .slick-slider {
        .slick-arrow {
            height: 30px;
            width: 30px;
            z-index: 1;
            &:before {
                font-size: 30px;
            }
            &.slick-prev {
                left: 10px;
            }
            &.slick-next {
                right: 10px;
            }
        }
    }
}
</style>