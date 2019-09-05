<template>
  <!-- 查看会员 element-->
  <div class="showVip">
    <h4><b style="color:red;font-size:17px;font-weight:900">*</b>为必填项</h4>
    <!-- 内容区 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <!-- 会卡价格 -->
          <div class="vipPrice">
            <h3>
              <b style="color:red;font-size:17px;font-weight:900">*</b>会卡价格
              :
            </h3>
            <el-input
              v-model="input"
              placeholder="1680"
              style="width:524px;height:100%"
            ></el-input>
          </div>
          <!-- 有效期输入框 -->
          <div class="vipPrice periodOfValidity">
            <h3>
              <b style="color:red;font-size:17px;font-weight:900">*</b>有效期 :
            </h3>
            <el-input
              v-model="input1"
              placeholder="12 (月)"
              style="width:524px;height:100%"
            ></el-input>
          </div>
          <!-- 有效期 备注 -->
          <div class="vipPrice periodOfValiditySize">
            <h3>
              <b style="color:red;font-size:17px;font-weight:900">*</b>有效期 :
            </h3>
            <el-input
              type="textarea"
              placeholder="请输入备注信息"
              v-model="textarea"
              maxlength="300"
              show-word-limit
              style="width:524px;"
              resize="none"
              class="aaaaaaaaaaaaa"
            >
            </el-input>
          </div>
          <!-- 门店状态 开关按钮-->
          <div class="storesState">
            <h3>
              <b style="color:red;font-size:17px;font-weight:900">*</b>门店状态:
            </h3>
            <el-switch
              v-model="valueBtn"
              active-color="#688EF7"
              inactive-color="#ccc"
              :width="51"
              :height="31"
            >
            </el-switch>
            <em v-if="valueBtn == false">关闭</em>
            <em v-if="valueBtn == true">开启</em>
          </div>
          <!-- 操作记录 -->
          <div class="operating">操作记录</div>
          <!-- 显示记录 -->
          <div class="showRecorded sr">
            <div class="showRecordedTop set">
              <span class="showRecordedTop_Size btnSpans"
                >运营-小朋 将[人数载荷]由 35 改为40</span
              >
              <span class="showRecordedTop_Time btnSpans"
                >2019-08-12 23:21:01</span
              >
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
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
      input: "",
      input1: "",
      textarea: "",
      valueBtn: false
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
.showVip {
  h4 {
    position: absolute;
    top: 157px;
    right: 80px;
    font-size: 15px;
    color: #555555;
  }
  /* layout布局 */
  .bg-purple-dark {
    background: #fff;
    text-align: left;
    padding-top: 40px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  /* 会卡价格 */
  .vipPrice {
    padding-left: 44px;
    width: 100%;
    height: 44px;
    line-height: 44px;
    margin-bottom: 20px;
    h3 {
      font-size: 15px;
      color: #555555;
      width: 85px;
      display: inline-block;
      margin-right: 20px;
    }
    /deep/.el-input__inner {
      &::placeholder {
        color: #000;
      }
    }
  }
  .periodOfValiditySize {
    height: 216px;
    h3 {
      height: 100%;
      line-height: 216px;
    }
    .aaaaaaaaaaaaa {
      height: 216px;
      /deep/.el-textarea__inner {
        height: 100%;
      }
    }
    /deep/.el-textarea .el-input__count {
      background: none;
    }
  }
  /* 门店状态 */
  .storesState {
    width: 100%;
    height: 31px;
    margin-top: 50px;
    line-height: 31px;
    margin-bottom: 29px;
    padding-left: 44px;
    h3 {
      font-size: 15px;
      color: #555555;
      width: 85px;
      display: inline-block;
      height: 100%;
      float: left;
      margin-right: 20px;
    }
    em {
      width: 31px;
      height: 21px;
      font-size: 15px;
      font-family: "PingFangSC";
      font-weight: 600;
      color: rgba(180, 180, 180, 1);
      margin-left: 14px;
      height: 100%;
    }
    /* /deep/.el-switch__core {
      height: 31px;
      border-radius: 16px;
    } */
    /* /deep/.el-switch__core:after {
      height: 28px;
    } */
  }
  /* 操作记录 */
  .operating {
    width: 100%;
    height: 68px;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    line-height: 68px;
    font-size: 15px;
    color: #555555;
    padding-left: 55px;
  }
  /* 显示记录 */
  .showRecorded {
    width: 100%;
    max-height: 134px;
    border-bottom: 1px solid #e6e6e6;
    overflow: auto;
    .showRecordedTop {
      width: 100%;
      height: 65px;
      line-height: 65px;
      padding-left: 55px;
      padding-right: 44px;
      .btnSpans {
        font-size: 15px;
        font-family: "PingFangSC";
        font-weight: 600;
        color: rgba(100, 100, 100, 1);
      }
      .showRecordedTop_Size {
        float: left;
      }
      .showRecordedTop_Time {
        float: right;
      }
    }
  }
}
</style>
