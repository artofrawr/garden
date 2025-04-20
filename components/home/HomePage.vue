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

    <div>
      <div class="pt-14">
        <a href="/garden">
          <h2>Digital Garden</h2>
          <p>Public knowledge repository.</p>
        </a>
      </div>

      <div class="pt-8">
        <a href="/demos">
          <h2>Demos</h2>
          <p>Proof of concepts and prototypes.</p>
        </a>
      </div>

      <div class="pt-8">
        <a href="/about">
          <h2>About</h2>
          <p>Resume, client list and contact info.</p>
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
