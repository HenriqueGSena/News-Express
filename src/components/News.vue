<template>
  <div id="news">
    <div class="home-news">
      <h1 class="title-news">Express News &#9749;</h1>
    </div>

    <section id="search-field">
      <div class="busca-news">
        <b-form-input
          type="search"
          name="q"
          v-model="searchword"
          class="form1"
          @change="$v.searchword.$touch()"
          placeholder="Search articles"
        ></b-form-input>

        <b-button
          class="btn"
          @click="getEverythingNews"
          @click.prevent="$v.$touch()"
          :disabled="$v.searchword.$invalid"
          variant="primary"
          >Search</b-button
        >
      </div>

      <p class="p" v-if="$v.searchword.$error">
        Por favor digite no campo acima
      </p>
    </section>

    <section id="selection-list">
      <select v-model="searchIn" name="searchIn" class="searchIn">
        <option disabled value="">Search In</option>
        <option
          v-for="(searchIn, index) in topic_searchIn"
          :key="index"
          :value="searchIn.value"
        >
        {{ searchIn.label }}
        </option>
      </select>

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

.home-news {
  text-align: center;
  font-size: 25px;
  padding-top: 1%;
  color: #835546;
}

#search-field {
  align-items: center;
}

.busca-news {
  text-align: center;
  padding-top: 1%;
  display: flex;
}

.form1 {
  font-size: 20px;
  text-align: inherit;
  width: 100%;
  border: 2px;
  height: 48px;
  background-color: rgb(245, 245, 245);
  border-radius: 5px;
  margin: 12px;
}

.p {
  color: red;
  align-items: center;
  text-align: center;
}

.btn {
  margin: auto;
  padding: 12px;
  width: 100px;
  height: 45px;
}

#selection-list {
  display: flex;
  flex-wrap: inherit;
  margin-top: 1%;
  justify-content: space-evenly;
}

.searchIn {
  text-align: left;
  margin-right: 46px;
  border: 2px;
  background-color: var(--color-text-light);
  padding: 3% 3% 2%;
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
