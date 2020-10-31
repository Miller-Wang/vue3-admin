<template>
  <div class="login-page">
    <div class="login-container">
      <h2 class="align-c mb-40">后台管理系统</h2>
      <a-form :model="form" :rules="rules" ref="ruleForm" :wrapper-col="{ span: 24 }">
        <a-form-item name="username" class="mb-30">
          <a-input v-model:value="form.username" placeholder="请输入账号" size="large" />
        </a-form-item>
        <a-form-item name="password" class="mt-25">
          <a-input
            v-model:value="form.password"
            placeholder="请输入密码"
            type="password"
            size="large"
          ></a-input>
        </a-form-item>
      </a-form>
      <a-button type="primary" class="login-btn" @click="loginAction" size="large">登 录</a-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    //手机号验证
    const checkPhone = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请输入手机号码'));
      } else {
        var reg = /^1\d{10}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error('手机号码格式不正确'));
        }
      }
    };

    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        phone: [{ validator: checkPhone, required: true, trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
      },
    };
  },

  mounted() {
    console.log(this.$store);
  },
  methods: {
    passwordChange(val) {
      console.log(val);
    },
    async loginAction() {
      try {
        await this.$refs.ruleForm.validate();
        this.$router.push('/');
      } catch (error) {
        console.log(error);
      }

      // this.$refs.ruleForm.validate(async valid => {
      //   if (!valid) return false;
      // const res = await Api.loginAction(this.form);
      // if (res.returnCode != '0000') return this.$message.error(res.returnMsg);
      // const { returnCode, returnMsg, datas } = await Api.getAuthority({ uid: res.datas.uid });
      // if (returnCode != '0000') return this.$message.error(returnMsg);
      // // 登录成功
      // localStorage.setItem('CMS_UID', res.datas.uid);
      // localStorage.setItem('CMS_ROLE', datas.authority);
      // Api.commonParams.uid = res.datas.uid;
      // Api.commonParams.role = datas.authority;
      // this.$router.push('/');
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  width: 400px;
  height: 100vh;
  margin: auto;
  overflow: hidden;
  .login-container {
    margin-top: 15vh;
    padding: 0 20px;
    .login-btn {
      margin-top: 20px;
      width: 100%;
    }
  }
}
</style>
