<template>
    <div :class="'row' + customClass">
        <div class="col">
            <b-table
                :items="tableData"
                v-bind="tableProps"
                :style="styleObj"
                :fields="fields"
                ref="bTable"
                @row-selected="rowSelected"
                :current-page="currentPage"
            >
                <template v-if="caption" #table-caption>{{ caption }}</template>
                <!-- Show select column with select header -->
                <template v-if="allowSelection" #head(selected)="">
                    <b-form-checkbox @change="toggleAllRows"></b-form-checkbox>
                </template>
                <template v-if="allowSelection" #cell(selected)="data">
                    <b-form-checkbox v-model="data.rowSelected"></b-form-checkbox>
                    <!-- Delete Item Slot, TODO: What will this bind to in the generator? -->
                    <slot name="delete" @onClick="deleteData(data.item.id)"></slot>
                    <!-- Update Item -->
                    <slot name="update" @onClick="updateData(data.item.id)"></slot>
                </template>
                <!-- Show row index -->
                <template v-if="showRowIndex" #cell(index)="data"> {{ data.index + 1 }} </template>
                <!-- Show custom column content if component property exists-->
                <template #cell()="data">
                    <component
                        v-if="data.field.component"
                        :is="data.field.component"
                        :row="data.item"
                        @customEvent="emitTableEvent($event)"
                    ></component>
                    <span v-else> {{ data.value }}</span>
                </template>
            </b-table>
            <!-- Pagination -->
            <div v-if="pagination" class="align-items-right ">
                <p>Showing {{ start }} to {{ end }} of {{ tableData.length }} items</p>
                <b-pagination
                    v-model="currentPage"
                    :total-rows="tableData.length"
                    :per-page="pagination.itemsPerPage"
                    align="right"
                ></b-pagination>
            </div>
        </div>
    </div>
</template>

<script>
// import Vue from 'vue'
// import { BootstrapVue } from 'bootstrap-vue'
// Vue.use(BootstrapVue)
import axios from 'axios';
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
        styleObj: Object,
        dataSource: {
            type: [String, Array, Object],
            required: false,
            validator: (value) => {
                if (value === null || value === undefined) {
                    return true;
                } else if (typeof value == 'string') {
                    try {
                        return Boolean(new URL(value));
                    }
                    catch(e){
                        return false;
                    }
                } else if (typeof value == 'object') {
                    return value.url != '' && value.method != '' && value.requestBody != ''
                }
            }
        },
        mapping: {
            type: Object,
            required: false
        },
        deleteParams: {
            type: [String, Array],
            required: false
        },
        updateSource: {
            type: Object,
            default: () => {
                return {
                    url: this.dataSource,
                    method: 'PATCH',
                    payload: ['id', 'selected'],
                    queryParams: []
                }
            }
        }
    },
    data() {
        return {
            fields: [],
            currentPage: 1,
            tableData: this.data || []
        }
    },
    created() {
        this.processDataSource();
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
            const end = (this.pagination&&this.pagination.itemsPerPage) ? this.start-1+this.pagination.itemsPerPage : this.tableData.length;
            return end <= this.tableData.length ? end : this.tableData.length;
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
        },
        emitTableEvent(data){
            this.$emit('tableRowEvent',data);
        },
        updateSourceData(id, selected) {
            if(this.updateSource) {
                let payload = {};
                this.updateSource.payload.forEach ( (key) => {
                    payload[key] = this[key];
                });
                let queryParams = {};
                this.updateSource.queryParams.forEach ( (key) => {
                    queryParams[key] = this[key];
                });
                axios({
                    method: this.updateSource.method,
                    url: this.updateSource.url,
                    data: payload,
                    params: queryParams
                })
                .then(response => {
                    this.$emit('updateSuccess', response.data.data);
                })
                .catch(error => {
                    console.log(error);
                })
            }
        },
        deleteData(id){
            // TODO: Make sure this formate will not change
            axios.delete(`${this.dataSource}?id=${id}`)
                .then(response => {
                    this.tableData = this.tableData.filter (item => {
                        return item.id != response.data.data.id;
                    })
                })
                .catch(error => {
                    console.log(error);
                })
        },
        processDataSource(){
            if(this.dataSource) {
                if(typeof this.dataSource == 'string') {
                    axios.get(this.dataSource)
                        .then(response => {
                            this.mapDataSource(response.data.data)
                        })
                        .catch(error => {
                            console.log(error);
                        })
                } else if (typeof this.dataSource == 'object') {
                    axios({
                        method: this.dataSource.method,
                        url: this.dataSource.url,
                        data: this.dataSource.requestBody
                    })
                        .then(response => {
                            this.mapDataSource(response.data.data)
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            }
        },
        mapDataSource(data){
            if(this.mapping) {
                this.tableData = data.map (item => {
                    // TODO: Make sure the id will always be there or maybe given in the params or make go by index as well.
                    let mappedItem = {
                        id: item.id
                    };
                    for(let key in this.mapping) {
                        mappedItem[key] = item[this.mapping[key]];
                    }
                    return mappedItem;
                })
            } else {
                this.tableData = data;
            }
        }
    },
}
</script>
