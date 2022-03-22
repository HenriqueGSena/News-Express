import { Vue, Component, Inject } from "vue-property-decorator";
import NewsService from "@/service/NewsService";
import { required } from "vuelidate/lib/validators";

const validations: any = {
  searchword: {
    required,
  },
  data: {
    required,
  },
};

@Component({
  validations,
})
export default class News extends Vue {
  @Inject("newsService")
  private newsService!: () => NewsService;

  public searchword: string = "";
  public data: string = "";
  public language: string = "";
  public searchIn: string = "";
  public topic_options = [
    { label: "Relevancy", value: "relevancy" },
    { label: "Popularity", value: "popularity" },
    { label: "PublishedAt", value: "publishedAt" }
  ];
  public topic_language = [
    { label: "Arabic", value: "ar" },
    { label: "German", value: "de" },
    { label: "English", value: "en" },
    { label: "Spanish", value: "es" },
    { label: "French", value: "fr" },
    { label: "Hebrew", value: "he" },
    { label: "Italian", value: "it" },
    { label: "Dutch", value: "nl" },
    { label: "Norwegian", value: "no" },
    { label: "Portuguese", value: "pt" },
    { label: "Russian", value: "ru" },
    { label: "Chinese", value: "zh" }
  ];
  public topic_searchIn = [
    { label: "Title", value: "title" },
    { label: "Description", value: "description" },
    { label: "Content", value: "content" }
  ];

  private getEverythingNews() {
    this.newsService()
      .findEverythingNewsByParameter(
        this.data,
        this.searchword,
        this.language,
        this.searchIn
      )
      .then((res) => {
        this.$emit("resultadoBusca", res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
