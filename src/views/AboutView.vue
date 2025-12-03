<template>
  <section id="about">
    <div class="about pb-5">
      <div class="container">
        <addres-pages
          :Addres="addres"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <div class="row d-flex p-0 m-0">
          <div class="col col-12 col-sm-6 col-lg-6 p-0 m-0 mt-5 pt-5">
            <ul class="m-0 p-0 pe-4 ps-2">
              <li class="" data-aos="fade-left">
                <font-awesome-icon
                  icon="fa-solid fa-check"
                  class="iconn text-primary"
                />
                <span>فنيون محترفون وذو خبرة</span>
              </li>
              <li class="" data-aos="fade-left">
                <font-awesome-icon
                  icon="fa-solid fa-check"
                  class="iconn text-primary"
                />
                <span>استخدام أفضل المواد وأحدث التقنيات</span>
              </li>
              <li class="" data-aos="fade-left">
                <font-awesome-icon
                  icon="fa-solid fa-check"
                  class="iconn text-primary"
                />
                <span>الالتزام بالمواعيد وجودة العمل</span>
              </li>
              <li class="" data-aos="fade-left">
                <font-awesome-icon
                  icon="fa-solid fa-check"
                  class="iconn text-primary"
                />
                <span>دعم كامل وخدمة عملاء على مدار الساعة</span>
              </li>
            </ul>
          </div>
          <div
            class="col img col-12 col-sm-6 col-lg-5 p-0 m-0 mt-5"
            data-aos="fade-right"
          >
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
    line-height: 50px;
    display: flex;
    font-weight: 800;
    .iconn {
      font-weight: 800;
      background-color: #80d0c783;
      padding: 4px 4px;
      margin-left: 10px;
      border-radius: 50%;
    }
  }
}
</style>
