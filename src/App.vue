<template>
  <div class="antialiased selection:bg-ink selection:text-chalk">
    <!-- NAVIGATION -->
    <nav class="fixed w-full bg-chalk/90 backdrop-blur-sm border-b border-ink/10 z-50" role="navigation" aria-label="Navigation principale">
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-sm font-medium">
        <span class="font-serif text-lg tracking-wide">Made By Caroline</span>
        <div class="hidden md:flex space-x-8 text-stone">
          <a href="#profil" class="hover:text-ink transition-colors">Profil</a>
          <a href="#expertise" class="hover:text-ink transition-colors">Expertise</a>
          <a href="#projets" class="hover:text-ink transition-colors">Projets</a>
          <a href="#parcours" class="hover:text-ink transition-colors">Parcours</a>
        </div>
      </div>
    </nav>

    <!-- PROFIL -->
    <section id="profil" class="pt-40 pb-20 px-6 max-w-6xl mx-auto">
      <div class="max-w-3xl">
        <h1 class="font-serif text-5xl md:text-6xl text-ink leading-tight mb-6">
          Caroline Robillard -
          <span class="font-serif text-3xl md:text-6xl text-ink leading-tight mb-6">Développeuse Full-Stack Senior, Conception de socles applicatifs</span>
        </h1>

        <p class="text-stone text-sm md:text-base leading-relaxed mb-8">
          Développeuse Full-Stack spécialisée dans la conception et la construction de produits numériques complexes au sein de systèmes publics critiques. Expérience en architecture front…
        </p>

        <p class="text-stone text-sm md:text-base leading-relaxed mb-8">
          J’interviens principalement sur la phase de fondation des produits : création de socles techniques, structuration d’architecture et mise en place de bases solides permettant la montée en charge.
        </p>

        <p class="text-stone text-sm md:text-base leading-relaxed mb-8">
          Je suis spécialisée dans la conception de socles applicatifs et la structuration de produits numériques dès leurs phases initiales, dans des environnements publics complexes.
        </p>

        <div class="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-stone mb-8">
          <span>📍 Nesle (80) — Télétravail hybride</span>
          <span>✉️ carolinerobillard@outlook.fr</span>
          <span>⏱ 7 ans d’expérience</span>
        </div>
      </div>
    </section>

    <!-- EXPERTISE -->
    <section id="expertise" class="py-20 bg-paper border-y border-ink/5">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-xs tracking-widest uppercase text-stone mb-12 font-semibold">
          Ingénierie & Produits
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 class="font-serif text-2xl mb-6 border-b border-ink/10 pb-4">Ingénierie Logicielle</h3>
            <ul class="space-y-6 text-sm text-stone">
              <li>Vue 3, TypeScript, Composition API, Nuxt</li>
              <li>Architecture front-end et structuration applicative</li>
              <li>Backend : NestJS, Prisma, PostgreSQL</li>
              <li>Tests : Jest, Cypress, TDD</li>
              <li>RGAA, accessibilité, performance</li>
            </ul>
            <p class="mt-6 text-sm text-stone">
              Utilisation avancée des LLM pour accélérer les cycles de développement : génération de tests, assistance au refactoring et documentation technique.
            </p>
          </div>

          <div>
            <h3 class="font-serif text-2xl mb-6 border-b border-ink/10 pb-4">Produit & Collaboration</h3>
            <ul class="space-y-6 text-sm text-stone">
              <li>Structuration fonctionnelle et discovery produit</li>
              <li>Contribution PO / Scrum dans des équipes produit</li>
              <li>Animation de rituels et coordination transverse</li>
              <li>Analyse utilisateur et cadrage fonctionnel</li>
            </ul>
            <p class="mt-6 text-sm text-stone">
              Approche produit orientée valeur et compréhension métier dans des environnements publics complexes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJETS -->
    <section id="projets" class="py-20 px-6 max-w-6xl mx-auto">
      <h2 class="text-xs tracking-widest uppercase text-stone mb-12 font-semibold">
        Projets publics & systèmes critiques
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-paper p-6 border border-ink/10 rounded-sm">
          <h3 class="font-serif text-xl mb-2">Candilib</h3>
          <p class="text-sm text-stone">
            Participation à la création du MVP national au sein du Lab MI (future DNUM), dans une équipe de 4 à 5 personnes.
            Développement fullstack d’une plateforme publique ayant contribué à la réduction des délais d’attente de 9 à 3 mois.
          </p>
          <p class="text-sm text-stone mt-3">Fonctionnalités critiques : authentification, gestion des droits, recherche candidats, templates e-mails.</p>
          <p class="text-xs uppercase text-stone mt-4">Vue.js • Node.js • MVP public</p>
        </div>

        <div class="bg-paper p-6 border border-ink/10 rounded-sm">
          <h3 class="font-serif text-xl mb-2">PSIJ</h3>
          <p class="text-sm text-stone">Conception d’un portail de saisine entre police secours et police scientifique dans un contexte à fortes contraintes de sécurité.</p>
          <p class="text-sm text-stone mt-3">Projet initié de bout en bout en équipe réduite (3 à 7 personnes), interrompu suite à changement de priorités organisationnelles.</p>
          <p class="text-xs uppercase text-stone mt-4">Systèmes critiques • Front & back</p>
        </div>

        <div class="bg-paper p-6 border border-ink/10 rounded-sm">
          <h3 class="font-serif text-xl mb-2">REFAPP</h3>
          <p class="text-sm text-stone">Conception complète du socle applicatif et du design initial d’un référentiel stratégique de l’État.</p>
          <p class="text-sm text-stone mt-3">Reprise d’un projet en stagnation et construction de la base technique et UI permettant la structuration du produit.</p>
          <p class="text-xs uppercase text-stone mt-4">Architecture • Design system • APIs</p>
        </div>

        <div class="bg-paper p-6 border border-ink/10 rounded-sm">
          <h3 class="font-serif text-xl mb-2">BaseGun</h3>
          <p class="text-sm text-stone">Développement front-end et automatisation de collecte de données (scraping Python) pour un outil orienté terrain.</p>
          <p class="text-xs uppercase text-stone mt-4">Front-end • Data scraping</p>
        </div>

        <div class="bg-paper p-6 border border-ink/10 rounded-sm">
          <h3 class="font-serif text-xl mb-2">Mentorat</h3>
          <p class="text-sm text-stone">Produit en discovery visant à mettre en relation mentors et mentorés. Analyse utilisateur et benchmark des solutions existantes avec équipe UX.</p>
          <p class="text-sm text-stone mt-3">Recommandation finale d’adoption d’une solution sur étagère (make vs buy).</p>
          <p class="text-xs uppercase text-stone mt-4">Product discovery • UX • Benchmark</p>
        </div>

        <div class="bg-paper p-6 border border-ink/10 rounded-sm">
          <h3 class="font-serif text-xl mb-2">Biblionum</h3>
          <p class="text-sm text-stone">Scrum Master puis Product Owner sur une application de suivi des démarches associatives via Démarches Simplifiées.</p>
          <p class="text-sm text-stone mt-3">Coordination produit et priorisation fonctionnelle entre besoins métiers et équipe de développement.</p>
          <p class="text-xs uppercase text-stone mt-4">PO • Scrum • Produit</p>
        </div>
      </div>
    </section>

    <!-- PARCOURS -->
    <section id="parcours" class="py-20 bg-paper border-t border-ink/5">
      <div class="max-w-3xl mx-auto px-6">
        <h2 class="text-xs tracking-widest uppercase text-stone mb-12 font-semibold">Parcours</h2>

        <div class="space-y-12">
          <div>
            <h3 class="font-serif text-xl">Ministère de l’Intérieur / DNUM</h3>
            <p class="text-sm text-stone">Ingénierie logicielle & produit</p>
          </div>

          <div>
            <h3 class="font-serif text-xl">2013 — 2018</h3>
            <p class="text-sm text-stone">Parenthèse professionnelle</p>
            <p class="text-sm text-stone mt-3">Interruption de carrière pour raisons familiales, liée à l’accompagnement de mon enfant malade.</p>
            <p class="text-sm text-stone mt-3">Reprise du parcours professionnel en septembre 2018 avec une reconversion vers l’ingénierie logicielle.</p>
          </div>

          <div>
            <h3 class="font-serif text-xl">2011 — 2013</h3>
            <p class="text-sm text-stone">Assistante de manager — Universal Music Publishing</p>
          </div>

          <div>
            <h3 class="font-serif text-xl">2005 — 2011</h3>
            <p class="text-sm text-stone">Emplois de terrain (Parc Astérix, McDonald’s, mairie…)</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-chalk py-12 border-t border-ink/5">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <p class="text-xs uppercase tracking-widest text-stone">Made By Caroline</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style scoped>
/* keep component-specific overrides, most styling comes from Tailwind + global styles */
.site-header { /* no-op - kept for safety if JS toggles things later */ }
</style>
