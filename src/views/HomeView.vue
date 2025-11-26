<template>
  <div
    id="section_1"
    class="hero-section d-flex justify-content-center align-items-center"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-12 mx-auto">
          <h1 class="text-white text-center">{{ addres }}</h1>
          <h6 class="text-center text-white">{{ title }}</h6>
          <a href="tel:+971555461048" class="btn btn-call mt-5 d-block p-2"
            >إتــــصــــــــل بــــــنــا</a
          >
        </div>
      </div>
    </div>
  </div>
  <about-view />

  <services-view />

  <reviews-view />

  <contact-view />

  <footer-view />
</template>

<script>
import AboutView from "./AboutView.vue";
import ContactView from "./ContactView.vue";
import FooterView from "./FooterView.vue";
import ReviewsView from "./ReviewsView.vue";
import ServicesView from "./ServicesView.vue";

export default {
  name: "HomeView",
  components: {
    AboutView,
    ServicesView,
    ReviewsView,
    ContactView,
    FooterView,
  },
  data() {
    return {
      addres: "فني كهربائي  خدمات كهرباء موثوقة وسريعة",
      title: "دبي و عجمان",
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-weight: bold;
  font-size: 42px;
}
h6 {
  font-size: 24px;
}
.btn-call {
  background-color: var(--custom-btn-bg-color);
  color: var(--white-color);
  font-weight: 800;
  transition: all 0.4s ease;
}
.btn-call:hover {
  background-color: var(--custom-btn-bg-hover-color);
  color: var(--white-color);
}
</style>
