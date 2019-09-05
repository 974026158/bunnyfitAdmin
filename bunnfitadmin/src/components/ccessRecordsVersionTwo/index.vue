<template>
  <!-- 出入记录版本二 -->
  <div class="ccessRecordsVersionTwo">
    <!--场馆名称      场馆地址     场馆编号  -->
    <div class="fieldBuilding_SerialNumbercem_Address_Ccess">
      <p class="fieldBuilding_Ccess">
        场馆名称&nbsp;:&nbsp;&nbsp;<b>金新城悦府店</b>
      </p>
      <p class="SerialNumbercem_Ccess">
        场馆地址&nbsp;:&nbsp;&nbsp;<b>江苏省/苏州市/张家港</b>
      </p>
      <p class="Address_Ccess">场馆编号&nbsp;:&nbsp;&nbsp;<b>SZ001</b></p>
    </div>
    <!-- 选择日期的表单 -->
    <div class="optionDate">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
        inline
      >
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="margin-left:17px;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            style="width:97px"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')" style="width:97px"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
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
      // 选择日期的表单
      ruleForm: {
        date1: ""
      },
      rules: {
        date1: [
          {
            type: "date",
            message: "请选择日期",
            trigger: "change"
          }
        ]
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 选择日期的表单
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
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" type="text/css" scoped>
.ccessRecordsVersionTwo {
  /*  场馆名称      场馆地址     场馆编号*/
  .fieldBuilding_SerialNumbercem_Address_Ccess {
    width: 100%;
    height: 88px;
    background: #fff;
    padding-left: 44px;
    padding-right: 50px;
    line-height: 88px;
    p {
      font-size: 15px;
      color: #555;
      b {
        font-size: 15px;
        font-weight: 500;
        color: #7c7c7c;
      }
    }
    .fieldBuilding_Ccess {
      float: left;
      margin-right: 551px;
    }
    .SerialNumbercem_Ccess {
      float: left;
    }
    .Address_Ccess {
      float: right;
    }
  }
  /* 选择日期的表单 */
  .optionDate {
    width: 100%;
    height: 132px;
    background: #fff;
    margin-top: 24px;
    text-align: left;
    padding-left: 44px;
    padding-top: 50px;
  }
}
</style>
