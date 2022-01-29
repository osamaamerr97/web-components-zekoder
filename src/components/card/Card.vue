<template>
    <div class="zek-card" 
        :style="styleObject"
        @click="cardClicked($event)"
        @mouseover="cardHovered($event)"
    >
        <div class="zek-card-heading">
            <zek-heading
                :text="heading.text"
                :headingLevel="heading.headingLevel"
                :styleObj="heading.styleObj"
            ></zek-heading>
        </div>
        <div class="zek-card-content">
            <zek-text :text="'Content'"></zek-text>
        </div>
    </div>
</template>

<script>
import ZekHeading from "../heading-block/HeadingBlock.vue";
import ZekText from "../text-block/TextBlock.vue";

export default {
    components: { ZekHeading, ZekText },
    name: "ZekCard",
    props: {
        heading: Object,
        headerBackgroundColor: String,
        hoverHeaderBackgroundColor: String,
        backgroundColor: String,
        hoverBackgroundColor: String,
        content: Object,
        flipContent: Object,
        styleObj: Object,
    },
    data() {
        return {
            html: ''
        };
    },
    created() {
        this.styleObject = {
        ...this.styleObj,
        };
        if(this.content && this.content.rows && this.content.rows.length) {
            this.content.rows.forEach((row) => {
                this.createContent(row,null);
            })
        }
    },
    computed: {
        styleObject() {
        return {
            ...this.styleObj,
            "--background-color": this.backgroundColor || 'transparent',
            "--hover-background-color": this.hoverBackgroundColor || this.backgroundColor,
        };
        },
    },
    methods: {
        cardClicked(event) {
            this.$emit('onClick', event);
        },
        cardHovered(event) {
            this.$emit('onHover', event);
        },
        createContent(row, col) {
                if(col) {
                    if(col == 'rows') {
                        Object.keys(parent[col]).forEach((row) => {
                            looper(parent[col],null,row);
                        });
                    }
                    else {
                        sectionObj.children.push(new Paragraph({ 
                            text: col,
                            heading: HeadingLevel.HEADING_2
                        }));
                        if(parent[col].rows && Object.keys(parent[col].rows).length) {
                            Object.keys(parent[col].rows).forEach((row)=> {
                                looper(parent[col].rows,null,row);
                            });
                        }
                        else if(Object.keys(parent[col]).length && Object.keys(parent[col]).length==1) {
                            looper(parent[col],null,Object.keys(parent[col])[0])
                        }
                    }
                }
                else if(row) {

                    if(row == 'columns') {
                        Object.keys(parent[row]).forEach((col)=> {
                            looper(parent[row],col,null);
                        });
                    }
                    else if(row == 'blocks') {
                        if(Array.isArray(parent[row])) {
                            parent[row].forEach((block) => {
                                this.addBlockContent(block, sectionObj.children);
                            });
                        }
                        else {
                            this.addBlockContent(parent[row], sectionObj.children);
                        }
                    }
                    else {
                        sectionObj.children.push(new Paragraph({ 
                            text: row,
                            heading: HeadingLevel.HEADING_3
                        }));
                        if(parent[row].columns && Object.keys(parent[row].columns).length) {
                            Object.keys(parent[row].columns).forEach((col)=> {
                                looper(parent[row].columns,col,null);
                            });
                        }
                        else if(parent[row].blocks){
                            if(Array.isArray(parent[row].blocks)) {
                                parent[row].blocks.forEach((block) => {
                                    this.addBlockContent(block, sectionObj.children);
                                });
                            }
                            else {
                                this.addBlockContent(parent[row].blocks, sectionObj.children);
                            }
                        }
                    }
                }
            }
    },
};
</script>

<style>
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
