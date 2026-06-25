<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import ExpertiseSection from '../components/ExpertiseSection.vue'
import ProjectGallery from '../components/ProjectGallery.vue'
import ExperienceList from '../components/ExperienceList.vue'
</script>

<template>
  <main id="main-content" tabindex="-1" class="main-content">
    <HeroSection />
    <ExpertiseSection />
    <ProjectGallery />
    <ExperienceList />
  </main>
</template>

<style scoped>
.main-content:focus {
  outline: none;
}
</style>
