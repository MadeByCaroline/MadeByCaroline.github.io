<script setup lang="ts">
import { contactInfo } from '../data/cv-data'
import { usePdfGenerator } from '../composables/usePdfGenerator'

const { isLoading, generatePDF } = usePdfGenerator()
</script>

<template>
  <section id="profil" aria-labelledby="hero-title" class="hero-section">
    <div class="hero-inner">
      <h1 id="hero-title" class="hero-title">
        Caroline Robillard —
        <span class="hero-subtitle">
          Développeuse Full-Stack Senior, Conception de socles applicatifs
        </span>
      </h1>

      <p class="hero-text">
        Développeuse Full-Stack spécialisée dans la conception et la construction de produits
        numériques complexes au sein de systèmes publics critiques. Expérience en architecture
        front-end, structuration de socles applicatifs et développement de produits à forte
        contrainte (accessibilité, sécurité, volumétrie).
      </p>

      <p class="hero-text">
        J'interviens principalement sur la phase de fondation des produits : création de socles
        techniques, structuration d'architecture et mise en place de bases solides permettant la
        montée en équipe et l'évolution produit.
      </p>

      <p class="hero-text">
        Je suis spécialisée dans la conception de socles applicatifs et la structuration de produits
        numériques dès leurs phases initiales, dans des environnements publics complexes.
      </p>

      <ul class="contact-list" aria-label="Informations de contact">
        <li>
          <span aria-hidden="true">📍</span>
          {{ contactInfo.location }}
        </li>
        <li>
          <span aria-hidden="true">✉️</span>
          <a :href="`mailto:${contactInfo.email}`" class="contact-link">
            {{ contactInfo.email }}
          </a>
        </li>
        <li>
          <span aria-hidden="true">⏱</span>
          {{ contactInfo.experience }}
        </li>
      </ul>

      <button
        class="cv-print-button"
        :disabled="isLoading"
        :aria-busy="isLoading"
        @click="generatePDF"
      >
        <span v-if="isLoading" aria-live="polite">Génération en cours…</span>
        <span v-else>Télécharger le CV (PDF, ~150&nbsp;Ko)</span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding-top: 10rem;
  padding-bottom: 5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  max-width: 72rem;
  margin: 0 auto;
}

.hero-inner {
  max-width: 48rem;
}

.hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 5vw, 3.75rem);
  color: #111111;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.25rem, 3vw, 2.25rem);
  color: #111111;
  display: inline;
}

.hero-text {
  color: #6b7280;
  font-size: 0.9375rem;
  line-height: 1.75;
  margin-bottom: 1.5rem;
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 2rem;
  list-style: none;
  padding: 0;
}

@media (min-width: 640px) {
  .contact-list {
    flex-direction: row;
    align-items: center;
    gap: 1.25rem;
  }
}

.contact-link {
  color: #6b7280;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.contact-link:hover {
  color: #111111;
}

.contact-link:focus-visible {
  outline: 2px solid #111111;
  outline-offset: 2px;
  border-radius: 2px;
}

.cv-download-link {
  display: inline-block;
  padding: 0.625rem 1.25rem;
  border: 1px solid #111111;
  color: #111111;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.2s, color 0.2s;
}

.cv-download-link:hover {
  background-color: #111111;
  color: #faf9f6;
}

.cv-download-link:focus-visible {
  outline: 2px solid #111111;
  outline-offset: 2px;
}

.cv-print-button {
  display: inline-block;
  padding: 0.625rem 1.25rem;
  border: 1px solid #111111;
  background-color: transparent;
  color: #111111;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  margin-left: 0.75rem;
}

.cv-print-button:hover {
  background-color: #111111;
  color: #faf9f6;
}

.cv-print-button:focus-visible {
  outline: 2px solid #111111;
  outline-offset: 2px;
}

.cv-print-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
