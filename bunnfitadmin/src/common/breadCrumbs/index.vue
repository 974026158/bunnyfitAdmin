<template>
  <div class="wrapper">
    <h3
      v-for="item in levelList"
      :key="item.path"
      v-if="item.meta.title"
      :to="item.redirect || item.path"
    >
      {{ item.meta.title }}
    </h3>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      // 定义一个空
      levelList: null
    };
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.getBreadcrumb();
    }
  },
  computed: {},
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.meta.title);
      this.levelList = matched;
    }
  },
  created() {},
  mounted() {
    this.getBreadcrumb();
  }
};
</script>
<style lang="scss" type="text/css" scoped>
.wrapper {
  h3 {
    font-size: 21px;
    color: #555;
    text-align: left;
    vertical-align: middle;
    height: 29px;
    line-height: 29px;
    font-family: "PingFangSC";
    font-weight: 600;
  }
}
</style>
