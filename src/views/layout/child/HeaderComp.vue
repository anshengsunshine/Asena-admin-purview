<template>
  <div class="header_wrap">
    <img src="@/assets/logo.png" />
    <span>admin</span>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeaderComp",
});
</script>
<style lang="less">
.header_wrap {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  width: 100%;
  height: 100%;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #f0f2f5;
  }
}
</style>
