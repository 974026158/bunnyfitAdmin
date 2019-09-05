<template>
  <!-- 来客登记   iview -->
  <div class="guestRegistration">
    <span class="newCoach" @click="handleClick">新建登记</span>
    <Layout>
      <Header>
        <div class="headerCong">
          <b>门店搜索</b>
          <Input
            search
            placeholder="请输入场馆编号/场馆名称"
            class="headerInputg"
          />
          <b>场馆地址</b>
          <!-- 三级联动 -->
          <Cascader :data="data" v-model="value2"></Cascader>
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
    <div id="TableCon">
      <Table border :columns="columns13" :data="data7">
        <template slot-scope="{ row }" slot="serialNumberc" style="height:70px">
          <strong>{{ row.serialNumberc }}</strong>
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
    <!-- 新建表单 -->
    <CreateForm :isFlag="flag"></CreateForm>
    <!-- 查看表单 -->
    <LookForm :isFlagl="flagl"></LookForm>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";
import "iview/dist/styles/iview.css";
import CreateForm from "../../common/createNewFormBox/index";
import LookForm from "../../common/lookNewFormBox/index";
export default {
  components: {
    CreateForm,
    LookForm
  },
  props: {},
  data() {
    return {
      value2: [],
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
      columns13: [
        {
          title: "编号",
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
          title: "用户姓名",
          key: "coachNamec"
        },
        {
          title: "用户昵称",
          key: "coachNickname"
        },
        {
          title: "手机号码",
          key: "iphonec"
        },
        {
          title: "推荐人",
          key: "referrer"
        },
        {
          title: "登记时间",
          key: "registrationTime"
        },
        {
          title: "门店状态",
          key: "remarkc"
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
          serialNumberc: "-",
          venuesNumberc: "-",
          fieldBuildingBamec: "-",
          theVenueAddressc: "-",
          coachNamec: "-",
          coachNickname: "-",
          iphonec: "-",
          referrer: "-",
          registrationTime: "-",
          remarkc: "-"
        }
      ],
      flag: false,
      flagl: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    show() {
      this.flagl = !this.flagl;
    },
    handleClick() {
      this.flag = !this.flag;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" type="text/css" scoped>
.guestRegistration {
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
    .headerCong {
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
  #TableCon {
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
}
</style>
