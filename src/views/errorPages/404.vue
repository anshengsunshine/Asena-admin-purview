<template>
  <div class="h_80 dis_flex jus_c_c align_i_c">
    <a-result status="404" title="404" sub-title="很抱歉，该页面已走失">
      <template #extra>
        <a-button type="primary" @click="onToIndex">返回首页</a-button>
      </template>
    </a-result>
  </div>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "404",
  setup() {
    const router = useRouter();
    const onToIndex = () => {
      router.push({
        path: "/",
      });
    };
    return {
      onToIndex,
    };
  },
});
</script>
