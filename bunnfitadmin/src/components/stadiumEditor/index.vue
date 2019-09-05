<template>
  <!-- 场馆编辑 iview + element-->
  <div class="stadiumEditor">
    <h4><b style="color:red;font-size:17px;font-weight:900">*</b>为必填项</h4>
    <!-- <Bread></Bread> -->
    <!-- 内容区 -->
    <Layout>
      <Content>
        <!-- 人数荷载 -->
        <div class="theNumberOfLoad">
          <h3>
            <b style="color:red;font-size:17px;font-weight:900">*</b>人数荷载 :
          </h3>
          <Input
            v-model="value14"
            clearable
            style="width: 252px;margin-left:20px;"
          />
        </div>
        <!-- 上传 -->
        <div class="poster">
          <h3>
            <b style="color:red;font-size:17px;font-weight:900">*</b>门店海报 :
          </h3>
          <!-- 图片上传 -->
          <div class="posterBackground">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :limit="limitCount"
              :class="{ hide: hideUpload }"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
          </div>
        </div>
        <!-- 门店状态 开关按钮-->
        <div class="storesState">
          <h3>
            <b style="color:red;font-size:17px;font-weight:900">*</b>门店状态 :
          </h3>
          <i-switch
            v-model="switch1"
            @on-change="change"
            style="float:left;width:55px;height:31px"
          />
          <em v-if="switch1 == false">关闭</em>
          <em v-if="switch1 == true">开启</em>
        </div>
        <!-- 操作记录 -->
        <div class="operating">操作记录</div>
        <!-- 显示记录 -->
        <div class="showRecorded">
          <div class="showRecordedTop">
            <span class="showRecordedTop_Size btnSpan"
              >运营-小朋 将[人数载荷]由 35 改为40</span
            >
            <span class="showRecordedTop_Time btnSpan"
              >2019-08-12 23:21:01</span
            >
          </div>
        </div>
        <!-- 提交按钮 -->
        <div class="submitBtn">
          <input
            type="button"
            value="返回"
            style="background:rgba(255,255,255,1);border:1px solid #ccc"
            class="btn"
          />
          <input
            type="button"
            value="提交"
            style="background:rgba(104,142,247,1);margin-left:12px;"
            class="btn"
          />
        </div>
      </Content>
    </Layout>
  </div>
</template>
<script>
import "element-ui/lib/theme-chalk/index.css";
import "iview/dist/styles/iview.css";
import Bread from "../../common/breadCrumbs/index";
import "../../style/uoLoad.css";

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Bread
  },
  props: {},
  data() {
    return {
      value14: "Hello World",
      //图片上传
      dialogImageUrl: "",
      dialogVisible: false,
      hideUpload: false,
      limitCount: 8,
      switch1: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 图片上传事件
    handleRemove(file, fileList) {
      // eslint-disable-next-line no-console
      console.log(file, fileList);
      // this.hideUpload = fileList.length >= this.limitCount;
      this.hideUpload = false;
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleExceed(files, fileList) {
      // eslint-disable-next-line no-console
      console.log(files, fileList, "已到达上传数量");
      this.$message({
        showClose: true,
        message: "一次只可以上传8张图片",
        type: "warning"
      });
      this.hideUpload = true;
      this.hideUpload = fileList.length >= this.limitCount;
    },
    // 开关
    change(status) {
      // this.$Message.info("开关状态：" + status);
      // eslint-disable-next-line no-console
      console.log(status);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" type="text/css" scoped>
.stadiumEditor {
  h4 {
    position: absolute;
    top: 157px;
    right: 80px;
    font-size: 15px;
    color: #555555;
  }
  /* 内容区 */
  .ivu-layout-content {
    max-height: 800px;
    background: #fff;

    padding-top: 40px;
    text-align: left;
    /* 人数荷载 */
    .theNumberOfLoad {
      padding-left: 44px;
      width: 100%;
      height: 44px;
      line-height: 44px;
      margin-bottom: 30px;
      h3 {
        font-size: 15px;
        color: #555555;
        width: 85px;
        display: inline-block;
      }
      .ivu-input-wrapper/deep/ {
        height: 111%;
        .ivu-input {
          height: 90%;
        }
        .ivu-input-icon {
          line-height: 44px;
          cursor: pointer;
        }
      }
    }
    /* 上传 */
    .poster {
      width: 100%;
      height: 252px;
      line-height: 44px;
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
      .posterBackground/deep/ {
        width: 524px;
        height: 100%;
        float: left;
        padding-top: 13px;
        .el-upload--picture-card {
          width: 116px;
          height: 116px;
          line-height: 130px;
        }
        .el-upload-list--picture-card .el-upload-list__item {
          width: 116px;
          height: 116px;
        }
        .el-upload--picture-card i {
          font-weight: 900;
          font-size: 40px;
        }
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
      .ivu-switch:after {
        width: 28px;
        height: 28px;
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
        .btnSpan {
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
    /* 提交按钮 */
    .submitBtn {
      width: 100%;
      height: 132px;
      text-align: right;
      padding-right: 44px;
      padding-top: 40px;
      .btn {
        width: 97px;
        height: 44px;
        border: none;
        cursor: pointer;
        font-size: 15px;
        color: rgba(85, 85, 85, 1);
        border-radius: 4px;
      }
    }
  }
}
</style>
