<template>
  <footer class="site-footer section-padding pt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-12 mb-4 pb-2">
          <a class="navbar-brand" href="/">
            <h1>الإســلامـيـة</h1>
          </a>
        </div>

        <div class="col-lg-3 col-md-4 col-6">
          <h6 class="site-footer-title mb-3">الموارد</h6>

          <ul class="site-footer-links">
            <li class="site-footer-link-item">
              <a href="/" class="site-footer-link">الصفحة الرئيسية</a>
            </li>

            <li class="site-footer-link-item">
              <a href="/services" class="site-footer-link">الخدمات</a>
            </li>

            <li class="site-footer-link-item">
              <a href="#" class="site-footer-link">الاسئلة الشائعة</a>
            </li>

            <li class="site-footer-link-item">
              <a href="/contact" class="site-footer-link">اتصل بنا</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
          <h6 class="site-footer-title mb-3">التفاصيل</h6>

          <p class="text-white d-flex mb-1">
            <a href="tel: +971 55 546 1048" class="site-footer-link-en">
              +971 55 546 1048
            </a>
          </p>

          <p class="text-white d-flex mb-1">
            <a href="tel: +971 52 617 7431" class="site-footer-link-en">
              +971 52 617 7431
            </a>
          </p>

          <p class="text-white d-flex">
            <a href="mailto:info@company.com" class="site-footer-link-en">
              info@company.com
            </a>
          </p>
        </div>

        <div class="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
          <div class="h-100 w-100">
            <p class="copyright-text text-muted mt-lg-5 mt-4">
              Copyright © 2026 Topic Listing Center. All rights reserved.
              <br /><br />Design:
              <a
                rel="nofollow"
                href="https://www.facebook.com/nab1h"
                target="_blank"
                >Nabih Alashmawy</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style scoped>
.site-footer {
  border-bottom: 10px solid var(--secondary-color);
  position: relative;
}

.site-footer::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 200px 200px;
  border-color: transparent transparent var(--secondary-color) transparent;
  pointer-events: none;
  z-index: -1;
}
.navbar-brand h1 {
  font-weight: bold;
}
.site-footer-title {
  color: var(--primary-color);
  font-weight: bold;
}

.site-footer-links {
  padding-left: 0;
  z-index: 4;
}
.site-footer-link-en {
  color: var(--secondary-color);
  line-height: normal;
  text-decoration: none;
  font-weight: 300;
  z-index: 4;
}

.site-footer-link-item {
  display: block;
  list-style: none;
  line-height: normal;
  z-index: 4;
}

.site-footer-link {
  color: var(--secondary-color);
  font-size: var(--copyright-font-size);
  font-weight: var(--font-weight-medium);
  line-height: normal;
  text-decoration: none;
  font-weight: 500;
}

.copyright-text {
  font-size: 15px;
}
</style>
