<template>
  <div id="Login">
    <h1>Bunnyfit后台管理系统</h1>
    <Form
      ref="formInline"
      :model="formInline"
      :rules="ruleInline"
      style="width:536px;height:306px;margin:auto;background:#fff"
    >
      <FormItem prop="user">
        <Input
          type="text"
          v-model="formInline.user"
          placeholder="请输入用户名称"
        >
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input
          type="password"
          v-model="formInline.password"
          placeholder="请输入登录密码"
        >
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";
import "iview/dist/styles/iview.css";
// import axios from "axios";
// import axios from "axios";
export default {
  name: "login",
  components: {},
  props: {},
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          },
          { min: 3, max: 9, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" }
        ]
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("正确!");
          this.$router.push({ path: "/tabbar" });
          // axios
          //   .post("/user/login", {
          //     user: this.loginForm.user,
          //     pass: this.loginForm.pass
          //   })
          //   .then(response => {
          //     // eslint-disable-next-line no-console
          //     console.log(response);
          //     if (status == 200) {
          //       this.$store.commit("SET_TOKEN", response.data.token);
          //       this.$store.commit("GET_USER", response.data.user);
          //       this.$message({
          //         message: "登陆成功",
          //         type: "success"
          //       });
          //     }
          //   });
        } else {
          this.$Message.error("错误！");
          // eslint-disable-next-line no-console
          // console.log("error submit");
          // return false;
        }
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" type="text/css" scoped>
#Login {
  width: 100%;
  height: 100%;
  background: #eeeeee;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  h1 {
    color: #666;
    font-size: 45px;
    z-index: 4;
    height: 120px;
    margin-top: 350px;
  }
  .ivu-form {
    padding-top: 45px;
    border-radius: 5px;
  }
  .ivu-form-item {
    width: 71%;
    margin: 20px auto;
    margin-bottom: 35px;
  }
  .ivu-btn-primary {
    width: 100%;
  }
}
</style>
