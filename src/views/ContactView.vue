<template>
  <section class="contact-section py-5">
    <div class="container">
      <addres-pages :-addres="addres" />
      <div class="row mt-5 h-100 map">
        <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
          <p class="contact-item">
            <strong> <FontAwesomeIcon :icon="faMapPin" class="icon" /> </strong> دبي،
            الإمارات العربية المتحدة
          </p>
          <p class="contact-item">
            <strong><FontAwesomeIcon :icon="faPhone" class="icon" /></strong> +971 55 546
            1048
          </p>
          <p class="contact-item">
            <strong><FontAwesomeIcon :icon="faEnvelope" class="icon" /></strong>
            info@example.com
          </p>
        </div>

        <div class="col-12 col-md-6 mb-4 mb-md-0">
          <iframe
            class="contact-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.123456789!2d55.123456!3d25.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f123456789%3A0x123456789abcdef!2sDubai!5e0!3m2!1sar!2seg!4v1690000000000!5m2!1sar!2seg"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AddresPages from "@/components/AddresPages.vue";
import {
  faMapPin,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "ContactSection",
  components: {
    AddresPages,
  },
  data() {
    return {
      addres: "إتصل بنا",
      faMapPin,
      faPhone,
      faEnvelope,
    };
  },
};
</script>

<style scoped>
.contact-section {
  background-color: #f8f9fa;
  min-height: 100vh;
}
.icon{
    padding: 4px;
    background-color: #80d0c7;
    border-radius: 50%;
    margin: 0 10px;
}
.contact-title {
  color: #80d0c7;
  font-weight: 700;
}

.contact-item {
  color: #13547a;
  font-size: 18px;
  margin-bottom: 10px;
}

.contact-map {
  border-radius: 12px;
  width: 100%;
  height: 100%;
}
</style>
