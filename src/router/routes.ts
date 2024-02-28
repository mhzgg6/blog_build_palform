const routes = [
  {
    path: "/login",
    component: () => import("@/pages/login.vue"), //路由懒加载
  },
]

export default routes
