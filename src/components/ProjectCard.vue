<script setup lang="ts">
import type { Project } from '../data/cv-data'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="project-card" :aria-label="project.title">
    <h3 class="project-title">{{ project.title }}</h3>

    <p class="project-description">{{ project.description }}</p>

    <p v-if="project.details" class="project-details">{{ project.details }}</p>

    <ul class="project-tags" aria-label="Technologies et contexte">
      <li v-for="tag in project.tags" :key="tag" class="project-tag">
        {{ tag }}
      </li>
    </ul>
  </article>
</template>

<style scoped>
.project-card {
  background-color: #ffffff;
  padding: 1.5rem;
  border: 1px solid rgba(17, 17, 17, 0.1);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.project-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  color: #111111;
  margin: 0;
}

.project-description,
.project-details {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

.project-tags {
  list-style: none;
  padding: 0;
  margin: 0.25rem 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-tag {
  font-size: 0.75rem;
  text-transform: uppercase;
  color: #6b7280;
  letter-spacing: 0.05em;
}

.project-tag:not(:last-child)::after {
  content: ' •';
  margin-left: 0.5rem;
}
</style>
