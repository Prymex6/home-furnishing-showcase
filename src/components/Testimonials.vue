<template>
  <section id="testimonials" class="testimonials section-gradient">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Opinie Klientów</h2>
        <p>Co mówią o nas nasi zadowoleni klienci</p>
      </div>

      <div class="testimonials-header" data-aos="fade-up">
        <span class="section-badge">
          <i class="fas fa-comments"></i>
          Zaufanie Klientów
        </span>
        <h3>
          Nasza <span class="text-gradient">reputacja</span> mówi sama za siebie
        </h3>
      </div>

      <div class="testimonials-grid">
        <div
          class="testimonial-card"
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          data-aos="fade-up"
          :data-aos-delay="testimonial.delay"
        >
          <div class="testimonial-content">
            <div class="quote-icon">
              <i class="fas fa-quote-left"></i>
            </div>
            <p>"{{ testimonial.content }}"</p>
          </div>
          <div class="testimonial-author">
            <div class="author-avatar">
              <i class="fas fa-user"></i>
            </div>
            <div class="author-info">
              <h4>{{ testimonial.author }}</h4>
              <span>{{ testimonial.position }}</span>
              <div class="rating">
                <i v-for="n in 5" :key="n" class="fas fa-star"></i>
              </div>
            </div>
          </div>
          <div class="testimonial-project">
            <i class="fas fa-home"></i>
            {{ testimonial.project }}
          </div>
        </div>
      </div>

      <div class="testimonials-stats" data-aos="fade-up">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">4.9/5</div>
            <div class="stat-label">Średnia ocena</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">200+</div>
            <div class="stat-label">Opinii online</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">98%</div>
            <div class="stat-label">Polecających</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Testimonials",
  data() {
    return {
      testimonials: [
        {
          id: 1,
          content:
            "Profesjonalna obsługa i doskonałe wyczucie stylu. Nasz salon wygląda teraz jak z katalogu! Zespół wykazał się niezwykłą kreatywnością i dbałością o detal.",
          author: "Anna Kowalska",
          position: "Klient",
          project: "Salon Nowoczesny - 45m²",
          delay: 0,
        },
        {
          id: 2,
          content:
            "Kompleksowe podejście do projektu i terminowa realizacja. Polecam z czystym sumieniem! Wszystko zostało wykonane zgodnie z harmonogramem i budżetem.",
          author: "Michał Nowak",
          position: "Klient Biznesowy",
          project: "Biuro - 80m²",
          delay: 100,
        },
        {
          id: 3,
          content:
            "Doskonale zrozumieli nasze potrzeby i stworzyli przestrzeń idealną dla naszej rodziny. Każdy detal został przemyślany i dopracowany.",
          author: "Katarzyna Wiśniewska",
          position: "Klient",
          project: "Mieszkanie Rodzinne - 95m²",
          delay: 200,
        },
        {
          id: 4,
          content:
            "Inwestycja w profesjonalne wyposażenie wnętrz to najlepsza decyzja. Zyskaliśmy nie tylko piękne, ale i funkcjonalne przestrzenie.",
          author: "Robert Lewandowski",
          position: "Architekt",
          project: "Rezydencja - 200m²",
          delay: 300,
        },
        {
          id: 5,
          content:
            "Współpraca na najwyższym poziomie. Projektanci słuchali naszych pomysłów i perfekcyjnie je zrealizowali, dodając własne profesjonalne uwagi.",
          author: "Magda Zielińska",
          position: "Klient",
          project: "Kuchnia z Jadalnią - 30m²",
          delay: 400,
        },
        {
          id: 6,
          content:
            "Terminowość, profesjonalizm i niesamowite efekty wizualne. Nasze mieszkanie stało się miejscem, do którego chce się wracać.",
          author: "Tomasz Wójcik",
          position: "Klient",
          project: "Apartament - 65m²",
          delay: 500,
        },
      ],
    };
  },
};
</script>
