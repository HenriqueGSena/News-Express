<template>
  <div>
    <Header />
    <News @resultadoBusca="setArticles($event)"/>
    <Article :articles='articles'/>
    <Pagination />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "./styles/global.css";
import Header from "./components/Header.vue";
import News from "./components/News.vue";
import Article from "./components/Article.vue";
import Component from "vue-class-component";
import Pagination from "./components/Pagination.vue";


@Component({
  components: {
    News,
    Header,
    Article,
    Pagination,
  }
})
export default class App extends Vue {

  public articles: any[] = [];

  public setArticles(articles: any[]) {
    this.articles = articles;
    console.log(articles);
  }

}
</script>
