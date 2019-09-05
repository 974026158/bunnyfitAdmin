<template>
  <div class="createNewFormBox">
    <!-- 隐藏的新建表单 element+iview-->
    <el-dialog title="新建登记" :visible.sync="dialogFormVisible">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="登记门店：" prop="name" class="el_btn_from">
          <el-input
            v-model="ruleForm.name"
            placeholder="请输入登记门店"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号码：" prop="iphone" class="el_btn_from"
          ><el-button
            type="success"
            style="float:right;background:#688EF7;width:97px"
            >校验</el-button
          >
          <el-input
            v-model="ruleForm.iphone"
            auto-complete="off"
            style="width:320px;display:block"
            placeholder="请输入手机号码"
          ></el-input>
          <!-- 手机号对应的三個P標籤 -->
          <div class="correspondingIphone">
            <p style="margin-bottom:16px">用户昵称：<i></i></p>
            <p style="margin-bottom:16px">用户ID：<i></i></p>
            <p>注册时间：<i></i></p>
          </div>
        </el-form-item>
        <el-form-item
          label="备注："
          prop="desc"
          style="margin-bottom:65px"
          class="el_btn_from"
        >
          <el-input
            v-model="ruleForm.desc"
            placeholder="请输入备注信息 (选填)"
          ></el-input>
        </el-form-item>
        <el-form-item class="bottomBtn">
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            style="background:#688EF7;width:97px"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')" style="width:97px"
            >取 消</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";
import "iview/dist/styles/iview.css";
export default {
  components: {},
  watch: {
    isFlag() {
      this.dialogFormVisible = true;
    }
  },
  props: {
    isFlag: Boolean
  },
  data() {
    return {
      //   新建等级表单  dialogFormVisible控制显示隐藏
      dialogFormVisible: false,
      formLabelWidth: "120px",
      ruleForm: {
        name: "",
        desc: "",
        iphone: ""
      },
      rules: {
        name: [{ required: true, message: "请输入登记门店", trigger: "blur" }],
        iphone: [
          { validator: "validateMobile", trigger: "blur" },
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattern: /^1[34578]\d{9}$/,
            message: "目前只支持中国大陆的手机号码"
          }
        ]
      }
    };
  },
  computed: {},
  methods: {
    // 提交事件
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置事件
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.dialogFormVisible = false;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" type="text/css" scoped>
.createNewFormBox {
  /* 新建弹窗 */
  /deep/.el-dialog {
    width: 642px;
    height: 537px;
    position: relative;
    border-radius: 8px;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    margin-top: 0 !important;

    margin: auto;
    .el-dialog__header {
      text-align: left;
      padding-bottom: 22px;
      border-bottom: 1px solid #ccc;
      padding-left: 35px;
    }
    /* .el-form-item__content {
      margin-left: 0 !important;
    } */
    .el-dialog__body {
      padding-top: 20px;
      padding-left: 0;
      padding-right: 0;
    }
    .el-dialog__headerbtn {
      font-size: 24px;
      color: #555;
      right: 44px;
    }
    .bottomBtn {
      border-top: 1px solid #ccc;
      padding-top: 30px;
      text-align: right;
      padding-right: 44px;
    }
    .el_btn_from {
      padding-left: 32px;
      padding-right: 44px;
    }
    .el-form-item__label {
      color: #555;
      font-size: 15px;
    }
    .el-form-item__error:nth-child(4) {
      top: 26%;
    }
  }
  /* 手机号对应的三个p标签 */
  .correspondingIphone {
    width: 100%;
    height: 100px;
    background: #fff;
    margin-top: 22px;
    text-align: left;
    p {
      height: 21px;
      line-height: 21px;
      font-size: 15px;
      font-family: "PingFangSC";
      font-weight: 600;
      color: #595959;
      i {
        font-size: 15px;
        font-family: "PingFangSC";
        color: #b6b6b6;
      }
    }
  }
}
</style>
