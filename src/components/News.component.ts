import { Vue, Component } from "vue-property-decorator";

@Component
export default class News extends Vue {
  public searchword: string = "";
  public selected = "";
  public topic_options = ["Relevante", "Popularidade", "Data de publicação"];
  public mounted() {
    console.log(this.selected)
  }
}
