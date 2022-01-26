<template>

    <a 
        v-if="targetUrl" 
        :href="targetUrl" 
        :target="'_'+(targetWindow || 'self')"
    >
        <img 
            :src="imageUrl"
            :alt="altText"
            :title="hoverText"
            :style="styleObject"
            @mouseenter="onHover()"
            @mouseout="onHoverOut()"
        >
    </a>
    <img 
        v-else
        :src="imageUrl"
        :alt="altText"
        :title="hoverText"
        :style="styleObject"
        @mouseenter="onHover()"
        @mouseout="onHoverOut()"
    >

</template>

<script>
  
  export default {
    name: 'ZekImage',
    props: {
        url: String,
        imageColor: String,
        altText: String,
        hoverText: String,
        targetUrl: String,
        targetWindow: String,
        width: String,
        height: String,
        hover: Object,
        crop: Object,
        styleObj: Object
    },
    data() {
        return {
            styleObject : {},
            imageUrl: null
        }
    },
    created() {
        this.styleObject = { 
            ...this.styleObj,
            width: isNaN(+this.width) ? this.width : this.width+'px',
            height: isNaN(+this.height) ? this.height : this.height+'px'
        };
        this.imageUrl = this.url;
        if ( this.imageColor === 'grayscale' ) {
            this.styleObject['filter'] = 'grayscale(100%)';
        }
        if ( this.crop ) {
            if(this.crop.type == 'round') {
                this.styleObject['objectFit'] = 'cover';
                this.styleObject['borderRadius'] = '50%';
            }
            else {
                this.styleObject['objectFit'] = 'none';
                let position = this.crop.position || '';
                if(!position) {
                    //setting x axis crop
                    if(this.crop.left) {
                        position = isNaN(this.crop.left) ? '-'+this.crop.left : '-'+this.crop.left+'px';
                    }
                    else if(this.crop.right) {
                        position = isNaN(this.crop.right) ? 'calc(100% + '+ this.crop.right +')' : 'calc(100% + '+ this.crop.right +'px)'
                    }
                    else {
                        position = '50%';
                    }
                    //setting y axis crop
                    if(this.crop.top) {
                        position += isNaN(this.crop.top) ? ' -'+this.crop.top : ' -'+this.crop.top+'px';
                    }
                    else if(this.crop.bottom) {
                        position += isNaN(this.crop.bottom) ? ' calc(100% + '+ this.crop.bottom +')' : ' calc(100% + '+ this.crop.bottom +'px)'
                    }
                    else {
                        position += ' 50%';
                    }
                }
                this.styleObject['objectPosition'] = position;
            }
            
        }
    },
    methods: {
        onHover() {
            if ( this.hover ) {
                if ( this.hover.action === 'grayscale' ) {
                    this.styleObject['filter'] = 'grayscale(100%)';
                } else if ( this.hover.action === 'normal' ) {
                    this.styleObject['filter'] = 'grayscale(0%)';
                } else if ( this.hover.action === 'text' ) {
                    this.styleObject['filter'] = 'grayscale(0%)';
                } else if ( this.hover.action === 'picture' ) {
                    this.imageUrl = this.hover.alternatePicture;
                } 
            }
        },
        onHoverOut() {
            if ( this.hover ) {
                if ( this.hover.action === 'grayscale' ) {
                    this.styleObject['filter'] = 'grayscale(0%)';
                } else if ( this.hover.action === 'normal' ) {
                    this.styleObject['filter'] = 'grayscale(100%)';
                } else if ( this.hover.action === 'text' ) {
                    this.styleObject['filter'] = 'grayscale(0%)';
                } else if ( this.hover.action === 'picture' ) {
                    this.imageUrl = this.url;
                } 
            }
        }
    }
  }
</script>

<style scoped>
</style>