<script setup lang="ts">
import { experiences } from '../data/cv-data'
import ExperienceCard from './ExperienceCard.vue'
</script>

<template>
  <section id="parcours" aria-labelledby="parcours-title" class="parcours-section">
    <div class="parcours-inner">
      <h2 id="parcours-title" class="section-title">Parcours</h2>

      <ol class="experience-list" aria-label="Parcours professionnel, du plus récent au plus ancien">
        <li
          v-for="experience in experiences"
          :key="experience.id"
          class="experience-list-item timeline-dot"
        >
          <ExperienceCard :experience="experience" />
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.parcours-section {
  padding: 5rem 0;
  background-color: #ffffff;
  border-top: 1px solid rgba(17, 17, 17, 0.05);
}

.parcours-inner {
  max-width: 48rem;
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

.experience-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  border-left: 1px solid rgba(17, 17, 17, 0.15);
  padding-left: 2rem;
}

.experience-list-item {
  position: relative;
}

.timeline-dot::before {
  content: '';
  position: absolute;
  left: -2.25rem;
  top: 0.375rem;
  width: 0.6875rem;
  height: 0.6875rem;
  border-radius: 50%;
  background-color: #111111;
  border: 2px solid #faf9f6;
  box-shadow: 0 0 0 1px #111111;
}

@media (max-width: 768px) {
  .timeline-dot::before {
    left: -1.5rem;
  }
}
</style>
