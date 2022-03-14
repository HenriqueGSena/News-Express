<template>
  <div>
    <Header />
    <News />
    <Article />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "./styles/global.css";
import Header from "./components/Header.vue";
import News from "./components/News.vue";
import Article from "./components/Article.vue";

export default Vue.extend({
  components: {
    News,
    Header,
    Article,
  },
});
</script>
