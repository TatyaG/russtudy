import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import BookPage from "@/views/BookPage.vue";
import testPage from "@/views/v-testPage.vue";
import NewsPage from "@/views/NewsPage.vue";
import NewsModal from "@/components/NewsModal.vue";
import error404 from "@/views/error404.vue";
import error403 from "@/views/error403.vue";
import error402 from "@/views/error402.vue";
import error401 from "@/views/error401.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/service",
    name: "service",
    component: () => import("@/views/v-service.vue"),
  },
  {
    path: "/testPage/:testId",
    name: "testPage",
    component: testPage,
  },
  {
    path: "/textbook",
    name: "book",
    component: BookPage,
  },
  {
    path: "/news",
    name: "news",
    component: NewsPage,
  },

  {
    path: "/news/:id",
    name: "newItem",
    component: NewsModal,
    props: true,
  },

  {
    path: "/error404",
    name: "error404",
    component: error404,
  },
  {
    path: "/error403",
    name: "error403",
    component: error403,
  },
  {
    path: "/error402",
    name: "error402",
    component: error402,
  },
  {
    path: "/error401",
    name: "error401",
    component: error401,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHistory(),
  routes,
});

export default router;
