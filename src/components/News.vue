<template>
  <div id="news">
    <div class="home-news" id="home-news">
      <h1 id="title-news">Express News &#9749;</h1>
    </div>

    <div id="busca-news">
      <form action="">
        <input
          type="search"
          name="q"
          v-model="searchword"
          id="form1"
          class="form1"
          placeholder="Search articles..."
        />
        
         <b-button class="btn" @click="getEverythingNews" variant="Consult">Consult</b-button>

        <select v-model="data" name="options" id="options">
          <option disabled value="">Topics</option>
          <option
            v-for="topic in topic_options"
            :key="topic"
            :value="topic.value"
          >
            {{ topic.label }}
          </option>
        </select>
      </form>
    </div>
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

#busca-news {
  text-align: center;
  padding-top: 1%;
}

#form1 {
  font-size: 20px;
  text-align: center;
  border: 2px;
  border-radius: 5px;
  padding: 12px;
  margin: 12px;
  background-color: var(--color-background);
}

.btn{
  padding: 12px;
  height: 47px;
}

#options {
  display: flex;
  margin-left: 24%;
  margin-top: 4%;
  text-align: center;
  border: 2px;
  background-color: var(--color-text-light);
  padding: 3% 3% 2% 2%;
}
</style>
