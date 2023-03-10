<template>
    <div class="loader-container w-100 h-100 justify-content-center align-items-center d-flex start-0 top-0" :class="fullScreen? 'position-fixed':'position-absolute'" :style="backgroundStyle">
        <div class="loader">
            <i class="fas fa-spinner fa-spin fa-3x" :style="loaderStyle"></i>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ZekLoader',
  props: {
    loaderStyle: Object,
    backgroundStyle: Object,
    fullScreen: Boolean
  }
}
</script>

<style>
    .loader-container {
        z-index: 10;
        background: #ffffff99;
    }
</style>
