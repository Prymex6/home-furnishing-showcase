<template>
  <section id="home" class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text" data-aos="fade-right">
          <span class="hero-badge">
            <i class="fas fa-star"></i>
            Premium Wyposażenie Wnętrz
          </span>
          <h1>Twój Dom, Twoja <span class="text-gradient">Elegancja</span></h1>
          <p class="hero-subtitle">
            Przekształcamy zwykłe przestrzenie w niezwykłe miejsca do życia.
            Profesjonalne wyposażenie wnętrz, które łączy styl, komfort i
            funkcjonalność.
          </p>
          <div class="hero-buttons">
            <a href="#portfolio" class="btn btn-large">
              <i class="fas fa-eye"></i>
              Zobacz Realizacje
            </a>
            <a href="#contact" class="btn btn-outline btn-large">
              <i class="fas fa-calendar"></i>
              Bezpłatna Konsultacja
            </a>
          </div>
          <div class="hero-stats">
            <div class="hero-stat">
              <h3>15+</h3>
              <p>Lat Doświadczenia</p>
            </div>
            <div class="hero-stat">
              <h3>500+</h3>
              <p>Zrealizowanych Projektów</p>
            </div>
            <div class="hero-stat">
              <h3>98%</h3>
              <p>Zadowolonych Klientów</p>
            </div>
          </div>
        </div>
        <div class="hero-visual" data-aos="fade-left">
          <div class="hero-shape">
            <div class="hero-icons">
              <div class="hero-icon">
                <i class="fas fa-couch"></i>
                <p>Salony</p>
              </div>
              <div class="hero-icon">
                <i class="fas fa-bed"></i>
                <p>Sypialnie</p>
              </div>
              <div class="hero-icon">
                <i class="fas fa-utensils"></i>
                <p>Kuchnie</p>
              </div>
              <div class="hero-icon">
                <i class="fas fa-bath"></i>
                <p>Łazienki</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  mounted() {
    // Dodanie efektu paralaksy dla hero section
    window.addEventListener("scroll", this.handleParallax);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleParallax);
  },
  methods: {
    handleParallax() {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector(".hero");
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    },
  },
};
</script>

<style scoped>
.text-gradient {
  background: var(--gradient-secondary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
