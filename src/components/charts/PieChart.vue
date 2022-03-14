<template>
    <div :class="customClass" :style="styleObj">
        <chart type="pie" :options="options" :series="series" :width="width" :height="height"></chart>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import * as axios from 'axios';
export default {
    name: 'ZekPieChart',
    components: {
        chart : VueApexCharts
    },
    props: {
        width: [String, Number],
        height: [String, Number],
        data: Array,
        labels: Array,
        colors: Array,
        title: [String,Object],
        id: [String, Number],
        customClass: String,
        styleObj: Object,
        apiInfo: Object, // {url, method:get|post, type:graphql||http, query}
        showLegend: Boolean,
    },
    data() {
        return {
            chartData:[],
            series: [],
            options: {
                chart: {
                    id: 'pie-chart',
                },
                noData: {
                    text: 'Loading...',
                    style: {
                        color: undefined,
                        fontSize: '20px'
                    }
                },
                title: {
                    text: this.title? (this.title.text || this.title) : undefined,
                    style: this.title&&this.title.style? this.title.style : {}
                },
                fill:{
                    colors: []
                },
                labels: [],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: this.width,
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        }
    },
    created() {
        //chart settings

        //chart data
        if(this.data && this.data.length) {
            this.chartData = this.data;
            this.populateGraph();
        } else if(this.apiInfo && this.apiInfo.url) {
            this.fetchData();
        } else {
            this.populateGraph();
        }
    },
    methods: {
        fetchData() {
            const method = this.apiInfo.method || (this.apiInfo.type=='graphql'? 'post' : 'get')
            axios({
                method: method,
                url: this.apiInfo.url,
                data: this.apiInfo.query || this.apiInfo.body || null
            })
            .then(res => {
                this.chartData = res.data;
                this.populateGraph();
            })
            .catch(err => {
                this.options.noData.text = 'Could not fetch data!';
                this.options.noData.style.color = 'rgb(255,0,0)';
            });
        },
        populateGraph() {
            if(this.chartData && this.labels && this.chartData.length && this.labels.length) {
                this.series = this.data;
                this.options.labels = this.labels;
                this.options.fill.colors = this.colors;
                if(this.series.length < 1){
                    this.options.noData.text = 'No data available!'
                    this.options.noData.style.color = 'rgb(255,0,0)';
                }
            }
        }
    }

}
</script>