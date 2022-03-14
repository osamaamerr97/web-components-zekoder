<template>
    <div :class="customClass" :style="styleObj">
        <chart type="line" :options="options" :series="series" :width="width" :height="height"></chart>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import * as axios from 'axios';
export default {
    name: 'ZekLineChart',
    components: {
        chart : VueApexCharts
    },
    props: {
        width: [String, Number],
        height: [String, Number],
        data: Array,
        title: [String,Object],
        id: [String, Number],
        customClass: String,
        styleObj: Object,
        apiInfo: Object, // {url, method:get|post, type:graphql||http, query}
        xAxis: Object, //{label,dataKey,tickSize,tickColor,data,type:category|datetime}
        yAxis: Object, //{label,tickSize,tickColor,series} // series: [{label, color, data[], dataKey}]
        showLegend: Boolean,
    },
    data() {
        return {
            chartData:[],
            series: [],
            options: {
                chart: {
                    id: 'line-chart'
                },
                noData: {
                    text: 'Loading...',
                    style: {
                        color: undefined,
                        fontSize: '20px'
                    }
                },
                xaxis: {
                    title: {
                        text: this.xAxis.label? (this.xAxis.label.text || this.xAxis.label) : undefined,
                        style: this.xAxis.label&&this.xAxis.label.style? this.xAxis.label.style : {}

                    },
                    labels: {
                        style: {
                            colors: this.xAxis.tickColor,
                            fontSize: this.xAxis.tickSize
                        }
                    }
                },
                yaxis:{
                    title: {
                        text: this.yAxis.label? (this.yAxis.label.text || this.yAxis.label) : undefined,
                        style: this.yAxis.label&&this.yAxis.label.style? this.yAxis.label.style : {}
                    },
                    labels: {
                        style: {
                            colors: this.yAxis.tickColor,
                            fontSize: this.yAxis.tickSize
                        }
                    }
                },
                title: {
                    text: this.title? (this.title.text || this.title) : undefined,
                    style: this.title&&this.title.style? this.title.style : {}

                }
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
            if(this.yAxis && this.yAxis.series && this.yAxis.series.length) {
                this.yAxis.series.forEach(ser => {
                    let data = [];
                    if(ser.data && ser.data.length) {
                        data = ser.data;
                    } else if(ser.dataKey && this.chartData.length && ser.dataKey in this.chartData[0]) {
                        data = this.chartData.map(item => item[ser.dataKey]);
                    }
                    if (data.length < 1) {
                        return;
                    } else {
                        this.series.push({
                            name: ser.label || ser.dataKey || undefined,
                            data: data,
                            color: ser.color || undefined
                        });
                    }
                });
                if(this.series.length < 1){
                    this.options.noData.text = 'No data available!'
                    this.options.noData.style.color = 'rgb(255,0,0)';
                }
            }
            if(this.xAxis && this.xAxis.data && this.xAxis.data.length) {
                this.options.xaxis["categories"] = this.xAxis.data;
            } else if(this.xAxis && this.xAxis.dataKey && this.chartData.length && this.xAxis.dataKey in this.chartData[0]) {
                this.options.xaxis["categories"] = this.chartData.map(item => item[this.xAxis.dataKey]);
            }
        }
    }

}
</script>