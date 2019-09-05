<template>
  <!-- 查看教练  element -->
  <div class="lookOverCoach">
    <h4><b style="color:red;font-size:17px;font-weight:900">*</b>为必填项</h4>
    <!-- 内容区 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <!-- 认证信息输入框 -->
          <div class="vipPrice periodOfValiditySize">
            <h3>
              <b style="color:red;font-size:17px;font-weight:900">*</b>有效期 :
            </h3>
            <el-input
              type="textarea"
              placeholder="《CBBA认证高级私人教练认证》
  《SAIPU高级私人教练认证》"
              v-model="textarea"
              maxlength="300"
              show-word-limit
              style="width:524px;"
              resize="none"
              class="aaaaaaaaaaaaa"
            >
            </el-input>
          </div>
          <!-- 上传 -->
          <div class="poster">
            <h3>
              <b style="color:red;font-size:17px;font-weight:900">*</b>门店海报
              :
            </h3>
            <!-- 图片上传 -->
            <div class="posterBackground">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreviewl"
                :on-remove="handleRemovel"
                :limit="1"
                :class="{ hide: hideUploadl }"
                :on-change="handleChangel"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisiblel">
                <img width="100%" :src="dialogImageUrll" alt="" />
              </el-dialog>
            </div>
          </div>
          <!-- 备注输入框 -->
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            style="margin-bottom:20px;padding-left:35px"
          >
            <el-form-item label="教练备注：" prop="name">
              <el-input
                v-model="ruleForm.name"
                style="width:524px;margin-left:16px"
                placeholder="请输入教练备注"
              ></el-input>
            </el-form-item>
          </el-form>
          <!-- 状态 -->
          <!-- 教练状态 开关按钮-->
          <div class="storesState">
            <h3>
              <b style="color:red;font-size:17px;font-weight:900">*</b>教练状态:
            </h3>
            <el-switch
              v-model="valueBtnl"
              active-color="#688EF7"
              inactive-color="#ccc"
              :width="51"
              :height="31"
            >
            </el-switch>
            <em v-if="valueBtnl == false">关闭</em>
            <em v-if="valueBtnl == true">开启</em>
          </div>
          <!-- 操作记录 -->
          <div class="operating">操作记录</div>
          <!-- 显示记录 -->
          <div class="showRecorded sr">
            <div class="showRecordedTop set">
              <span class="showRecordedTop_Size btnSpans"
                >运营-小朋 新建[SZ001/金新城府店]-[张大/大熊]</span
              >
              <span class="showRecordedTop_Time btnSpans"
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
              @click="returnToUpperLevell()"
            />
            <input
              type="button"
              value="提交"
              style="background:rgba(104,142,247,1);margin-left:12px;"
              class="btn"
            />
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
import "../../style/uoLoad.css";
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Bread
  },
  props: {},
  data() {
    return {
      textarea: "",
      hideUploadl: false,
      limitCountl: 1,
      dialogVisiblel: false,
      dialogImageUrll: "",
      ruleForm: {
        name: ""
      },
      rules: {
        name: [{ required: true, message: "请输入教练备注", trigger: "blur" }]
      },
      valueBtnl: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 图片上传事件
    handleRemovel(file, fileList) {
      // eslint-disable-next-line no-console
      console.log(file, fileList);
      this.hideUploadl = fileList.length >= this.limitCountl;
    },
    handlePictureCardPreviewl(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleChangel(fileList) {
      this.hideUploadl = fileList.length >= this.limitCountl;
      this.hideUploadl = true;
    },
    // 返回上一级
    returnToUpperLevell() {
      this.$router.go(-1);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" type="text/css" scoped>
.lookOverCoach {
  h4 {
    position: absolute;
    top: 157px;
    right: 80px;
    font-size: 15px;
    color: #555555;
  }
  /* 内容区布局模块 */
  .bg-purple-dark {
    background: #fff;
    text-align: left;
    padding-top: 24px;
  }
  .grid-content {
    min-height: 36px;
  }
  /* 认证信息输入框 */
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
  }
  /* 大框 */
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
  /* 上传 */
  .poster {
    width: 100%;
    height: 116px;
    line-height: 44px;
    padding-left: 44px;
    margin-bottom: 40px;
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
  /* 教练状态 */
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
  /* 提交按钮 */
  .submitBtn {
    width: 100%;
    height: 132px;
    text-align: right;
    padding-right: 44px;
    padding-top: 40px;
    background: #fff;
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
  /deep/.el-form-item__label {
    font-size: 15px;
    color: #555;
    padding: 0 8px 0 0;
  }
  /deep/.el-form-item__error {
    left: 15px;
  }
}
</style>
