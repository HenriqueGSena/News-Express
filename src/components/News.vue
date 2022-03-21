<template>
  <div id="news">
    <div class="home-news" id="home-news">
      <h1 id="title-news">Express News &#9749;</h1>
    </div>

    <section id="search-field">
      <div class="busca-news">
        <form>
          <input
            type="search"
            name="q"
            v-model="searchword"
            @change="$v.searchword.$touch()"
            class="form1"
            placeholder="Search articles"
          />

          <b-button
            class="btn"
            @click="getEverythingNews"
            @click.prevent="$v.$touch()"
            :disabled="$v.searchword.$invalid"
            variant="primary"
            >Search</b-button
          >
        </form>
      </div>
    </section>

    <p class="p" v-if="$v.searchword.$error">
      Por favor digite no campo acima
    </p>

    <section id="selection-list">
      <select v-model="data" name="options" class="options">
        <option disabled value="">Topics</option>
        <option
          v-for="(topic, index) in topic_options"
          :key="index"
          :value="topic.value"
        >
          {{ topic.label }}
        </option>
      </select>

      <select v-model="language" name="language" class="language">
        <option disabled value="">Language</option>
        <option
          v-for="(language, index) in topic_language"
          :key="index"
          :value="language.value"
        >
          {{ language.label }}
        </option>
      </select>
    </section>
  </div>
</template>

<script lang="ts" src="./News.component.ts"></script>

<style scoped>
#news {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
}

#home-news {
  text-align: center;
  font-size: 25px;
  padding-top: 1%;
  color: #835546;
}

#search-field {
  align-items: center;
}

#busca-news {
  text-align: center;
  padding-top: 1%;
}

.form1 {
  font-size: 20px;
  text-align: center;
  border: 2px;
  border-radius: 5px;
  padding: 12px;
  margin: 12px;
  background-color: var(--color-background);
}

.p {
  color: red;
  align-items: center;
}

.btn {
  padding: 12px;
  height: 47px;
}

#selection-list {
  display: flex;
  flex-wrap: inherit;
  margin-top: 1%;
  justify-content: space-evenly;
}

.options {
  text-align: left;
  border: 2px;
  background-color: var(--color-text-light);
  padding: 3% 3% 2%;
}

.language {
  text-align: left;
  margin-left: 12%;
  border: 2px;
  background-color: var(--color-text-light);
  padding: 3% 3% 2%;
}
</style>
