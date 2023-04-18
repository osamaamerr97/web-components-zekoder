<template>
    <div :class="customClass" :style="styleObj">
        <chart type="radialBar" :options="options" :series="series" :width="width" :height="height"></chart>
    </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import * as axios from "axios";
export default {
    name: "ZekRadialChart",
    components: {
        chart: VueApexCharts
    },
    props: {
        width: [String, Number],
        height: [String, Number],
        data: Array,
        colors: Array,
        title: [String, Object],
        id: [String, Number],
        customClass: String,
        styleObj: Object,
        apiInfo: Object, // {url, method:get|post, type:graphql||http, query}
        showLegend: Boolean,
        stroke: Object,
        size: String,
        labels: Object,
        hollow: Object, // https://apexcharts.com/docs/options/plotoptions/radialbar/
        track: Object, // https://apexcharts.com/docs/options/plotoptions/radialbar/
    },
    data() {
        return {
            chartData: [],
            series: [],
            options: {
                labels: [],
                stroke: {
                    curve: "smooth",
                    lineCap: "round",
                    width: 1,
                    ...this.stroke
                },
                chart: {
                    id: `radial-chart-${this.id}`,
                    events: {
                        dataPointSelection: (event, chartContext, config) => {
                            this.$emit("dataPointSelection", config);
                        }
                    }
                },
                noData: {
                    text: "Loading...",
                    style: {
                        color: undefined,
                        fontSize: "20px"
                    }
                },
                title: {
                    text: this.title ? this.title.text || this.title : undefined,
                    style: this.title && this.title.style ? this.title.style : {}
                },
                colors: [],
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: this.width
                            },
                            legend: {
                                position: "bottom"
                            }
                        }
                    }
                ],
                legend: {
                    show: this.showLegend
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: this.size || "70%",
                            ...this.hollow
                        },
                        track: {
                            background: "#e7e7e7",
                            strokeWidth: "67%",
                            margin: 5, // margin is in pixels
                            ...this.track
                        },
                        dataLabels: {
                            show: true,
                            name: {
                                show: false,
                                fontSize: "16px",
                                fontFamily: undefined,
                                fontWeight: 600,
                                color: undefined,
                                offsetY: -10,
                            },
                            value: {
                                show: true,
                                fontSize: "40px",
                                fontFamily: undefined,
                                fontWeight: 400,
                                color: undefined,
                                offsetY: 15,
                            },
                            total: {
                                show: false,
                                label: "Total",
                                color: "#373d3f",
                                fontSize: "16px",
                                fontFamily: undefined,
                                fontWeight: 600,
                            },
                            ...this.labels
                        }
                    }
                }
            }
        };
    },
    created() {
        //chart settings

        //chart data
        if (this.data && this.data.length) {
            this.chartData = this.data;
            this.populateGraph();
        } else if (this.apiInfo && this.apiInfo.url) {
            this.fetchData();
        } else {
            this.populateGraph();
        }
    },
    methods: {
        fetchData() {
            const method = this.apiInfo.method || (this.apiInfo.type == "graphql" ? "post" : "get");
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
                    this.options.noData.text = "Could not fetch data!";
                    this.options.noData.style.color = "rgb(255,0,0)";
                });
        },
        populateGraph() {
            if (this.chartData && this.chartData.length) {
                this.chartData.forEach(ser => {
                    let data = [];
                    if (ser.data) {
                        data = ser.data;
                    } else if (ser.dataKey && this.chartData.length && ser.dataKey in this.chartData[0]) {
                        data = this.chartData.map(item => item[ser.dataKey]);
                    }

                    if (data.length < 1) {
                        return;
                    } else {
                        this.options.labels.push(ser.label || ser.dataKey || undefined);
                        this.options.colors.push(ser.color || undefined);
                        this.options.fill = this.createGradient(ser.gradient);
                        this.series.push(data);
                    }
                });
                if (this.series.length < 1) {
                    this.options.noData.text = "No data available!";
                    this.options.noData.style.color = "rgb(255,0,0)";
                }
            }
        },
        // Function to create Apex gradient from css gradient
        createGradient(obj) {
            const { color1, color2, opacity1, opacity2, deg } = obj;
            return {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    type: "horizontal",
                    shadeIntensity: 1,
                    gradientToColors: [color1, color2],
                    inverseColors: true,
                    opacityFrom: opacity1 || 1,
                    opacityTo: opacity2 || 1,
                    stops: [0, 50, 100],
                    colorStops: [
                        {
                            offset: 0,
                            color: color1,
                            opacity: opacity1
                        },
                        {
                            offset: 100,
                            color: color2,
                            opacity: opacity2
                        }
                    ],
                    angle: deg
                }
            };
        }
    },
    watch: {
        data: {
            handler(val) {
                this.chartData = val;
                this.series = [];
                this.options = { labels: [], colors: [], ...this.options };
                this.populateGraph();
            },
            deep: true
        }
    }
};
</script>
