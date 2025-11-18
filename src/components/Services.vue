<template>
  <section id="services" class="services section-light">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Nasze Usługi</h2>
        <p>Kompleksowe rozwiązania dla Twojego domu</p>
      </div>

      <div class="services-content">
        <div class="services-header" data-aos="fade-up">
          <span class="section-badge">
            <i class="fas fa-star"></i>
            Premium Usługi
          </span>
          <h3>
            Oferujemy <span class="text-gradient">kompleksowe</span> rozwiązania
          </h3>
          <p>Od projektu po realizację - dbamy o każdy detal Twojego wnętrza</p>
        </div>

        <div class="services-grid">
          <div
            class="service-card"
            v-for="service in services"
            :key="service.id"
            data-aos="fade-up"
            :data-aos-delay="service.delay"
          >
            <div class="service-header">
              <div class="service-icon">
                <i :class="service.icon"></i>
              </div>
              <span class="service-badge">{{ service.badge }}</span>
            </div>
            <h4>{{ service.title }}</h4>
            <p>{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feature in service.features" :key="feature">
                <i class="fas fa-check"></i>
                {{ feature }}
              </li>
            </ul>
            <div class="service-footer">
              <span class="service-price">{{ service.price }}</span>
              <button class="btn-service">
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="services-cta" data-aos="fade-up">
        <div class="cta-content">
          <h3>Potrzebujesz indywidualnej wyceny?</h3>
          <p>Skontaktuj się z nami, a przygotujemy spersonalizowaną ofertę</p>
          <a href="#contact" class="btn btn-large">
            <i class="fas fa-calendar-check"></i>
            Umów Konsultację
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      services: [
        {
          id: 1,
          icon: "fas fa-couch",
          badge: "Popularne",
          title: "Wyposażenie Salonu",
          description:
            "Komfortowe meble i akcesoria tworzące przestrzeń do relaksu i spotkań z bliskimi",
          features: [
            "Projekt wizualny",
            "Dobór mebli",
            "Aranżacja przestrzeni",
            "Montaż",
          ],
          price: "od 15 000 PLN",
          delay: 0,
        },
        {
          id: 2,
          icon: "fas fa-bed",
          badge: "Ekskluzywne",
          title: "Aranżacja Sypialni",
          description:
            "Stworzymy przestrzeń sprzyjającą odpoczynkowi i regeneracji",
          features: ["Łóżka premium", "Garderoby", "Oświetlenie", "Tekstylia"],
          price: "od 12 000 PLN",
          delay: 100,
        },
        {
          id: 3,
          icon: "fas fa-utensils",
          badge: "Funkcjonalne",
          title: "Meble Kuchenne",
          description:
            "Funkcjonalne i stylowe rozwiązania dla serca każdego domu",
          features: ["Meble na wymiar", "Blaty", "AGD", "Oświetlenie"],
          price: "od 25 000 PLN",
          delay: 200,
        },
        {
          id: 4,
          icon: "fas fa-bath",
          badge: "Luksusowe",
          title: "Wyposażenie Łazienki",
          description: "Eleganckie i praktyczne aranżacje łazienkowe",
          features: ["Armatura", "Płytki", "Meble łazienkowe", "Oświetlenie"],
          price: "od 18 000 PLN",
          delay: 300,
        },
        {
          id: 5,
          icon: "fas fa-chair",
          badge: "Ergonomiczne",
          title: "Meble Biurowe",
          description:
            "Ergonomiczne rozwiązania do pracy zdalnej i domowego biura",
          features: ["Biurka", "Krzesła", "Szafy", "Organizery"],
          price: "od 8 000 PLN",
          delay: 400,
        },
        {
          id: 6,
          icon: "fas fa-palette",
          badge: "Kompleksowe",
          title: "Doradztwo Projektowe",
          description: "Profesjonalne konsultacje i projektowanie wnętrz",
          features: ["Konsultacje", "Wizualizacje", "Nadzór", "Koordynacja"],
          price: "od 5 000 PLN",
          delay: 500,
        },
      ],
    };
  },
};
</script>
