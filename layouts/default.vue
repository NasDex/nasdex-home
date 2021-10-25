<template>
  <div :class="['layout-contianer', locale !== 'zh' ? 'en' : 'zh']">
    <nuxt />
  </div>
</template>
<script>
export default {
  computed: {
    locale() {
      return this.$store.state.locale;
    }
  },
  mounted() {
    this.$store.dispatch('setCurrentAddress');
  }
}
</script>
<style lang="scss">
.layout-contianer {
  display: flex;
  flex-direction: column;
}
.zh {
  font-family: ('PingFang', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol');
}
.en {
  font-family: 'PingFang'!important;
}
</style>
