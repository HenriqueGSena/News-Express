<template>
  <div id="card-news">
    <div
      class="card"
      id="card"
      v-for="(article, index) in articles"
      :key="index"
    >
      <img
        class="card-img-top"
        alt="Card image cap"
        :src="article.urlToImage"
      />
      <div class="card-body">
        <h5 id="card-title" class="card-title">{{ article.title }}</h5>
        <p class="card-text"></p>
        <a :href="article.url" target="blank" class="btn btn-primary"
          >Clique Aqui</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Prop, Vue, Component } from "vue-property-decorator";

@Component
export default class Article extends Vue {

  @Prop({
    default: []
  })
  public articles!: any[];

  public query: string = "";

}

</script>

<style scoped>

#card-news {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  padding: 1%;
}

#card-title {
  font-size: inherit;
  font-family: 'Roboto', sans-serif;
  padding-top: 17px;
  padding-bottom: 21px;
}

.card {
  width: 16rem;
  height: 19rem;
  margin: 1%;
}

.card-img-top {
  height: 51%;
}

.card-body {
  padding: 10px;
}


</style>
