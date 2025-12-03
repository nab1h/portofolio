<template>
  <section id="reviews">
    <div class="container">
      <addres-pages
        :-addres="addres"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div class="inp w-100">
          <ReviewForm />
        </div>
        <div class="slide w-100">
          <CustemurSlider />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AddresPages from "@/components/AddresPages.vue";
import CustemurSlider from "@/components/CustemurSlider.vue";
import ReviewForm from "@/components/ReviewForm.vue";

export default {
  name: "ReviewsView",
  components: { CustemurSlider, AddresPages, ReviewForm },
  data() {
    return {
      addres: "آراء العملاء",
    };
  },
};
</script>

<style scoped>
#reviews {
  margin-bottom: 40px;
  padding-bottom: 40px;
}
</style>
