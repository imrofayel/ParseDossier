<template>

  <div class="flex flex-col space-y-4 m-2">
    <input v-model="inputText" type="text"
      class="focus:outline-none focus:border-none placeholder:text-gray-300 bg-transparent outline-none rounded text-2xl mt-4 inter"
      placeholder="Type here" />

    <div v-for="(value, key) in typographyData" :key="key">

      <div
        class="border dark:border-gray-800 border-gray-100 shadow-gray-300 dark:shadow-gray-500 inline-block relative right-4 text-lg p-1 px-3 rounded-full my-4 shadow-2xl">
        {{ value.class }}</div>

      <div class="w-full space-y-4">
        <span :class="value.class">
          {{ inputText.length > 0 ? inputText : value.title }}
        </span>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface TypographyItem {
  title: string;
  class: string;
}

interface Typography {
  [key: string]: TypographyItem;
}

import typography from '../data/typography.json' with { type: 'json' };

const typographyData = typography as Typography;
const inputText = ref<string>('');
</script>

<style></style>
