<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <layout />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Layout from "@/views/layout/Layout.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Layout
  },
};
</script>
