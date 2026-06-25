<script setup lang="ts">
import type { Experience } from '../data/cv-data'

defineProps<{
  experience: Experience
}>()
</script>

<template>
  <article class="experience-card">
    <div class="experience-header">
      <h3 class="experience-org">{{ experience.organization }}</h3>
      <p class="experience-role">{{ experience.role }}</p>

      <p class="experience-dates">
        <time :datetime="experience.startDatetime">{{ experience.startDate }}</time>
        <span aria-hidden="true"> — </span>
        <span v-if="!experience.endDatetime" class="sr-only">à ce jour</span>
        <time
          v-if="experience.endDatetime"
          :datetime="experience.endDatetime"
        >{{ experience.endDate }}</time>
        <span v-else aria-hidden="true">Aujourd'hui</span>
      </p>
    </div>

    <p class="experience-description">{{ experience.description }}</p>
    <p v-if="experience.details" class="experience-details">{{ experience.details }}</p>
  </article>
</template>

<style scoped>
.experience-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.experience-header {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.experience-org {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  color: #111111;
  margin: 0;
}

.experience-role {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
}

.experience-dates {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
}

.experience-description,
.experience-details {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}
</style>
