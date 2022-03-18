import { Vue, Component, Inject } from "vue-property-decorator";
import NewsService from "@/service/NewsService";
import { required } from "vuelidate/lib/validators";


const validations: any = {
  searchword: {
    required
  },
  data: {
    required
  },
}

@Component({
  validations
})
export default class News extends Vue {

  @Inject("newsService")
  private newsService!: () => NewsService;

  public searchword: string = "";
  public data: string = "";
  public topic_options = [
    { label: "Relevancy", value: "relevancy" },
    { label: "Popularity", value: "popularity" },
    { label: "PublishedAt", value: "publishedAt" },
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