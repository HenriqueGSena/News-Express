<template>
  <div>
    <Header />
    <News @resultadoBusca="setArticles($event)"/>
    <Article :articles='articles'/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "./styles/global.css";
import Header from "./components/Header.vue";
import News from "./components/News.vue";
import Article from "./components/Article.vue";
import NewsService from "./service/NewsService";
import Component from "vue-class-component";

@Component({
  components: {
    News,
    Header,
    Article,
  }
})
export default class App extends Vue {

  private articles: any[] = [];

  set setArticles(articles: any[]) {
    this.articles = articles;
  }

}
</script>
