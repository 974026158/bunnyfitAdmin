<template>
  <el-container>
    <!-- 头部 -->
    <el-header height="88px">
      <div></div>
      <span>
        <span class="right_title"></span>
        <em>管理员</em>
      </span>
    </el-header>
    <el-container>
      <!-- 侧边导航区 -->
      <el-aside width="244px" padding-top="10px">
        <el-row class="tac" width="244px">
          <el-col :span="12" width="100%">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              background-color="#001529"
              text-color="#fff"
              active-text-color="#fff"
              router
            >
              <el-menu-item index="/instrument">
                <i class="el-icon-time"></i>
                <span slot="title">{{ titel.instrumentPanel }}</span>
              </el-menu-item>
              <el-submenu index="1">
                <template slot="title">
                  <i
                    class="el-icon-receiving
"
                  ></i>
                  <span>场馆管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/introduction">场馆简介</el-menu-item>
                  <el-menu-item index="/cardManagement">会卡管理</el-menu-item>
                  <el-menu-item index="/coachAdmin">教练管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i
                    class="el-icon-receiving
"
                  ></i>
                  <span>前台管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/guestRegistration"
                    >来客登记</el-menu-item
                  >
                  <el-menu-item index="/experienceTheBracelet"
                    >体验手环</el-menu-item
                  >
                  <el-menu-item index="/manualOpening">手动开门</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <!--  -->
              <el-submenu index="3">
                <template slot="title">
                  <i
                    class="el-icon-receiving
"
                  ></i>
                  <span>运营中心</span>
                </template>
                <!--  -->
                <el-menu-item index="/activeSituation">活跃情况</el-menu-item>
                <el-menu-item index="/ccessRecords">出入记录</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <!-- 内容区 -->
      <el-main>
        <div class="header">
          <Bread></Bread>
        </div>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import "element-ui/lib/theme-chalk/index.css";
import "iview/dist/styles/iview.css";
import Bread from "../breadCrumbs/index";
export default {
  name: "tabbar",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Bread
  },
  props: {},
  data() {
    return {
      titel: {
        instrumentPanel: "仪表盘"
      }
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" type="text/css" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-col-12 {
  width: 100%;
}
.el-header {
  display: inline-block;
  padding-top: 25px;
  padding-left: 44px;
  background: #001529;
  padding-right: 44px;
  div {
    width: 168px;
    height: 40px;
    line-height: 60px;
    background: url("../../assets/Logo/logo.png") no-repeat center center;
    background-size: cover;
    float: left;
    margin-right: 15px;
    border-radius: 5px;
  }
  span {
    display: inline-block;
    width: 105px;
    height: 40px;
    float: right;
    padding-left: 5px;
    padding-right: 5px;
    .right_title {
      width: 40px;
      height: 100%;
      border-radius: 50%;
      border: 1px solid #ccc;
      float: left;
      margin-right: 12px;
    }
    em {
      float: right;
      height: 30px;
      line-height: 45px;
      color: #fff;
      cursor: pointer;
    }
  }
}
/* 饿了么UI  选中样式 */
.el-menu-item:hover {
  background: #688ef7 !important;
}
.el-menu-item.is-active {
  background-color: #688ef7 !important;
}
.el-main[data-v-351268dc] {
  padding: 24px !important;
  text-align: none !important;
  line-height: 0 !important;
  .header {
    width: 100%;
    height: 88px;
    background: #fff;
    margin-bottom: 24px;
    padding-top: 30px;
    padding-left: 44px;
  }
}
</style>
