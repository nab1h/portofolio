<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="100"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :autoplay="{ delay: 1800, disableOnInteraction: true }"
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
        {
          text: "خدمة ممتازة وتعامل محترم، شركة الإسلامية شغلهم نظيف.",
          author: "محمد ياسر",
        },
        {
          text: "فنيين محترفين وملتزمين بالمواعيد، أنصح بهم.",
          author: "سعاد مصطفى",
        },
        {
          text: "شغل الكهرباء عندهم فوق الممتاز، شكراً الإسلامية.",
          author: "خالد عمران",
        },
        { text: "تعامل راقي وأسعار مناسبة جداً.", author: "أميرة حسين" },
        {
          text: "شغل سباكة ممتاز وبدون أي مشاكل بعده.",
          author: "طارق عبد الله",
        },
        {
          text: "جربتهم في النقاشة، الشغل كان نظيف ومرتب.",
          author: "حسام خليل",
        },
        { text: "أفضل شركة تعاملت معها في دبي.", author: "ريم علي" },
        { text: "التزام بالمواعيد وجودة في التنفيذ.", author: "خالد شريف" },
        { text: "فنيين محترفين وبشوشين، تجربة ممتازة.", author: "محمود كمال" },
        { text: "شركه تستحق الثقة، شغل بناء ممتاز.", author: "سارة محمد" },

        {
          text: "عملوا لي شغل كهرباء في الشارقة وكان ممتاز جداً.",
          author: "مروان منصور",
        },
        { text: "شغل محارة نظيف ودقيق.", author: "نسرين أحمد" },
        {
          text: "أسعارهم مناسبة بالنسبة لجودة الشغل.",
          author: "عمر عبد التواب",
        },
        { text: "أسرع خدمة حصلت عليها، شكراً الإسلامية.", author: "هند السيد" },
        { text: "شغل سباكة مضبوط بدون أي تسريب.", author: "أحمد نبيل" },
        { text: "عندهم فنيين محترفين في كل المجالات.", author: "يمنى صابر" },
        { text: "أنصح بهم لأي أعمال في دبي.", author: "فادي هاني" },
        { text: "عجبتني دقة الشغل والاهتمام بالتفاصيل.", author: "منى سعيد" },
        { text: "تعامل ممتاز ومحترفين فعلاً.", author: "وليد فاروق" },
        { text: "شركة تعتمد عليها فعلاً في أي شغل.", author: "حسام طه" },

        {
          text: "اشتغلت معهم في عجمان وكانوا فوق الممتاز.",
          author: "نرمين حسن",
        },
        { text: "تركيب كهرباء احترافي وسريع.", author: "عبد الرحمن جمال" },
        {
          text: "شغلهم في النقاشة غير أي حد تاني، ألوان جميلة.",
          author: "شيماء لطفي",
        },
        { text: "ناس محترمة وشغلهم بيرفع الرأس.", author: "عماد سامي" },
        { text: "جودة عالية في أعمال البناء.", author: "يوسف خالد" },
        {
          text: "شركة منظمة جداً وملتزمين في التوقيت.",
          author: "حسام عبد الفتاح",
        },
        {
          text: "عملوا لي سباكة كاملة ومافيش مشكلة واحدة ظهرت.",
          author: "سلوى كمال",
        },
        { text: "أفضل شركة جربتها في الشارقة.", author: "هاني يوسف" },
        { text: "سريعون في الاستجابة والإنجاز.", author: "أماني جابر" },
        { text: "مصداقية وأمانة في كل تفاصيل الشغل.", author: "خالد السيد" },

        { text: "عجبني شغل المحارة جدًا، ناعم ومتساوي.", author: "محمود رضا" },
        {
          text: "تركيب الإنارات عندهم ممتاز، بدون أي أخطاء.",
          author: "إسراء حسن",
        },
        { text: "شركة تستحق التقدير فعلاً.", author: "منير لبيب" },
        { text: "فنيين على مستوى عالي من الخبرة.", author: "رانيا فؤاد" },
        { text: "أنضف شغل كهرباء اتعمل لي.", author: "كريم عبد الرحيم" },
        { text: "سعر مقابل خدمة ممتاز جداً.", author: "ميار نبيل" },
        { text: "جربتهم في دبى وكانوا ممتازين.", author: "نادر محمود" },
        { text: "شغل السباكة عندهم محترم ومحترف.", author: "مها إسماعيل" },
        { text: "ناس بتفهم وبتشتغل ضمير.", author: "إبراهيم أحمد" },
        { text: "التعامل معاهم مريح وراقي جداً.", author: "ياسمين طه" },

        { text: "سريعة في التنفيذ وجودة عالية.", author: "أدهم علاء" },
        {
          text: "اشتغلت معهم في النقاشة وكان شغل جميل.",
          author: "سمر عبد الله",
        },
        { text: "تجربة ممتازة ومش آخر مرة.", author: "فهد سالم" },
        { text: "أفضل شركة فنيين شفتها في الإمارات.", author: "ليلى عمر" },
        { text: "مرونة في التعامل والتزام كبير.", author: "عمرو حسين" },
        { text: "شغل المحارة عندهم ممتاز جدًا.", author: "نهى محمود" },
        { text: "شركة تستحق الثقة والاعتماد عليها.", author: "حسن خالد" },
        { text: "تعامل محترم وشغل متقن.", author: "عزة جمال" },
        {
          text: "تركيب السباكة والكهرباء عندهم احترافي.",
          author: "مروان سامي",
        },
        { text: "شغل ممتاز وأنصح أي حد بيهم.", author: "هاجر محمد" },
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
