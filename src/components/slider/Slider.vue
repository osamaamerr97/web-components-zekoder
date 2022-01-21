<template>

<div class="slider-content" :style="styleObj">
    <VueSlickCarousel :arrows="showArrows" :infinite="isInfinite" :fade="fadeEffect" :autoplay="autoPlay" :autoplaySpeed="speed" :dots="showDots">
        <div v-for="(slide,i) in slides" :key="i">
            <div class="slide-content" :style="getSlideStyle(slide)" >
                <div class="text-section" :style="getTextStyle(slide)">
                    <h1 v-if="slide.heading">{{slide.heading}}</h1>
                    <h3 v-if="slide.subHeading">{{slide.subHeading}}</h3>
                    <p v-if="slide.description && !slide.bulletsBefore">{{slide.description}}</p>
                    <ListsBlock v-if="slide.bullets" :listItems="slide.bullets" ></ListsBlock>
                    <p v-if="slide.description && slide.bulletsBefore">{{slide.description}}</p>
                    <ActionButton v-if="slide.button" :theme="'bootstrap'" :url="slide.button.url" :type="slide.button.showLink ? 'link' : ''" :label="slide.button.text" :style="{float: slide.button.position=='right'? 'right':''}"></ActionButton>
                </div>
            </div>
        </div>
    </VueSlickCarousel>
</div>
    
</template>

<script>
  
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    import ActionButton from '../action-button/ActionButton.vue'
    import ListsBlock from '../lists-block/ListsBlock.vue'
  
    export default {
        name: 'Slider',
        components: {VueSlickCarousel, ActionButton, ListsBlock},
        props: {
            showArrows: {
                type: Boolean,
                default: false
            },
            isInfinite: {
                type: Boolean,
                default: true
            },
            fadeEffect: {
                type: Boolean,
                default: true
            },
            autoPlay: {
                type: Boolean,
                default: true
            },
            speed: {
                type: Number,
                default: 2000
            },
            showDots: {
                type: Boolean,
                default: true
            },
            slides: Array,
            styleObj: Object
        },
        data() {
            return {
                slideStyle: {}
            }
        },
        methods: {
            getSlideStyle(slide) {
                let slideStyle = slide.style || {};
                let background = {};
                if( slide.image && slide.image.url) {
                    background =  {
                        backgroundImage: "url('"+ slide.image.url +"')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: slide.image.cover=='half'? "50%": slide.image.cover=='full'? "100%":"",
                        backgroundPosition: slide.image.position
                    }

                }
                return {
                    ... slideStyle,
                    ...background
                }
            },
            getTextStyle(slide) {
                return{
                    width : slide.textCover=='half'? '50%':'',
                    float: slide.textPosition=='right'? 'right': ''
                }

            }
        }
    }
</script>

<style>
.slider-content{
    padding: 0 40px;
}


</style>