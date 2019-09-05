<template>
  <!-- 体验手环   element+iview  -->
  <div class="experienceTheBracelet">
    <span class="newCoach" @click="handleClicke">新建手环</span>
    <Layout>
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
          <Cascader :data="data" v-model="value3"></Cascader>
          <Button
            style="margin-right:24px;height:100%;margin-top:-6px;width:97px;margin-left:66px"
            >重置</Button
          >
          <Button type="primary" style="height:100%;margin-top:-6px;width:97px"
            >搜索</Button
          >
        </div>
      </Header>
    </Layout>
    <!-- 表格 -->
    <div id="TableConConStucke">
      <Table border :columns="columns13" :data="data7">
        <template slot-scope="{ row }" slot="serialNumberce">
          <strong>{{ row.serialNumberce }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button
            type="primary"
            size="small"
            style="margin-right: 5px"
            @click="showeex()"
            >查看</Button
          >
          <Button type="primary" size="small">编辑</Button>
          <Button type="error" size="small" @click="remove(index)">删除</Button>
        </template>
      </Table>
    </div>
    <!-- 新建手环 -->
    <CreateEexperience :isFlage="flage"></CreateEexperience>
    <!-- 查看手环 -->
    <LookEeperinence :isFlaglex="flaglex"></LookEeperinence>
    <!-- 分页div -->
    <div class="pagingDive">
      <em>总计200条记录</em>
    </div>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";
import "iview/dist/styles/iview.css";
import CreateEexperience from "../../common/createEexperienceTheBracelet/index";
import LookEeperinence from "../../common/LookOverEexperienceTheBracelet/index";
export default {
  components: {
    CreateEexperience,
    LookEeperinence
  },
  props: {},
  data() {
    return {
      value3: [],
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
      columns13: [
        {
          title: "编号",
          slot: "serialNumberce"
        },
        {
          title: "场馆编号",
          key: "venuesNumberce"
        },
        {
          title: "场馆名称",
          key: "fieldBuildingBamece"
        },
        {
          title: "场馆地址",
          key: "theVenueAddressce"
        },
        {
          title: "手环名称",
          key: "coachNamece"
        },
        {
          title: "手环编号",
          key: "coachNicknamee"
        },
        {
          title: "创建时间",
          key: "iphonece"
        },
        {
          title: "状态",
          key: "stateStatece"
        },
        {
          title: "备注",
          key: "remarkce"
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      data7: [
        {
          serialNumberce: "-",
          venuesNumberce: "-",
          fieldBuildingBamece: "-",
          theVenueAddressce: "-",
          coachNamece: "-",
          coachNicknamee: "-",
          iphonece: "-",
          stateStatece: "-",
          remarkce: "-"
        }
      ],
      flage: false,
      flaglex: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    showeex() {
      this.flaglex = !this.flaglex;
    },
    handleClicke() {
      this.flage = !this.flage;
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
.experienceTheBracelet {
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
  .ivu-layout-header {
    height: 132px;
    background: #fff;
    padding-top: 44px;
    padding-bottom: 44px;
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
