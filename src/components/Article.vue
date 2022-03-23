<template>
  <div>
    <b-card-group class="justify-content-evenly" style="margin-top: 3%">
      <div v-for="(article, index) in articles" :key="index">
        <b-card
          :title="article.title"
          :img-src="article.urlToImage"
          img-alt="Imagem"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>{{ article.description }}</b-card-text>
          <b-card-text>{{ article.author }}</b-card-text>
          <b-button :href="article.url" target="blank" variant="primary"
            >Clique Aqui</b-button
          >
        </b-card>
      </div>
    </b-card-group>
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from "vue-property-decorator";

@Component
export default class Article extends Vue {
  @Prop({
    default: [],
  })
  public articles!: any[];

  public query: string = "";
}
</script>

<style scoped></style>
