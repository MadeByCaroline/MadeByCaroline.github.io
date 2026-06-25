<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- Lien d'évitement : visible au focus clavier uniquement (RGAA) -->
  <a href="#main-content" class="skip-link">Aller au contenu principal</a>

  <TheHeader />
  <RouterView />
  <TheFooter />
</template>

<style>
/* Réinitialisation minimale */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #faf9f6;
  color: #111111;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Sélection de texte */
::selection {
  background-color: #111111;
  color: #faf9f6;
}

/* Lien d'évitement (skip link) — RGAA */
.skip-link {
  position: absolute;
  top: -9999px;
  left: 1rem;
  z-index: 9999;
  padding: 0.75rem 1.25rem;
  background-color: #111111;
  color: #faf9f6;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 0 0 4px 4px;
}

.skip-link:focus {
  top: 0;
  outline: 3px solid #faf9f6;
  outline-offset: 2px;
}

/* Classe utilitaire pour le texte accessible masqué */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* ─── Styles d'impression (PDF / @media print) ─── */
@page {
  margin: 1cm;
}

@media print {
  /* Masquer les éléments non pertinents sur un CV papier */
  .site-header,
  .site-footer,
  .skip-link,
  .cv-print-button {
    display: none !important;
  }

  /* Réinitialiser les couleurs de fond et passer le texte en noir */
  body,
  .hero-section,
  .expertise-section,
  .projects-section,
  .parcours-section,
  .experience-card,
  .project-card,
  .expertise-category {
    background-color: #ffffff !important;
    color: #111111 !important;
  }

  /* Largeur pleine page pour le contenu principal */
  .main-content,
  .hero-inner,
  .expertise-inner,
  .projects-inner,
  .parcours-inner {
    max-width: 100% !important;
    width: 100% !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    margin: 0 !important;
  }

  /* Réduire les espacements verticaux */
  .hero-section,
  .expertise-section,
  .projects-section,
  .parcours-section {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  /* Éviter les sauts de page à l'intérieur des blocs d'expérience et de projets */
  .experience-list-item,
  .experience-card,
  .project-item,
  .project-card,
  .expertise-category {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  /* Afficher les URL des liens de contact après leur texte */
  .contact-link::after {
    content: ' (' attr(href) ')';
    font-size: 0.75rem;
    color: #6b7280;
  }

  /* Forcer les couleurs de texte pour les éléments secondaires */
  .hero-text,
  .contact-list,
  .experience-role,
  .experience-dates,
  .experience-description,
  .experience-details,
  .project-description,
  .project-details,
  .section-title,
  .category-note,
  .skill-item {
    color: #333333 !important;
  }
}
</style>
