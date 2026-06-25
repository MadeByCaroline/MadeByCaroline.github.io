<script setup lang="ts">
import { projects } from '../data/cv-data'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section id="projets" aria-labelledby="projects-title" class="projects-section">
    <div class="projects-inner">
      <h2 id="projects-title" class="section-title">Projets publics & systèmes critiques</h2>

      <ul class="projects-grid" aria-label="Liste des projets">
        <li v-for="project in projects" :key="project.id" class="project-item">
          <ProjectCard :project="project" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 5rem 0;
}

.projects-inner {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-title {
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #6b7280;
  margin-bottom: 3rem;
  font-weight: 600;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.project-item {
  display: flex;
}

.project-item > * {
  flex: 1;
}
</style>
