export default {
  name: "auth",
  component: () =>
    import(
      /* webpackChunkName: "authLayout" */ "@/modules/auth/layouts/authLayout.vue"
    ),
  redirect: "/auth/login",
  children: [
    {
      path: "login",
      name: "auth-login",
      component: () =>
        import(
          /* webpackChunkName: "loginPage" */ "@/modules/auth/pages/Login.vue"
        ),
    },
  ],
};
