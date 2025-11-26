<template>
  <section id="services">
    <div class="container container-ser">
      <AddresPages :-addres="addres" :color="color" />

      <div class="row gy-5">
        <div
          class="content col-xl-5 d-flex flex-column"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3>فني كهربائي في دبي، الشارقة، عجمان</h3>
        </div>

        <div class="col-xl-7 cards pt-4" data-aos="fade-up" data-aos-delay="200">
          <div class="row gy-4">
            <ServicesCart />
            <!-- Icon-Box -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AddresPages from "@/components/AddresPages.vue";
import ServicesCart from "@/components/ServicesCart.vue";

export default {
  name: "ServiceView",
  components: {
    AddresPages,
    ServicesCart,
  },
  data() {
    return {
      addres: "خدمــتنـا",
      color: "#fff",
    };
  },
};
</script>

<style scoped>
.cards{
  z-index: 5;
}
h3 {
  color: var(--white-color);
  font-weight: bold;
  z-index: 3;
}
</style>
