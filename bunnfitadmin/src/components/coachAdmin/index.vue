<template>
  <!-- 教练管理  element+iview -->
  <div class="coachAdmin">
    <span class="newCoach" @click="alertTheNewCoach()">新建教练</span>
    <!-- 内容区   门店搜索  教练搜索-->
    <div class="storeTheSearch_And_coachSearch">
      <!-- 门店 -->
      <div class="headerConCon_coachSearch">
        <b>门店搜索</b>
        <Input
          search
          placeholder="请输入场馆编号/场馆名称"
          class="headerInput"
        />
        <b>场馆地址</b>
        <!-- 三级联动 -->
        <Cascader :data="data" v-model="value11"></Cascader>
        <Button
          style="margin-right:24px;height:100%;margin-top:-6px;width:97px;margin-left:63px"
          >重置</Button
        >
        <Button type="primary" style="height:100%;margin-top:-6px;width:97px"
          >搜索</Button
        >
      </div>
      <!-- 教练 -->
      <div class="headerConCon_storeTheSearch">
        <b>教练搜索</b>
        <Input
          search
          placeholder="请输入教练姓名/昵称/手机号码"
          class="headerInput"
        />
      </div>
    </div>
    <!--  -->
    <!--  -->
    <!--  -->
    <!-- 表格 -->
    <div id="TableConConStuck">
      <Table border :columns="columns12" :data="data6">
        <template slot-scope="{ row }" slot="serialNumberc">
          <strong>{{ row.serialNumberc }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button
            type="primary"
            size="small"
            style="margin-right: 5px"
            @click="show(index)"
            >查看</Button
          >
          <Button type="primary" size="small">编辑</Button>
          <Button type="error" size="small" @click="remove(index)">删除</Button>
        </template>
      </Table>
    </div>
    <!--  -->
    <!--  -->
    <!--  -->
    <!-- 占位置的div -->
    <div class="sittingDiv"></div>
    <!--  -->
    <!--  -->
    <!-- 分页div -->
    <div class="pagingDiv">
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
      value11: [],
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
      // 表格
      columns12: [
        {
          title: "序号",
          slot: "serialNumberc"
        },
        {
          title: "场馆编号",
          key: "venuesNumberc"
        },
        {
          title: "场馆名称",
          key: "fieldBuildingBamec"
        },
        {
          title: "场馆地址",
          key: "theVenueAddressc"
        },
        {
          title: "教练姓名",
          key: "coachNamec"
        },
        {
          title: "教练昵称",
          key: "coachNickname"
        },
        {
          title: "手机号",
          key: "iphonec"
        },
        {
          title: "类型",
          key: "typec"
        },
        {
          title: "状态",
          key: "stateStatec"
        },
        {
          title: "备注",
          key: "remarkc"
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      data6: [
        {
          serialNumberc: "S01",
          venuesNumberc: "SZ001",
          fieldBuildingBamec: "场馆名称",
          theVenueAddressc: "场馆地址",
          coachNamec: "教练姓名",
          coachNickname: "教练昵称",
          iphonec: 18602237500,
          typec: "私人教练",
          stateStatec: "上架中",
          remarkc: "-"
        },
        {
          serialNumberc: "S01",
          venuesNumberc: "SZ001",
          fieldBuildingBamec: "场馆名称",
          theVenueAddressc: "场馆地址",
          coachNamec: "教练姓名",
          coachNickname: "教练昵称",
          iphonec: 18602237500,
          typec: "团体课教练",
          stateStatec: "上架中",
          remarkc: "-"
        },
        {
          serialNumberc: "S01",
          venuesNumberc: "SZ001",
          fieldBuildingBamec: "场馆名称",
          theVenueAddressc: "场馆地址",
          coachNamec: "教练姓名",
          coachNickname: "教练昵称",
          iphonec: 18602237500,
          typec: "私人教练",
          stateStatec: "上架中",
          remarkc: "-"
        },
        {
          serialNumberc: "S01",
          venuesNumberc: "SZ001",
          fieldBuildingBamec: "场馆名称",
          theVenueAddressc: "场馆地址",
          coachNamec: "教练姓名",
          coachNickname: "教练昵称",
          iphonec: 18602237500,
          typec: "团体课教练",
          stateStatec: "上架中",
          remarkc: "-"
        },
        {
          serialNumberc: "S01",
          venuesNumberc: "SZ001",
          fieldBuildingBamec: "场馆名称",
          theVenueAddressc: "场馆地址",
          coachNamec: "教练姓名",
          coachNickname: "教练昵称",
          iphonec: 18602237500,
          typec: "私人教练",
          stateStatec: "上架中",
          remarkc: "-"
        },
        {
          serialNumberc: "S01",
          venuesNumberc: "SZ001",
          fieldBuildingBamec: "场馆名称",
          theVenueAddressc: "场馆地址",
          coachNamec: "教练姓名",
          coachNickname: "教练昵称",
          iphonec: 18602237500,
          typec: "团体课教练",
          stateStatec: "上架中",
          remarkc: "-"
        },
        {
          serialNumberc: "S01",
          venuesNumberc: "SZ001",
          fieldBuildingBamec: "场馆名称",
          theVenueAddressc: "场馆地址",
          coachNamec: "教练姓名",
          coachNickname: "教练昵称",
          iphonec: 18602237500,
          typec: "私人教练",
          stateStatec: "上架中",
          remarkc: "-"
        },
        {
          serialNumberc: "S01",
          venuesNumberc: "SZ001",
          fieldBuildingBamec: "场馆名称",
          theVenueAddressc: "场馆地址",
          coachNamec: "教练姓名",
          coachNickname: "教练昵称",
          iphonec: 18602237500,
          typec: "团体课教练",
          stateStatec: "上架中",
          remarkc: "-"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    //   跳转新建教练页面
    alertTheNewCoach() {
      this.$router.push({ path: "/coachAdmin/theNewCoach" });
    },
    // 表格
    //   跳查看教练页面
    show() {
      this.$router.push({ path: "/coachAdmin/lookOverCoach" });
    },
    remove(index) {
      this.data6.splice(index, 1);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" type="text/css" scoped>
.coachAdmin {
  .newCoach {
    position: absolute;
    top: 135px;
    right: 80px;
    font-size: 15px;
    color: #fff;
    display: block;
    width: 132px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    background: #688ef7;
    border-radius: 4px;
    cursor: pointer;
  }
  /* 教练搜索 门店搜索 */
  .storeTheSearch_And_coachSearch {
    width: 100%;
    height: 220px;
    background: #fff;
    padding-top: 44px;
    padding-left: 44px;
    /* 门店 */
    .headerConCon_coachSearch {
      width: 100%;
      height: 44px;
      line-height: 44px;
      text-align: left;
      margin-bottom: 44px;
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
        width: 54%;
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
    /* 教练 */
    .headerConCon_storeTheSearch {
      width: 100%;
      height: 44px;
      line-height: 44px;
      text-align: left;
      margin-bottom: 44px;
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
        width: 67.5%;
        margin-right: 28px;
        .ivu-input {
          height: 90%;
        }
        .ivu-input-icon {
          line-height: 46px;
          font-size: 20px;
        }
      }
    }
  }
  /* 表格 */
  #TableConConStuck {
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
  /* 占位置的div */
  .sittingDiv {
    width: 100%;
    height: 69px;
    border-bottom: 1px solid #dcdee2;
    background: #fff;
  }
  /* 分页 */
  .pagingDiv {
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
