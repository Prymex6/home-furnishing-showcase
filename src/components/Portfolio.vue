<template>
  <section id="portfolio" class="portfolio section-white">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Nasze Realizacje</h2>
        <p>Zobacz efekty naszej pracy i zainspiruj się</p>
      </div>

      <div class="portfolio-header" data-aos="fade-up">
        <span class="section-badge">
          <i class="fas fa-trophy"></i>
          Najlepsze Projekty
        </span>
        <h3>
          Przekształcamy <span class="text-gradient">przestrzenie</span> w
          marzenia
        </h3>
      </div>

      <div class="portfolio-filters" data-aos="fade-up">
        <button
          v-for="filter in filters"
          :key="filter.id"
          :class="['filter-btn', { active: activeFilter === filter.id }]"
          @click="activeFilter = filter.id"
        >
          {{ filter.name }}
        </button>
      </div>

      <div class="portfolio-grid">
        <div
          class="portfolio-card"
          v-for="project in filteredProjects"
          :key="project.id"
          data-aos="fade-up"
          :data-aos-delay="project.delay"
        >
          <div class="portfolio-image">
            <div class="portfolio-visual">
              <i :class="project.icon"></i>
            </div>
            <div class="portfolio-overlay">
              <div class="portfolio-actions">
                <button class="action-btn">
                  <i class="fas fa-expand"></i>
                </button>
                <button class="action-btn">
                  <i class="fas fa-link"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="portfolio-content">
            <div class="portfolio-meta">
              <span class="portfolio-category">{{ project.category }}</span>
              <span class="portfolio-year">{{ project.year }}</span>
            </div>
            <h4>{{ project.title }}</h4>
            <p>{{ project.description }}</p>
            <div class="portfolio-features">
              <span class="feature">
                <i class="fas fa-ruler-combined"></i>
                {{ project.area }}
              </span>
              <span class="feature">
                <i class="fas fa-clock"></i>
                {{ project.duration }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-cta" data-aos="fade-up">
        <div class="cta-content">
          <h3>Zainspirował Cię któryś projekt?</h3>
          <p>Stworzymy podobną przestrzeń specjalnie dla Ciebie</p>
          <a href="#contact" class="btn btn-large">
            <i class="fas fa-magic"></i>
            Rozpocznij Projekt
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      activeFilter: "all",
      filters: [
        { id: "all", name: "Wszystkie" },
        { id: "salon", name: "Salony" },
        { id: "sypialnia", name: "Sypialnie" },
        { id: "kuchnia", name: "Kuchnie" },
        { id: "łazienka", name: "Łazienki" },
      ],
      projects: [
        {
          id: 1,
          title: "Nowoczesny Salon Loft",
          description:
            "Przestronny salon w stylu industrialnym z elementami loft",
          category: "Salon",
          year: "2024",
          area: "45 m²",
          duration: "6 tygodni",
          icon: "fas fa-couch",
          filter: "salon",
          delay: 0,
        },
        {
          id: 2,
          title: "Sypialnia Premium",
          description: "Luksusowa sypialnia z garderobą i łazienką",
          category: "Sypialnia",
          year: "2024",
          area: "35 m²",
          duration: "8 tygodni",
          icon: "fas fa-bed",
          filter: "sypialnia",
          delay: 100,
        },
        {
          id: 3,
          title: "Kuchnia Otwarta",
          description: "Funkcjonalna kuchnia połączona z jadalnią",
          category: "Kuchnia",
          year: "2023",
          area: "28 m²",
          duration: "10 tygodni",
          icon: "fas fa-utensils",
          filter: "kuchnia",
          delay: 200,
        },
        {
          id: 4,
          title: "Łazienka SPA",
          description: "Łazienka z sauną i wanną z hydromasażem",
          category: "Łazienka",
          year: "2023",
          area: "18 m²",
          duration: "7 tygodni",
          icon: "fas fa-bath",
          filter: "łazienka",
          delay: 300,
        },
        {
          id: 5,
          title: "Salon Klasyczny",
          description: "Elegancki salon w stylu klasycznym",
          category: "Salon",
          year: "2023",
          area: "40 m²",
          duration: "5 tygodni",
          icon: "fas fa-couch",
          filter: "salon",
          delay: 400,
        },
        {
          id: 6,
          title: "Kuchnia Nowoczesna",
          description: "Minimalistyczna kuchnia w stylu nowoczesnym",
          category: "Kuchnia",
          year: "2024",
          area: "22 m²",
          duration: "9 tygodni",
          icon: "fas fa-utensils",
          filter: "kuchnia",
          delay: 500,
        },
      ],
    };
  },
  computed: {
    filteredProjects() {
      if (this.activeFilter === "all") {
        return this.projects;
      }
      return this.projects.filter(
        (project) => project.filter === this.activeFilter
      );
    },
  },
};
</script>
