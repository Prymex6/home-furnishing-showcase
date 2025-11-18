<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="logo">
          <h2>DomElegancja</h2>
        </div>
        <ul class="nav-links" :class="{ 'nav-active': isMenuOpen }">
          <li><a href="#home" @click="closeMenu">Home</a></li>
          <li><a href="#about" @click="closeMenu">O Nas</a></li>
          <li><a href="#services" @click="closeMenu">Usługi</a></li>
          <li><a href="#portfolio" @click="closeMenu">Realizacje</a></li>
          <li><a href="#testimonials" @click="closeMenu">Opinie</a></li>
          <li><a href="#contact" @click="closeMenu">Kontakt</a></li>
        </ul>
        <div class="burger" @click="toggleMenu">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>