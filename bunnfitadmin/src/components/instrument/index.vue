<template>
  <!-- 仪表盘  element-->
  <el-container>
    <el-header>
      <!-- 统计  输入框 按钮-->
      <p>{{ headline.statistics }}</p>
      <el-input
        v-model="input"
        :placeholder="headline.inputPlaceholder"
      ></el-input>
      <el-button type="primary">{{ headline.btnOne }}</el-button>
      <el-button type="warning">{{ headline.btnTwo }}</el-button>
    </el-header>
    <!-- 今日统计 单独 -->
    <el-row>
      <el-col :span="24" class="statistics"
        ><div class="grid-content bg-purple-dark">
          {{ headline.statisticsDay }}
        </div></el-col
      >
    </el-row>
    <!-- 今日统计  三张模块 -->
    <el-row :gutter="20" id="statisticsCon">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <!-- 本月统计   单独 -->
    <el-row>
      <el-col :span="24" class="statistics"
        ><div class="grid-content bg-purple-dark">
          {{ headline.monthDay }}
        </div></el-col
      >
    </el-row>
    <!-- 本月统计  三张模块 -->
    <el-row :gutter="20" id="monthCon">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <!-- 大模块   三对一   会籍人数-->
    <div id="Three_And_One">
      <!-- left -->
      <div
        class="Three_And_One_Left"
        style="float:left;width:32.7%;height:100%;"
      >
        <el-aside
          width="100%"
          class="theMembershipMumber"
          style="margin-bottom:24px;"
          >{{ largeModule.theMembership }}</el-aside
        >
        <el-aside
          width="100%"
          class="orderConversionRate"
          style="margin-bottom:24px;"
          >{{ largeModule.orderConver }}</el-aside
        >
        <el-aside width="100%" class="repeatPurchases">{{
          largeModule.repeat
        }}</el-aside>
      </div>
      <!-- right -->
      <div
        class="Three_And_One_Right"
        style="float:right;width:66.37%;height:100%;"
      >
        <el-main
          style="width:100%;height:100%;background:#fff;border-radius:4px"
          >Main</el-main
        >
      </div>
    </div>
    <!-- 底部统计 -->
    <footer>
      <el-main class="footerStatistics">
        <!-- 会员卡  私教   训练营    top-->
        <div class="classifiedStatistic">
          <div class="classifiedStatistic_Size">
            <p>哈哈哈</p>
            <p>啊啊啊</p>
            <p>我问问</p>
          </div>
          <div class="classifiedStatistic_Input">
            <p>本月</p>
            <p>全年</p>
            <div class="block">
              <el-date-picker
                type="daterange"
                align="right"
                unlink-panels
                range-separator="——"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </div>
          </div>
        </div>
        <!-- 销售额趋势    bottom-->
        <div class="salesTrend"></div>
      </el-main>
    </footer>
  </el-container>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";
import "iview/dist/styles/iview.css";
export default {
  components: {},
  props: {},
  data() {
    return {
      input: "",
      headline: {
        statistics: "统计场馆",
        inputPlaceholder: "SZ001/张家港·bunnyfit-金新城悦府店",
        btnOne: "重置",
        btnTwo: "搜索",
        statisticsDay: "今日统计",
        monthDay: "本月统计"
      },
      largeModule: {
        theMembership: "会籍人数",
        orderConver: "下单转换率",
        repeat: "重复购买率"
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
.el-header {
  height: 132px !important;
  background: #fff;
  padding-top: 44px;
  padding-left: 44px;
  padding-right: 44px;
  text-align: left;
  margin-bottom: 24px;
  p {
    font-size: 15px;
    font-family: "PingFangSC";
    font-weight: 500;
    color: rgba(85, 85, 85, 1);
    display: block;
    float: left;
    margin-right: 28px;
    width: 61px;
    height: 21px;
    line-height: 21px;
    margin-top: 12px;
  }
  .el-input {
    width: 80%;
    height: 44px;
    .el-input__inner {
      height: 44px;
    }
  }
  .el-button--primary {
    width: 97px;
    margin-left: 28px;
    background: none;
    border: 1px solid #979797;
    color: #555;
  }
  .el-button--warning {
    width: 97px;
    background: #688ef7;
    border-color: #688ef7;
  }
}
.statistics {
  width: 100%;
  height: 44px !important;
  background: #fff !important;
  text-align: left;
  line-height: 44px;
  padding-left: 44px;
  font-size: 15px;
  font-family: "PingFangSC";
  font-weight: 500;
  color: rgba(85, 85, 85, 1);
}
.month {
  width: 100%;
  height: 44px !important;
  background: #fff !important;
  text-align: left;
  line-height: 44px;
  padding-left: 44px;
  font-size: 15px;
  font-family: "PingFangSC";
  font-weight: 500;
  color: rgba(85, 85, 85, 1);
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #fff;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-col-6 {
  width: 33.333333%;
  height: 176px;
}
.grid-content[data-v-4ab4f7ba] {
  min-height: 100%;
}
.el-aside {
  height: 220px;
  background: #fff;
  overflow: "";
  border-radius: 4px;
}
#Three_And_One {
  width: 100%;
  height: 708px;
}
footer {
  width: 100%;
  height: 600px;
  margin-top: 24px;
  .footerStatistics {
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 4px;
    padding: 0 !important;
    .classifiedStatistic {
      width: 100%;
      height: 67px;
      border-bottom: 1px solid #e6e6e6;
      padding-left: 44px;
      padding-right: 44px;
      .classifiedStatistic_Size {
        width: 210px;
        height: 100%;
        float: left;
        display: inline-block;
        p {
          line-height: 67px;
          width: 46px;
          float: left;
          margin-right: 23px;
          font-size: 15px;
          font-family: "PingFangSC";
          font-weight: 600;
          color: rgba(24, 144, 255, 1);
        }
      }
      .classifiedStatistic_Input {
        width: 400px;
        height: 100%;
        float: right;
        display: inline-block;
        p {
          line-height: 67px;
          width: 46px;
          float: left;
          margin-right: 23px;
          font-size: 15px;
          font-family: "PingFangSC";
          font-weight: 600;
          color: #666;
        }
        .el-range-editor.el-input__inner {
          width: 253px;
          height: 44px;
          margin-top: 12px;
        }
      }
    }
    .salesTrend {
      width: 100%;
      height: 533px;
      background: #d3dce6;
      padding-top: 35px;
      padding-left: 42px;
      padding-right: 44px;
      float: left;
    }
  }
}
</style>
