<template>
  <!-- 会卡管理 iview-->
  <div class="cardManagement">
    <Layout>
      <Header>
        <div class="headerConCon">
          <b>关键词搜索</b>
          <Input
            search
            placeholder="请输入场馆编号/场馆名称"
            class="headerInput"
          />
          <b>场馆地址</b>
          <!-- 三级联动 -->
          <Cascader :data="data" v-model="value1"></Cascader>
          <Button
            style="margin-right:24px;height:100%;margin-top:-6px;width:97px"
            >重置</Button
          >
          <Button type="primary" style="height:100%;margin-top:-6px;width:97px"
            >搜索</Button
          >
        </div>
      </Header>
    </Layout>
    <!-- 表格 -->
    <div id="TableConCon">
      <Table border :columns="columns12" :data="data6">
        <template slot-scope="{ row }" slot="number" style="height:70px">
          <strong>{{ row.number }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button type="primary" size="small" @click="show()">查看</Button>
        </template>
      </Table>
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
      value1: [],
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
          title: "场馆编号",
          slot: "number"
        },
        {
          title: "场馆名称",
          key: "fieldBuildingName"
        },
        {
          title: "场馆地址",
          key: "address"
        },
        {
          title: "营业时间",
          key: "businessHours"
        },
        {
          title: "在架会卡",
          key: "willCardInTheFrame"
        },
        {
          title: "门店状态",
          key: "inFrontOfTheState"
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
          number: "SZ001",
          fieldBuildingName: "Bunnyfit-金新城悦府店",
          address: "江苏省 / 苏州市 / 张家港 暨阳东路611号-bunnyfit",
          businessHours: "09:00-22:00",
          willCardInTheFrame: 8,
          inFrontOfTheState: "进行中"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    show() {
      this.$router.push({ path: "/cardManagement/stuckList" });
      //   this.$Modal.info({
      //     title: "场馆信息",
      //     content: `场馆编号  : ${this.data6[index].number}<br>
      //     场馆名称  : ${this.data6[index].fieldBuildingName}<br>
      //     场馆地址  : ${this.data6[index].address}<br>
      //     营业时间  : ${this.data6[index].businessHours}<br>
      //     在架会卡  : ${this.data6[index].willCardInTheFrame}<br>
      //     门前状态  : ${this.data6[index].inFrontOfTheState}`
      //   });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" type="text/css" scoped>
.ivu-layout-header {
  height: 132px;
  background: #fff;
  padding-top: 44px;
  padding-bottom: 44px;
  .headerConCon {
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
      width: 59%;
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
#TableConCon {
  width: 100%;
  height: 771px;
  overflow: auto;
  margin-top: 24px;
  position: relative;
  .ivu-table-wrapper/deep/ {
    .ivu-table-border td,
    .ivu-table-border th {
      line-height: 20px;
      text-align: center;
      height: 70px;
      font-size: 15px;
      color: #555555;
    }
    .ivu-btn-small {
      background: none;
      border: none;
      color: #688ef7;
    }
  }
}
</style>
