<template>
  <!-- 会卡列表 iview-->
  <div class="stuckList">
    <span class="stuckListPosition">新建会卡</span>
    <!-- 门店   编号     -->
    <div class="subordinateToTheStores">
      <div class="subordinateToTheStores_Top">
        <p style="float:left">所属门店</p>
        <p style="float:right">场馆编号：SZ001</p>
      </div>
      <div class="subordinateToTheStores_Bottom">
        <span class="subordinateToTheStores_BottomName">
          场馆名称：
          <em style="color:#7C7C7C">金新城悦府店</em>
        </span>
        <span class="subordinateToTheStores_BottomLocation">
          场馆地址：
          <em style="color:#7C7C7C">江苏省/苏州市/张家港</em>
        </span>
      </div>
    </div>
    <!-- 表格 -->
    <div id="TableConConStuck">
      <Table border :columns="columns12" :data="data6">
        <template slot-scope="{ row }" slot="serialNumber">
          <strong>{{ row.serialNumber }}</strong>
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
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";
import "iview/dist/styles/iview.css";
import Bread from "../../common/breadCrumbs/index";

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Bread
  },
  props: {},
  data() {
    return {
      // 表格
      columns12: [
        {
          title: "序号",
          slot: "serialNumber"
        },
        {
          title: "会卡名称",
          key: "nameCard"
        },
        {
          title: "价格   (元)",
          key: "price"
        },
        {
          title: "状态",
          key: "stateState"
        },
        {
          title: "备注",
          key: "remark"
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
          serialNumber: "SZ001",
          nameCard: "月卡",
          price: "999",
          stateState: "上架中",
          remark: "-"
        },
        {
          serialNumber: "SZ002",
          nameCard: "年卡",
          price: "2999",
          stateState: "上架中",
          remark: "-"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    //   表格
    show() {
      this.$router.push({ path: "/cardManagement/stuckList/showVip" });
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
.stuckList {
  .stuckListPosition {
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
  //门店   编号
  .subordinateToTheStores {
    width: 100%;
    height: 133px;
    background: #fff;
    .subordinateToTheStores_Top {
      width: 100%;
      height: 66px;
      border-bottom: 1px solid #ccc;
      line-height: 66px;
      padding-left: 44px;
      padding-right: 56px;
      p {
        font-size: 15px;
        font-family: "PingFangSC";
        font-weight: 500;
        color: rgba(85, 85, 85, 1);
      }
    }
    .subordinateToTheStores_Bottom {
      width: 100%;
      height: 66px;
      line-height: 66px;
      padding-left: 44px;
      padding-right: 56px;
      .subordinateToTheStores_BottomName {
        font-size: 15px;
        font-family: "PingFangSC";
        font-weight: 500;
        color: rgba(85, 85, 85, 1);
        display: inline-block;
        float: left;
      }
      .subordinateToTheStores_BottomLocation {
        font-size: 15px;
        font-family: "PingFangSC";
        font-weight: 500;
        color: rgba(85, 85, 85, 1);
        display: inline-block;
      }
    }
  }
  /* 表格 */
  #TableConConStuck {
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
      .ivu-table-cell {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
}
</style>
