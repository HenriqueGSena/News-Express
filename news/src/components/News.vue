<template>
  <div id="news">
    <div class="home-news" id="home-news">
      <h1 id="title-news">
        Express News &#9749;
      </h1>
    </div>

    <div id="busca-news">
      <form action="">
        <input type="search" name="seacher" id="form1" class="form1" placeholder="Pesquise Aqui..."/>
      </form>
    </div>
  </div>
</template>

<script lang="ts" src="./News.component.ts">

</script>


<style scoped>

#news {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
}

#home {
  text-align: center;
  font-size: 25px;
  padding-top: 3%;
}

#busca {
  text-align: center;
  padding-top: 2%;
}

#form1 {
  font-size: 20px;
  text-align: center;
  border: 2px;
  border-radius: 1px;
  padding: 12px;
  margin: 12px;
  background-color: var(--color-background);
}

</style>
