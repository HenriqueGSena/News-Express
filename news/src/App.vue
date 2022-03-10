/* eslint-disable vue/multi-word-component-names */
/* eslint-disable vue/multi-word-component-names */
<template>
  <News />
</template>

<script lang="ts">

import './styles/global.css';
import Vue from 'vue';
import News from '@/components/news.vue';

Vue.component('news', News);

export default class App extends Vue {
}

</script>
