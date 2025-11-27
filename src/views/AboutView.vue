<template>
  <section id="about">
    <div class="about pb-5">
      <div class="container">
        <addres-pages :Addres="addres" />
        <div class="row d-flex p-0 m-0">
          <div class="col col-12 col-sm-6 col-lg-6 p-0 m-0 mt-5 pt-5">
            <ul class="m-0 p-0 pe-4 ps-2">
              <li>فنيون محترفون وذو خبرة</li>
              <li>استخدام أفضل المواد وأحدث التقنيات</li>
              <li>التزام بالمواعيد وجودة العمل</li>
              <li>دعم كامل وخدمة عملاء على مدار الساعة</li>
            </ul>
          </div>
          <div class="col img col-12 col-sm-6 col-lg-5 p-0 m-0 mt-5">
            <img class="img-about" src="@/assets/img/team.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AddresPages from "@/components/AddresPages.vue";
export default {
  name: "AboutView",
  data() {
    return {
      addres: "مــن نـحـن",
    };
  },
  components: {
    AddresPages,
  },
};
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  background-color: #80d0c717;
}
.img {
  max-width: 600px;
  max-height: 400px;
}
.img-about {
  width: 100%;
  height: 100%;
}
ul {
  list-style: none;
  li {
    font-size: 28px;
    line-height: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 800;
  }
}
</style>
