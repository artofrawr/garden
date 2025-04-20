<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  link: string
}>()
</script>

<template>
  <a :href="link">
    <div className="aspect-video overflow-hidden relative">
      <div className="thumb w-full h-full bg-cover bg-center bg-gray-50" />
    </div>
    <div className="pt-3 pb-5">
      <h3 className="relative inline-block">
        {{ title }}
      </h3>
      <p className="text-md">{{ subtitle }}</p>
    </div>
  </a>
</template>

<style scoped>
h3 {
  font-weight: bold;
}
</style>
