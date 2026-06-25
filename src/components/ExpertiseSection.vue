<script setup lang="ts">
import { skillCategories } from '../data/cv-data'
</script>

<template>
  <section id="expertise" aria-labelledby="expertise-title" class="expertise-section">
    <div class="expertise-inner">
      <h2 id="expertise-title" class="section-title">Ingénierie & Produits</h2>

      <div class="expertise-grid">
        <div v-for="category in skillCategories" :key="category.title" class="expertise-category">
          <h3 class="category-title">{{ category.title }}</h3>

          <ul class="skills-list">
            <li v-for="skill in category.skills" :key="skill.label" class="skill-item">
              {{ skill.label }}
            </li>
          </ul>

          <p class="category-note">{{ category.note }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.expertise-section {
  padding: 5rem 0;
  background-color: #ffffff;
  border-top: 1px solid rgba(17, 17, 17, 0.05);
  border-bottom: 1px solid rgba(17, 17, 17, 0.05);
}

.expertise-inner {
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

.expertise-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}

@media (min-width: 768px) {
  .expertise-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.category-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(17, 17, 17, 0.1);
  color: #111111;
}

.skills-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.skill-item {
  font-size: 0.875rem;
  color: #6b7280;
}

.category-note {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.6;
}
</style>
