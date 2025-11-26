<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :autoplay="{ delay: 800, disableOnInteraction: true }"
  >
    <swiper-slide v-for="(review, index) in reviews" :key="index"
      ><div
        class="card shadow-sm p-4 review-card d-flex flex-column justify-content-lg-center align-items-center"
      >
        <p class="review-author mt-3 text-end">— {{ review.author }}</p>

        <p class="review-text">{{ review.text }}</p>
      </div>
    </swiper-slide>

    ...
  </swiper>
</template>
<script>
// import Swiper core and required modules
import { A11y, Autoplay } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [A11y, Autoplay],
    };
  },
  data() {
    return {
      reviews: [
        { text: "خدمة ممتازة وسريعة جدًا.", author: "محمد علي" },
        { text: "أنصح بالتعامل معهم لأي عمل كهربائي.", author: "سارة محمود" },
        { text: "فني محترف وذو خبرة عالية.", author: "أحمد خالد" },
        { text: "تعامل راقي وأسعار مناسبة.", author: "ليلى سمير" },
      ],
    };
  },
};
</script>

<style scoped>
.review-card {
  border: none;
  border-radius: 12px;
  background-color: #f8f9fa;
  transition: transform 0.3s, box-shadow 0.3s;
}

.review-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.review-text {
  font-size: 18px;
  color: #333;
  line-height: 1.6;
}

.review-author {
  font-weight: 600;
  color: #13547a;
}
</style>
