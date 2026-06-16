<template>
  <!-- Lien "Aller au contenu" visible au focus -->
  <a class="skip-link" href="#content">Aller au contenu</a>

  <header role="banner" class="site-header">
    <h1>MadeByCaroline</h1>
    <nav role="navigation" aria-label="Navigation principale">
      <ul>
        <li><a href="#projets">Projets</a></li>
        <li><a href="#a-propos">À propos</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main id="content" role="main" tabindex="-1">
    <section aria-labelledby="intro-title">
      <h2 id="intro-title">Bienvenue</h2>
      <p>Contenu migré depuis le site statique.</p>
    </section>

    <!-- Exemple d'image accessible -->
    <section aria-labelledby="projects-title" id="projets">
      <h2 id="projects-title">Projets</h2>
      <img src="/assets/sample.jpg" alt="Photo d'exemple — remplacer par une description métier pertinente" />
    </section>
  </main>

  <footer role="contentinfo">
    <p>&copy; MadeByCaroline</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style scoped>
.skip-link {
  position: absolute;
  left: -999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
.skip-link:focus {
  left: 1rem;
  top: 1rem;
  width: auto;
  height: auto;
  background: #fff;
  padding: 0.5rem 1rem;
  border: 2px solid #000;
  z-index: 1000;
}

/* Focus-visible */
:focus {
  outline: 3px solid #005fcc;
  outline-offset: 2px;
}

/* Exemple de contraste : fonds clairs et textes foncés */
body { color: #111; background: #fff; font-family: system-ui, Arial, sans-serif; line-height: 1.4; }

.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eaeaea;
}

nav ul { list-style: none; display: flex; gap: 1rem; padding: 0; margin: 0; }
nav a { color: inherit; text-decoration: none; }
</style>
