<template>
  <!-- 活跃情况的查看页面    element+iview-->
  <div class="showActiveSituation">
    <!--场馆名称      场馆地址     场馆编号  -->
    <div class="fieldBuilding_SerialNumbercem_Address">
      <p class="fieldBuilding">
        场馆名称&nbsp;:&nbsp;&nbsp;<b>金新城悦府店</b>
      </p>
      <p class="SerialNumbercem">
        场馆地址&nbsp;:&nbsp;&nbsp;<b>江苏省/苏州市/张家港</b>
      </p>
      <p class="Address">场馆编号&nbsp;:&nbsp;&nbsp;<b>SZ001</b></p>
    </div>
    <!-- 高级搜索 -->
    <div class="advancedSearch">
      <div class="advancedSearch_Top">
        <p>高级搜索</p>
        <span class="symbol">?</span>
      </div>
      <!--  -->
      <Header>
        <div class="headerConge">
          <b>门店搜索</b>
          <Input
            search
            placeholder="请输入场馆编号/场馆名称"
            class="headerInputg"
          />
          <b>场馆地址</b>
          <!-- 三级联动 -->
          <Cascader :data="data" v-model="value5"></Cascader>
          <Button
            style="margin-right:24px;height:100%;margin-top:-6px;width:97px;margin-left:66px"
            >重置</Button
          >
          <Button type="primary" style="height:100%;margin-top:-6px;width:97px"
            >搜索</Button
          >
        </div>
      </Header>
      <!--  -->
      <div class="approachNumber"></div>
    </div>
    <!-- 表格 -->
    <div id="TableConConStucke">
      <Table border :columns="columns15" :data="data9">
        <template slot-scope="{ row }" slot="showSerial">
          <strong>{{ row.showSerial }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button
            type="primary"
            size="small"
            style="margin-right: 5px"
            @click="show()"
            >查看</Button
          >
        </template>
      </Table>
    </div>
    <!-- 分页div -->
    <div class="pagingDive">
      <em>总计200条记录</em>
    </div>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";
import "iview/dist/styles/iview.css";
export default {
  components: {},
  props: {},
  data() {
    return {
      value5: [],
      data: [
        {
          value: "beijing",
          label: "北京",
          children: [
            {
              value: "gugong",
              label: "故宫"
            },
            {
              value: "tiantan",
              label: "天坛"
            },
            {
              value: "wangfujing",
              label: "王府井"
            }
          ]
        },
        {
          value: "jiangsu",
          label: "江苏",
          children: [
            {
              value: "nanjing",
              label: "南京",
              children: [
                {
                  value: "fuzimiao",
                  label: "夫子庙"
                }
              ]
            },
            {
              value: "suzhou",
              label: "苏州",
              children: [
                {
                  value: "zhuozhengyuan",
                  label: "拙政园"
                },
                {
                  value: "shizilin",
                  label: "狮子林"
                }
              ]
            }
          ]
        }
      ],
      columns15: [
        {
          title: "序号",
          slot: "showSerial"
        },
        {
          title: "用户ID",
          key: "showId"
        },
        {
          title: "用户昵称",
          key: "showNickname"
        },
        {
          title: "手机号码",
          key: "showIphone"
        },
        {
          title: "性别",
          key: "showSex"
        },
        {
          title: "用户类型",
          slot: "showType"
        },
        {
          title: "当前会卡",
          key: "showVip"
        },
        {
          title: "进场次数",
          key: "showTime"
        },
        {
          title: "最近进场日期",
          key: "showRecentlyTime"
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      data9: [
        {
          showSerial: "-",
          showId: "-",
          showNickname: "-",
          iphonecem: "-",
          showSex: "-",
          showType: "-",
          showVip: "-",
          showTime: "-",
          showRecentlyTime: "-"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    show() {
      alert();
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" type="text/css" scoped>
.showActiveSituation {
  /*  场馆名称      场馆地址     场馆编号*/
  .fieldBuilding_SerialNumbercem_Address {
    width: 100%;
    height: 88px;
    background: #fff;
    padding-left: 44px;
    padding-right: 50px;
    line-height: 88px;
    p {
      font-size: 15px;
      color: #555;
      b {
        font-size: 15px;
        font-weight: 500;
        color: #7c7c7c;
      }
    }
    .fieldBuilding {
      float: left;
      margin-right: 551px;
    }
    .SerialNumbercem {
      float: left;
    }
    .Address {
      float: right;
    }
  }
  /* 高级搜索 */
  .advancedSearch {
    width: 100%;
    height: 288px;
    background: #fff;
    margin-top: 24px;
    .advancedSearch_Top {
      width: 100%;
      height: 87px;
      border-bottom: 1px solid #ccc;
      line-height: 87px;
      font-size: 15px;
      color: #555;
      padding-left: 44px;
      text-align: left;
      padding-right: 50px;
      p {
        float: left;
      }
      .symbol {
        float: right;
        width: 14px;
        height: 14px;
        background: #ccc;
        border-radius: 50%;
        line-height: 17px;
        text-align: center;
        color: #fff;
        margin-top: 39px;
        display: table-cell;
        vertical-align: middle;
      }
    }
    .approachNumber {
      width: 100%;
      height: 44px;
      background: #555;
      padding-left: 44px;
    }
  }
  .ivu-layout-header {
    height: 44px;
    background: #fff;
    margin-top: 44px;
    margin-bottom: 44px;
    .headerConge {
      width: 100%;
      height: 100%;
      line-height: 44px;
      text-align: left;
      b {
        font-size: 15px;
        font-family: "PingFangSC";
        font-weight: 500;
        color: rgba(85, 85, 85, 1);
        margin-right: 28px;
      }
      /* 输入框 */
      .ivu-input-wrapper/deep/ {
        height: 111%;
        width: 56%;
        margin-right: 28px;
        .ivu-input {
          height: 90%;
        }
        .ivu-input-icon {
          line-height: 46px;
          font-size: 20px;
        }
      }
      /* 三级联动 */
      .ivu-cascader/deep/ {
        width: 13.888888%;
        display: inline-block;
        height: 111%;
        margin-right: 28px;
        .ivu-cascader-rel {
          height: 100%;
        }
        .ivu-input-wrapper {
          height: 100%;
        }
        .ivu-input {
          height: 90%;
        }
        .ivu-cascader-arrow {
          top: 47%;
        }
      }
    }
  }
  /* 表格 */
  #TableConConStucke {
    width: 100%;
    height: 631px;
    overflow: auto;
    margin-top: 24px;
    position: relative;
    background: #fff;
    .ivu-table-wrapper/deep/ {
      .ivu-table-border td,
      .ivu-table-border th {
        line-height: 20px;
        text-align: center;
        height: 70px;
        font-size: 15px;
        color: #555555;
        width: 100%;
      }
      .ivu-btn-small {
        background: none;
        border: none;
        color: #688ef7;
      }
      .ivu-table-cell {
        padding-left: 0;
        padding-right: 0;
      }
      .ivu-table table {
        width: 100% !important;
      }
    }
  }
  /* 分页 */
  .pagingDive {
    width: 100%;
    height: 140px;
    background: #fff;
    padding-left: 32px;
    line-height: 140px;
    em {
      font-size: 15px;
      font-family: "PingFangSC";
      font-weight: 400;
      color: rgba(104, 142, 247, 1);
      letter-spacing: 1px;
      float: left;
    }
  }
}
</style>
