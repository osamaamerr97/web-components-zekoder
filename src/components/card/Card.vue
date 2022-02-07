<template>
    <div class="zek-card"
        :style="styleObject"
        :id="'card'+id"
        @click="cardClicked($event)"
        @mouseenter="cardHovered($event)"
        @mouseleave="onHoverOut()"
    >
        <div v-for="row in cardContent.rows" :key="row" class="row">
            <div v-for="col in row.columns" :key="col" :class="col.columnWidth ? 'col-'+col.columnWidth : 'col'">
                <zek-column-content v-if="col" :column="col"></zek-column-content>
            </div>
        </div>

    </div>
</template>

<script>
import ZekColumnContent from "../column-content/ColumnContent.vue"
export default {
    components: { ZekColumnContent},
    name: "ZekCard",
    props: {
        backgroundColor: String,
        hoverBackgroundColor: String,
        content: {
            type: Object,
            required: true
        },
        flipContent: Object,
        flipOn: String, //hover, click
        id: {
            type: Number,
            default: 0
        },
        styleObj: Object,
    },
    data() {
        return {
            cardContent: {},
            cardFlipped: false
        };
    },
    created() {
        this.styleObject = {
        ...this.styleObj,
        };
        this.cardContent = this.content;
    },
    computed: {
        styleObject() {
        return {
            ...this.styleObj,
            "--background-color": this.backgroundColor || '',
            "--hover-background-color": this.hoverBackgroundColor || this.backgroundColor || '',
        };
        },
    },
    methods: {
        cardClicked(event) {
            if(!this.cardFlipped && this.flipOn == 'click' && this.flipContent && this.flipContent.rows && this.flipContent.rows.length){ 
                this.cardContent = this.flipContent;
                this.cardFlipped = true;

            } else if(this.cardFlipped && this.flipOn == 'click' && this.flipContent) {
                this.cardContent = this.content;
                this.cardFlipped = false;
            } else {
                this.$emit('onClick', event);
            }
            
        },
        cardHovered(event) {
            if(this.flipOn == 'hover' && this.flipContent && this.flipContent.rows && this.flipContent.rows.length){ 
                this.cardContent = this.flipContent;
            } else {
                this.$emit('onHover', event);
            }
        },
        onHoverOut() {
            if(this.flipOn == 'hover' && this.flipContent){ 
                this.cardContent = this.content;
            }
        }
    }
};
</script>

<style scoped>
.zek-card {
  width: 100%;
  background-color: var(--background-color);
  box-sizing: border-box;
}
.zek-card:hover {
  background-color: var(--hover-background-color);
}
.zek-card > .zek-card-content {
  padding: 10px;
}
</style>
