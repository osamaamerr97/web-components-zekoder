<template>
    <vue-recaptcha
        ref="recaptcha"
        @verify="onVerify"
        @expired="onExpired"
        :loadRecaptchaScript="true"
        :sitekey="siteKey"
    />
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
export default {
    name: "ZekCaptcha",
    components: {
        VueRecaptcha
    },
    props: {
        siteKey: {
            type: String,
            required: true
        }
    },
    methods: {
        onVerify(response) {
            this.$emit("onVerify", response);
        },
        onExpired(e) {
            this.$emit("onExpired", e);
        }
    },
    beforeUnmount() {
        this.$refs.recaptcha?.reset();
    },
};
</script>
