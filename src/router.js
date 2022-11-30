import { createWebHistory, createRouter } from "vue-router";
import Project from "./components/Project.vue";
import Home from "./components/Home.vue";
import Main from "./components/Main.vue";
import Skill from "./components/Skill.vue";
import Work from "./components/Work.vue";
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/project",
    component: Project
  },
  {
    path: "/skill",
    component: Skill
  },
  {
    path: "/work",
    component: Work
  }

  // {
  //   path: "/",
  //   component: Main,
  //   children: [{ path: "/project", component: Project }]
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
