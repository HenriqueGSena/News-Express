import { Vue, Component, Inject } from "vue-property-decorator";
import NewsService from "@/service/NewsService";

@Component
export default class News extends Vue {
  @Inject("newsService")
  private readonly newsService: () => NewsService;

  public searchword: string = "";
  public selected = "";
  public topic_options = [
    { label: "Relevante", value: "relevancy" },
    { label: "Popularidade", value: "popularity" },
    { label: "Data de publicação", value: "publishedAt" },
  ];

  public mounted() {
    console.log(NewsService);
    this.$emit("resultadoBusca");
  }

  private getNews() {
    NewsService.findEverythingNewsByParameter(this.$data, this.searchword);
  }
}
