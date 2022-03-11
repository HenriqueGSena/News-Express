<template>
  <div>
    <div
      class="card"
      v-for="(noticia, index) in noticias"
      :key="index"
      style="width: 18rem"
    >
      <img class="card-img-top" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{{ noticia.title }}</h5>
        <p class="card-text">
          conteudo
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Article",
  data: function () {
    return {
      noticias: [
        { title: "java" },
        { title: "vue" },
        { title: "php" },
        { title: "python" },
        { title: "javascript" },
      ],
    };
  },
});
</script>

<style scoped></style>
