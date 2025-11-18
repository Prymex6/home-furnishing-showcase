<template>
  <section id="contact" class="contact section-light">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Kontakt</h2>
        <p>Skontaktuj się z nami i umów na bezpłatną konsultację</p>
      </div>

      <div class="contact-content">
        <div class="contact-info" data-aos="fade-right">
          <div class="contact-header">
            <span class="section-badge">
              <i class="fas fa-headset"></i>
              Kontakt
            </span>
            <h3>
              Porozmawiajmy o <span class="text-gradient">Twoim projekcie</span>
            </h3>
            <p>
              Jesteśmy dostępni od poniedziałku do piątku w godzinach
              8:00-18:00. Odpowiadamy na wszystkie zapytania w ciągu 24 godzin.
            </p>
          </div>

          <div class="contact-items">
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="contact-details">
                <h4>Adres</h4>
                <p>ul. Meblowa 123<br />00-001 Warszawa</p>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-phone"></i>
              </div>
              <div class="contact-details">
                <h4>Telefon</h4>
                <p>+48 123 456 789</p>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-details">
                <h4>Email</h4>
                <p>kontakt@domelegancja.pl</p>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div class="contact-details">
                <h4>Godziny Otwarcia</h4>
                <p>Pon-Pt: 8:00-18:00<br />Sb: 9:00-14:00</p>
              </div>
            </div>
          </div>

          <div class="contact-social">
            <h4>Śledź nas</h4>
            <div class="social-links">
              <a href="#" class="social-link">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-pinterest-p"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form-wrapper" data-aos="fade-left">
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-header">
              <h4>Wyślij wiadomość</h4>
              <p>Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24h</p>
            </div>

            <div v-if="submitStatus === 'success'" class="success-message">
              <i class="fas fa-check-circle"></i>
              Dziękujemy za wiadomość! Skontaktujemy się z Tobą w ciągu 24
              godzin.
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Imię i nazwisko *</label>
                <input
                  type="text"
                  v-model="form.name"
                  class="form-control"
                  :class="{ error: errors.name }"
                  placeholder="Jan Kowalski"
                  required
                />
                <div v-if="errors.name" class="error-message">
                  <i class="fas fa-exclamation-circle"></i>
                  {{ errors.name }}
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Email *</label>
                <input
                  type="email"
                  v-model="form.email"
                  class="form-control"
                  :class="{ error: errors.email }"
                  placeholder="jan@example.com"
                  required
                />
                <div v-if="errors.email" class="error-message">
                  <i class="fas fa-exclamation-circle"></i>
                  {{ errors.email }}
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Telefon</label>
                <input
                  type="tel"
                  v-model="form.phone"
                  class="form-control"
                  placeholder="+48 123 456 789"
                />
              </div>

              <div class="form-group">
                <label class="form-label">Rodzaj usługi *</label>
                <select
                  v-model="form.service"
                  class="form-control"
                  :class="{ error: errors.service }"
                  required
                >
                  <option value="" disabled>Wybierz usługę</option>
                  <option value="salon">Wyposażenie Salonu</option>
                  <option value="sypialnia">Aranżacja Sypialni</option>
                  <option value="kuchnia">Meble Kuchenne</option>
                  <option value="łazienka">Wyposażenie Łazienki</option>
                  <option value="biuro">Meble Biurowe</option>
                  <option value="doradztwo">Doradztwo Projektowe</option>
                  <option value="kompleksowe">Kompleksowe Wyposażenie</option>
                </select>
                <div v-if="errors.service" class="error-message">
                  <i class="fas fa-exclamation-circle"></i>
                  {{ errors.service }}
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Budżet (opcjonalnie)</label>
              <select v-model="form.budget" class="form-control">
                <option value="" disabled>Wybierz przedział budżetowy</option>
                <option value="5-10">5 000 - 10 000 PLN</option>
                <option value="10-25">10 000 - 25 000 PLN</option>
                <option value="25-50">25 000 - 50 000 PLN</option>
                <option value="50-100">50 000 - 100 000 PLN</option>
                <option value="100+">Powyżej 100 000 PLN</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Wiadomość *</label>
              <textarea
                v-model="form.message"
                class="form-control"
                :class="{ error: errors.message }"
                rows="6"
                placeholder="Opisz swój projekt lub pytanie..."
                required
              ></textarea>
              <div class="char-count">{{ form.message.length }}/500</div>
              <div v-if="errors.message" class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                {{ errors.message }}
              </div>
            </div>

            <div class="form-group">
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  v-model="form.newsletter"
                  class="checkbox"
                />
                <span class="checkmark"></span>
                Chcę otrzymywać newsletter z inspiracjami i promocjami
              </label>
            </div>

            <button
              type="submit"
              class="btn btn-submit"
              :disabled="submitStatus === 'loading'"
            >
              <span v-if="submitStatus === 'loading'" class="loading"></span>
              <span v-else>
                <i class="fas fa-paper-plane"></i>
                Wyślij Wiadomość
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
        newsletter: false,
      },
      errors: {},
      submitStatus: null,
    };
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.form.name.trim()) {
        this.errors.name = "Imię i nazwisko jest wymagane";
      }

      if (!this.form.email.trim()) {
        this.errors.email = "Email jest wymagany";
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = "Podaj poprawny adres email";
      }

      if (!this.form.service) {
        this.errors.service = "Wybierz rodzaj usługi";
      }

      if (!this.form.message.trim()) {
        this.errors.message = "Wiadomość jest wymagana";
      } else if (this.form.message.length > 500) {
        this.errors.message = "Wiadomość nie może przekraczać 500 znaków";
      }

      return Object.keys(this.errors).length === 0;
    },

    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },

    async submitForm() {
      if (!this.validateForm()) return;

      this.submitStatus = "loading";

      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log("Formularz wysłany:", this.form);

        this.submitStatus = "success";
        this.resetForm();

        setTimeout(() => {
          this.submitStatus = null;
        }, 5000);
      } catch (error) {
        this.submitStatus = "error";
        console.error("Błąd wysyłania formularza:", error);
      }
    },

    resetForm() {
      this.form = {
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
        newsletter: false,
      };
    },
  },
};
</script>
