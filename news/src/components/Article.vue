<template>
  <div id="card-news">
    <div
      class="card"
      id="card"
      v-for="(article, index) in articles"
      :key="index"
      style="width: 18rem"
    >
      <img
        class="card-img-top"
        alt="Card image cap"
        :src="article.urlToImage"
      />
      <div class="card-body">
        <h5 class="card-title">{{ article.title }}</h5>
        <p class="card-text"></p>
        <a :href="article.url" target="blank" class="btn btn-primary"
          >Clique Aqui</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "Article",
  data: function () {
    return {
      articles: [],
      query: "Apple",
    };
  },
  mounted() {
    //  TODO: Obter URL
    //  TODO: Atualizar o valor da query

    axios
      .get(
        "https://newsapi.org/v2/everything?" +
          `q=${this.query}&` +
          "from=2022-03-11&" +
          "sortBy=popularity&" +
          "apiKey=ca26dfefe6e8488d88bdc0b51a311335"
      )
      .then((res) => {
        this.articles = res.data.articles;
        console.log(this.articles);
      });
  },
});
</script>

<style scoped>
#card-news {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 3%;
}
</style>
