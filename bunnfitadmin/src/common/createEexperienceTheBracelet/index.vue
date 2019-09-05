<template>
  <div class="createEexperienceTheBracelet">
    <!-- 隐藏的新建手环表单 element+iview-->
    <el-dialog title="新建手环" :visible.sync="dialogFormVisiblee">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="登记门店：" prop="namee" class="el_btn_from">
          <el-input
            v-model="ruleForm.namee"
            placeholder="请输入场馆编号/场馆名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="手环名称：" prop="nameExper" class="el_btn_from">
          <el-input
            v-model="ruleForm.nameExper"
            placeholder="请输入手环名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号码：" prop="iphonee" class="el_btn_from"
          ><el-button
            type="success"
            style="float:right;background:#688EF7;width:97px"
            >绑定手环</el-button
          >
          <el-input
            v-model="ruleForm.iphonee"
            auto-complete="off"
            style="width:320px;display:block"
            placeholder="请输入绑定手环的手机号"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="备注信息："
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
    isFlage() {
      this.dialogFormVisiblee = true;
    }
  },
  props: {
    isFlage: Boolean
  },
  data() {
    return {
      //   新建等级表单  dialogFormVisible控制显示隐藏
      dialogFormVisiblee: false,
      formLabelWidth: "120px",
      ruleForm: {
        namee: "",
        desc: "",
        iphonee: "",
        nameExper: ""
      },
      rules: {
        namee: [{ required: true, message: "请输入登记门店", trigger: "blur" }],
        iphonee: [
          { validator: "validateMobile", trigger: "blur" },
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattern: /^1[34578]\d{9}$/,
            message: "目前只支持中国大陆的手机号码"
          }
        ],
        nameExper: [
          { required: true, message: "请输入手环名称", trigger: "blur" }
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
      this.dialogFormVisiblee = false;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" type="text/css" scoped>
.createEexperienceTheBracelet {
  /* 新建弹窗 */
  /deep/.el-dialog {
    width: 642px;
    height: 480px;
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
  }
}
</style>
