<template>
    <date-time-picker
        :class="customClass"
        v-model="now"
        :type="type"
        :min-date="minDate"
        :max-date="maxDate"
        :format="format"
        :pattern="pattern"
        :height="height"
        @input="onChange"
        :style="styleObject"
        v-bind="extraProps"
    />
</template>

<script>
import DateTimePicker from "vue-drumroll-datetime-picker"; // https://www.plus-one.tech/vue-drumroll-datetime-picker/

import "./style.css";

export default {
    name: "ZekDrumroll",
    components: {
        DateTimePicker
    },
    props: {
        type: {
            type: String,
            default: 'datatime'
        },
        format: {
            type: String,
            required: false
        },
        customClass: {
            type: String,
            default: ""
        },
        pattern: {
            type: String,
            required: false
        },
        minDate: {
            type: String,
            required: false
        },
        maxDate: {
            type: String,
            required: false,
        },
        height: {
            type: String,
            default: "1em"
        },
        initialValue: {
            type: String,
            default: ''
        },
        styleObject: {
            type: Object,
            required: false,
        },
        extraProps: {
            type: Object,
            required: false,
        }
    },
    data() {
        return {
            now: this.initialValue?? Date.now()
        };
    },
    methods: {
        onChange(value) {
            this.$emit("onChange", value);
        }
    }
};
</script>

<style></style>
