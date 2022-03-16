import { Vue, Component, Inject } from "vue-property-decorator";
import NewsService from "@/service/NewsService";

@Component
export default class News extends Vue {

  @Inject("newsService")
  private newsService!: () => NewsService;

  public searchword: string = "";
  public data: string = "";
  public selected = "";
  public topic_options = [
    { label: "Relevante", value: "relevancy" },
    { label: "Popularidade", value: "popularity" },
    { label: "Data de publicação", value: "publishedAt" },
  ];

  private getEverythingNews() {
    this.newsService().findEverythingNewsByParameter(this.data, this.searchword)
    .then(res => {
      this.$emit("resultadoBusca", res.data.articles);
    })
    .catch( err => {

    });
  }
}