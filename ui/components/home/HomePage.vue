<script setup lang="ts">
import { useData } from 'vitepress'
const { frontmatter: fm } = useData()
</script>

<template>
  <main class="max-w-screen-lg mx-auto px-8 py-24">
    <div class="text-4xl leading-snug text-stone-900 dark:text-stone-300">
      <p class="font-bold">Hey!</p>
      <p class="font-normal">
        {{ fm.intro }}
      </p>
    </div>

    <div class="pt-8">
      <div v-for="link in fm.links" :key="link.href" class="pt-8">
        <a :href="link.href">
          <h2>{{ link.title }}</h2>
          <p>{{ link.subtitle }}</p>
        </a>
      </div>
    </div>
  </main>
</template>

<style scoped>
h2 {
  font-weight: bold;
}
</style>
