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
    display: flex;
    justify-content: center;
    align-items: center;
     padding: 20px;
    height: 80vh;
    width: 100%;
  .login_form_wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 40px;
    box-shadow: 0 0 10px 10px #ccc;
  }
}
</style>
