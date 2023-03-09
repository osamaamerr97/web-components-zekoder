<template>
    <div :class="'row' + customClass" @click="$emit('onClick', $event)">
        <div class="col">
            <b-table
                v-if="tableData && tableData.length > 0 && fields && fields.length > 0"
                :items="tableData"
                v-bind="tableProps"
                :style="styleObj"
                :fields="fields"
                ref="bTable"
                @row-selected="rowSelected"
                :current-page="currentPage"
            >
                <template v-if="caption" #table-caption>{{ caption }}</template>
                 <!-- Show row index -->
+                <template v-if="showRowIndex" #cell(index)="data">
+                    {{ data.index + 1 }}
+                </template>
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
                <!-- show delete button -->
                <template v-if="allowDelete" #cell(delete_button)="data">
                    <ZekButton v-bind="deleteSettings.deleteButton" @onClick="deleteSettings.showConfirmation ? showDeleteModal(data.item) : deleteRow(data.item)" />
                </template>
            </b-table>
            <p v-else> Please provide valid data for the table</p>
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
        <b-modal
            ref="delete-item"
            title="Are you sure you want to delete this item?"
            :ok-title="'Delete'"
            :hide-header-close="true"
            :header-class="'border-bottom-0 text-center p-5 pb-3'"
            :title-class="'fs-2'"
            :body-class="'d-none'"
            :footer-class="'border-top-0 align-items-center justify-content-center d-flex h-25'"
            :cancel-variant="'outline-secondary'"
            @ok="deleteRow"
        >
        </b-modal>
    </div>
</template>

<script>
// import Vue from 'vue'
// import { BootstrapVue } from 'bootstrap-vue'
// Vue.use(BootstrapVue)
import ZekButton from "../action-button/ActionButton.vue";
import axios from "axios";
export default {
    name: "ZekTable",
    components: { ZekButton },
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
            default: ""
        },
        styleObj: Object,
        dataSource: {
            type: [String, Array, Object],
            required: false
        },
        mapping: {
            type: Object,
            required: false
        },
        allowDelete: {
            type: Boolean,
            default: false
        },
        deleteSettings: {
            type: Object,
            required: false
        },
    },
    data() {
        return {
            fields: [],
            currentPage: 1,
            tableData: this.data || [],
            currentRow: null,
        };
    },
    created() {
        this.processDataSource();
        if (this.pagination && this.pagination.currentPage) {
            this.currentPage = this.pagination.currentPage;
        }
        this.fields = this.columns ? this.columns.map(col => {
            return {
                key: col.dataField,
                label: col.label,
                sortable: col.sortable || false,
                thStyle: col.styleObj,
                tdClass: col.class,
                component: col.component || null
            };
        }) : [];
        if (this.showRowIndex) {
            this.fields.unshift({
                label: "#",
                key: "index",
                sortable: false,
                isRowHeader: true
            });
        }
        if (this.allowSelection) {
            this.fields.unshift({
                key: "selected",
                sortable: false,
                isRowHeader: true
            });
        }
        if (this.allowDelete) {
            this.fields.push({
                key: "delete_button",
                sortable: false,
                isRowHeader: false,
            });
        }
    },
    computed: {
        tableProps() {
            let tableClass = {};
            if (this.type && typeof this.type == "string") {
                tableClass[this.type] = true;
            } else if (this.type) {
                this.type.forEach(type => {
                    tableClass[type] = true;
                });
            }
            if (this.allowSelection) {
                tableClass["selectable"] = true;
            }
            if (this.pagination && this.pagination.itemsPerPage) {
                tableClass["per-page"] = this.pagination.itemsPerPage;
            }
            return tableClass;
        },
        start() {
            return this.pagination && this.pagination.itemsPerPage
                ? (this.currentPage - 1) * this.pagination.itemsPerPage + 1
                : 1;
        },
        end() {
            const end =
                this.pagination && this.pagination.itemsPerPage
                    ? this.start - 1 + this.pagination.itemsPerPage
                    : this.tableData.length;
            return end <= this.tableData.length ? end : this.tableData.length;
        }
    },
    methods: {
        rowSelected(rows) {
            this.$emit("rowsSelected", rows);
        },
        toggleAllRows(selected) {
            if (selected) {
                this.$refs.bTable.selectAllRows();
            } else {
                this.$refs.bTable.clearSelected();
            }
        },
        emitTableEvent(data) {
            this.$emit("tableRowEvent", data);
        },
        showDeleteModal(row) {
            this.currentRow = row;
            this.$refs['delete-item'].show()
        },
        deleteRow(item) {
            if (this.deleteSettings) {
                item.id ?? (item = this.currentRow);
                let deleteUrl = `${this.dataSource.url}${this.deleteSettings.url}=${item.id}`;
                // -----------------------------
                // TODO: Handle array of params
                // -----------------------------
                axios({
                    method: "DELETE",
                    url: deleteUrl,
                    headers: this.dataSource.headers
                })
                    .then(response => {
                        this.$emit("deleteSuccess", response.data.data);
                        this.processDataSource();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        processDataSource() {
            if (this.dataSource) {
                if (typeof this.dataSource == "string") {
                    axios
                        .get(this.dataSource)
                        .then(response => {
                            this.mapDataSource(response.data.data);
                        })
                        .catch(error => {
                            console.log(error);
                        });
                } else if (typeof this.dataSource == "object") {
                    axios({
                        method: this.dataSource.method,
                        url: `${this.dataSource.url}/q`,
                        data: this.dataSource.requestBody,
                        headers: this.dataSource.headers
                    })
                        .then(response => {
                            this.mapDataSource(response.data.data);
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }
            }
        },
        mapDataSource(data) {
            if (this.mapping) {
                this.tableData = data.map(item => {
                    // TODO: Make sure the id will always be there or maybe given in the params or make go by index as well.
                    let mappedItem = {
                        id: item.id
                    };
                    for (let key in this.mapping) {
                        mappedItem[key] = item[this.mapping[key]];
                    }
                    return mappedItem;
                });
            } else {
                this.tableData = data;
            }
        }
    }
};
</script>
