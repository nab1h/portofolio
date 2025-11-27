<template>
  <div
    v-for="(card, index) in cards"
    :key="index"
    class="col-12 col-md-6 col-lg-6"
  >
    <div class="card h-100 shadow-sm service-card">
      <img :src="card.img" class="card-img-top service-img" alt="service" />

      <div class="card-body text-center">
        <h2 class="card-title fw-bold">{{ card.title }}</h2>
        <p class="card-text text-muted">{{ card.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesCards",
  data() {
    return {
      cards: [
        {
          title: "أعمال الكهرباء",
          desc: "حل جميع أعطال الكهرباء المنزلية.",
          img: require("@/assets/img/bannar-about.jpg"),
        },
        {
          title: " أعمال البناء والترميم",
          desc: "بناء وعمال بناء واعمال المحارة.",
          img: require("@/assets/img/builder.jpg"),
        },
        {
          title: "خدمات الدهانات",
          desc: " دهانات داخلية وخارجية بتشطيبات فاخرة",
          img: require("@/assets/img/pointer.jpg"),
        },
        {
          title: "أعمال السباكة",
          desc: "معالجة تسريبات، تركيب مواسير وأدوات صحية وصيانة شاملة",
          img: require("@/assets/img/plumber.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.service-img {
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
}
.card {
  border: 0;
  transition: 0.3s;
}
.card:hover {
  transform: translateY(-7px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}
</style>
