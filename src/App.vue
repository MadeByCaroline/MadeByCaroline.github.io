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
</style>
