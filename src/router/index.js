import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ServicesView from "../views/ServicesView.vue";
import ReviewsView from "../views/ReviewsView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: { title: "من نحن | الإسلامية" },
  },
  {
    path: "/services",
    name: "services",
    component: ServicesView,
    meta: { title: "خدماتنا | الإسلامية" },
  },
  {
    path: "/reviews",
    name: "reviews",
    component: ReviewsView,

    meta: { title: "آراء العملاء | الإسلامية" },
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
    meta: { title: "تواصل معنا | الإسلامية" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "الإسلامية";
  next();
});

export default router;
