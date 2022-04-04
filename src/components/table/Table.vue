<template>
    <div :class="'row' + customClass">
        <div class="col">
            <b-table :items="data" v-bind="tableProps" :style="styleObj" :fields="fields" ref="bTable" @row-selected="rowSelected" :current-page="currentPage">
                <template v-if="caption" #table-caption>{{caption}}</template>
                <!-- Show select column with select header -->
                <template v-if="allowSelection" #head(selected)="">
                    <b-form-checkbox @change="toggleAllRows"></b-form-checkbox>
                </template>
                <template v-if="allowSelection" #cell(selected)="data">
                    <b-form-checkbox v-model="data.rowSelected"></b-form-checkbox>
                </template>
                <!-- Show row index -->
                <template v-if="showRowIndex" #cell(index)="data"> {{data.index + 1}} </template>    
                <!-- Show custom column content if component property exists-->
                <template #cell()="data">
                    <component v-if="data.field.component" :is="data.field.component" :row="data.item"></component>
                    <span v-else> {{data.value}}</span>
                </template>
            </b-table>
            <!-- Pagination -->
            <div v-if="pagination" class="align-items-right ">
                <p> Showing {{start}} to {{end}} of {{data.length}} items</p>
                <b-pagination v-model="currentPage" :total-rows="data.length" :per-page="pagination.itemsPerPage" align="right"></b-pagination>
            </div>
        </div>
    </div>
</template>

<script>
// import Vue from 'vue'
// import { BootstrapVue } from 'bootstrap-vue'
// Vue.use(BootstrapVue)
export default {
    name: "ZekTable",
    props: {
        columns: Array, //array of object of type {Label, dataField, styleObj}
        headerType: String, //light or dark,
        type: [String, Array], // one or multiple of: dark, hover, striped, bordered, borderless, sm
        caption: String,
        data: Array,
        showRowIndex: Boolean,
        allowSelection: Boolean,
        pagination: Object, //{itemsPerPage, currentPage}
        customClass: {
            type: String,
            default: ''
        },
        styleObj: Object
    },
    data() {
        return {
            fields: [],
            currentPage: 1,
        }
    },
    created() {
        if(this.pagination && this.pagination.currentPage) {
            this.currentPage = this.pagination.currentPage;
        }
        this.fields = this.columns.map (col => {
            return {
                key: col.dataField,
                label: col.label,
                sortable: col.sortable || false,
                thStyle: col.styleObj,
                tdClass: col.class,
                component: col.component || null
            }
        });
        if(this.showRowIndex) {
            this.fields.unshift({
                label: '#',
                key: 'index',
                sortable: false,
                isRowHeader: true
            })
        }
        if(this.allowSelection) {
            this.fields.unshift({
                key: 'selected',
                sortable: false,
                isRowHeader: true
            })
        }
    },
    computed: {
        tableProps() {
            let tableClass = {};
            if( this.type && typeof(this.type) == 'string') {
                tableClass[this.type] = true;
            } else if (this.type) {
                this.type.forEach ( (type) => {
                    tableClass[type] = true;
                });
            }
            if(this.allowSelection) {
                tableClass['selectable'] = true;
            }
            if(this.pagination && this.pagination.itemsPerPage) {
                tableClass['per-page'] = this.pagination.itemsPerPage;
            }
            return tableClass;
        },
        start(){
            return (this.pagination&&this.pagination.itemsPerPage) ? ((this.currentPage-1)*this.pagination.itemsPerPage)+1 : 1;
        },
        end() {
            const end = (this.pagination&&this.pagination.itemsPerPage) ? this.start-1+this.pagination.itemsPerPage : this.data.length;
            return end <= this.data.length ? end : this.data.length;
        }
    },
    methods: {
        rowSelected(rows) {            
            this.$emit('rowsSelected',rows);
        },
        toggleAllRows(selected) {
            if(selected) {
                this.$refs.bTable.selectAllRows();
            } else {
                this.$refs.bTable.clearSelected();
            }
        }
    },
}
</script>