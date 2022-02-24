<template>
  <div class="login_wrap">
    <login-form class="login_form_wrap" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import LoginForm from "./child/LoginForm";
export default defineComponent({
  name: "Login",
  components: {
    LoginForm,
  },
});
</script>
<style lang="less" scoped>
.login_wrap {
  .login_form_wrap {
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 0 10px 10px #ccc;
  }
}
</style>
