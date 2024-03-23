const routes = [
  {
    path: "/login",
    component: () => import("@/pages/login.vue"), //路由懒加载
  },
  {
    path: "/pc/designer",
    component: () => import("@/designer/views/designer.vue"), //路由懒加载
  },
]

export default routes
