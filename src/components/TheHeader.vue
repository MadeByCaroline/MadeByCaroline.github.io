<script setup lang="ts">
import { useRoute } from 'vue-router'

interface NavLink {
  href: string
  label: string
}

const navLinks: NavLink[] = [
  { href: '#profil', label: 'Profil' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#projets', label: 'Projets' },
  { href: '#parcours', label: 'Parcours' },
]

const route = useRoute()
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <a href="#" class="site-logo" aria-label="Made By Caroline — retour à l'accueil">
        Made By Caroline
      </a>

      <nav aria-label="Navigation principale">
        <ul class="nav-list">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="nav-link"
              :aria-current="route.hash === link.href ? 'true' : undefined"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(250, 249, 246, 0.9);
  backdrop-filter: blur(4px);
  border-bottom: 1px solid rgba(17, 17, 17, 0.1);
  z-index: 50;
}

.header-inner {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  font-weight: 500;
}

.site-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.125rem;
  letter-spacing: 0.05em;
  text-decoration: none;
  color: #111111;
}

.site-logo:focus-visible {
  outline: 2px solid #111111;
  outline-offset: 2px;
  border-radius: 2px;
}

.nav-list {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-link:hover,
.nav-link[aria-current='true'] {
  color: #111111;
}

.nav-link:focus-visible {
  outline: 2px solid #111111;
  outline-offset: 2px;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .nav-list {
    display: none;
  }
}
</style>
