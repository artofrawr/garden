<script setup lang="ts">
import { useData } from 'vitepress'
import DemoCard from './DemoCard.vue'
const { frontmatter: fm } = useData()
</script>

<template>
  <div
    className="px-8 max-w-screen-xl pt-12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
  >
    <div v-for="demo in fm.demos" :key="demo.link">
      <DemoCard
        :title="demo.title"
        :subtitle="demo.subtitle"
        :link="demo.link"
      />
    </div>
  </div>

  <!-- this is where markdown content will be rendered -->
  <Content />
</template>
