<template>
    <div>
        <chart type="area" :options="options" :series="series"></chart>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
export default {
    name: 'ZekAreaChart',
    components: {
        chart : VueApexCharts
    },
    props: {
        height: [String, Number]
    },
    data() {
        return {
            series: [{
                name: 'series-1',
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }],
            options: {
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
            },
        }
    }
}
</script>