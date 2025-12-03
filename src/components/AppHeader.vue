<template>
  <nav class="navbar navbar-expand-lg navbar-dark" dir="rtl">
    <div class="container">
      <a class="navbar-brand" href="/">
        <h1>الإســلامـيـة</h1>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-lg-5 me-lg-auto">
          <router-link to="/" class="nav-link nav-item" aria-current="page">
            الصفحة الرئيسية
          </router-link>

          <router-link to="/about" class="nav-link nav-item">
            من نحن
          </router-link>

          <router-link to="/services" class="nav-link nav-item">
            خدمتنا
          </router-link>

          <router-link to="/reviews" class="nav-link nav-item">
            الأراء
          </router-link>

          <router-link to="/contact" class="nav-link nav-item">
            اتصل بنا
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from "@/assets/img/logo.png";
export default {
  name: "AppHeader",
  data() {
    return {
      logoUrl: logo,
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  width: 100%;
  background-color: var(--secondary-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 999999;
}

.logo {
  margin: 0;
  height: 60px;
  width: 60px;
}
.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgb(255, 255, 255)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-brand h1 {
  font-weight: bold;
}
.nav-item.nav-link {
  display: inline-block;
  color: var(--white-color) !important;
  font-weight: 900 !important;
  text-decoration: none;
  padding: 10px 30px !important;
  transition: all 0.4s ease;
}

.nav-item.nav-link:hover {
  color: var(--link-hover-color) !important;
}

.router-link-active.nav-item.nav-link,
.nav-item.nav-link.active {
  color: var(--link-hover-color) !important;
}
</style>
