<template>
  <!-- 新建教练  element+iview-->
  <div class="theNewCoach">
    <h4><b style="color:red;font-size:17px;font-weight:900">*</b>为必填项</h4>
    <!--  所属门店-->
    <div class="subordinateToTheStores">所属门店</div>
    <!-- 有关教练的所有输入框 -->
    <el-row>
      <el-col :span="24">
        </el-col>
          <div class="grid-content bg-purple-dark">
              <!-- 搜素门店 -->
            <div class="vipPrice">
              <h3>
                <b style="color:red;font-size:17px;font-weight:900">*</b>搜索门店
                :
              </h3>
              <el-input
                v-model="inputt1"
                placeholder="请输入场馆编号/场馆名称"
                style="width:524px;height:100%"
              ></el-input>
            </div>
            <!-- 搜索門店對應的三個P標籤 -->
            <div class="corresponding">
              <p style="margin-bottom:16px">场馆编号：<i>SZ001</i></p>
              <p style="margin-bottom:16px">场馆名称：<i>金新城悦府店</i></p>
              <p>场馆地址：<i>江苏省/苏州市/张家港</i></p>
            </div>
            <!--  -->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="padding-left:35px;margin-bottom:20px">
              <el-form-item label="教练姓名：" prop="name">
              <el-input v-model="ruleForm.name" style="width:524px;margin-left:16px" placeholder="请输入教练姓名"></el-input>
              </el-form-item>
              <el-form-item label="教练昵称：" prop="name1">
              <el-input v-model="ruleForm.name1" style="width:524px;margin-left:16px" placeholder="请输入教练昵称"></el-input>
              </el-form-item>
              <el-form-item label="手机号码：" prop="name2">
              <el-input  v-model="ruleForm.name2" auto-complete="off" placeholder="请输入手机号" style="width:524px;margin-left:16px"></el-input>
              </el-form-item>
              <el-form-item label="技能标签：" prop="name3">
                <el-select v-model="ruleForm.name3" placeholder="请选择活动区域" style="width:524px;margin-left:16px" >
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="教练类型：" prop="name4">
                <el-select v-model="ruleForm.name4" placeholder="请选择活动区域" style="width:524px;margin-left:16px" >
                  <el-option label="标签二" value="shanghai"><el-tag type="success">标签二</el-tag></el-option>
                  <el-option label="区域二" value="beijing"><el-tag type="success">标签二</el-tag></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
    </el-row>
    <!-- 提交按钮 -->
        <div class="submitBtn">
          <input
            type="button"
            value="返回"
            style="background:rgba(255,255,255,1);border:1px solid #ccc"
            class="btn"
            @click="returnToUpperLevel()"
          />
          <input
            type="button"
            value="提交"
            style="background:rgba(104,142,247,1);margin-left:12px;"
            class="btn"
          />
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
      inputt1: "",
      ruleForm: {
        name: "",
        name1: "",
        name2: "",
        name3: "",
        name4: ""
      },
      rules: {
        name: [{ required: true, message: "请输入教练姓名", trigger: "blur" }],
        name1: [{ required: true, message: "请输入教练昵称", trigger: "blur" }],
        name2: [
          { validator: "validateMobile", trigger: "blur" },
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattern: /^1[34578]\d{9}$/,
            message: "目前只支持中国大陆的手机号码"
          }
        ],
        name3: [{ required: true }],
        name4: [{ required: true }]
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 返回上一级
    returnToUpperLevel() {
      this.$router.go(-1);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" type="text/css" scoped>
.theNewCoach {
  h4 {
    position: absolute;
    top: 157px;
    right: 80px;
    font-size: 15px;
    color: #555555;
  }
  /* 所属门店 */
  .subordinateToTheStores {
    width: 100%;
    height: 65px;
    border-bottom: 1px solid #ccc;
    line-height: 65px;
    padding-left: 44px;
    background: #fff;
    text-align: left;
    font-size: 15px;
    font-family: "PingFangSC";
    font-weight: 500;
    color: rgba(85, 85, 85, 1);
  }
  /* 有关教练的所有输入框 */

  .bg-purple-dark {
    background: #fff;
    text-align: left;
    padding-top: 24px;
    padding-bottom: 80px;
  }
  /* 搜索门店 */
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
  /* 三个p标签 */
  .corresponding {
    width: 100%;
    height: 100px;
    background: #fff;
    padding-left: 146px;
    margin-bottom: 18px;
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

  /*  */
  .grid-content {
    min-height: 36px;
  }
  /* 提交按钮 */
  .submitBtn {
    width: 100%;
    height: 132px;
    text-align: right;
    padding-right: 44px;
    padding-top: 40px;
    border-top: 1px solid #ccc;
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
