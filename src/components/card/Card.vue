<template>
    <div class="zek-card"
        :style="styleObject"
        :id="'card'+id"
        :class="customClass"
        @click="cardClicked($event)"
        @mouseenter="cardHovered($event)"
        @mouseleave="onHoverOut()"
    >
        <div
            v-for="(row,i) in cardContent.rows"
            :key="'row'+ i"
            class="row"
            :class="row.class"
            :style="row.styleObj"
            :id="row.id+''"
        >
            <div
                v-for="(col,i) in row.columns"
                :key="'col'+i"
                :class="(col.columnWidth ? 'col-'+col.columnWidth : 'col') + ' ' + (col.class||'')"
                :style="col.styleObj"
                :id="col.id||''"
            >
                <zek-column-content v-if="col" :column="col"></zek-column-content>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "ZekCard",
    props: {
        backgroundColor: String,
        hoverBackgroundColor: String,
        content: {
            type: Object,
            required: true
        },
        customClass: String,
        flipContent: Object,
        flipOn: String, //hover, click
        id: {
            type: [Number, String],
            default: 0
        },
        styleObj: Object,
    },
    beforeCreate() {
        this.$options.components.ZekColumnContent = require("../column-content/ColumnContent.vue").default;
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
            "--background-color": this.backgroundColor || '',
            "--hover-background-color": this.hoverBackgroundColor || this.backgroundColor || '',
        };
        this.cardContent = this.content;
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
            }
            this.$emit('onClick', event);

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
    },
    watch: {
        content: function(newVal) {
            this.cardContent = newVal;
        }
    }
};
</script>

<style scoped lang="scss">
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
