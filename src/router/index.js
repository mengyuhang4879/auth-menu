import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const frontRoutes = [
  {
    path: "/office",
    name: "office",
    component: () => import(/* webpackChunkName: "office" */ "../views/office.vue"),
    children: [
      {
        path: "/leaveApplication",
        name: "leaveApplication",
        component: () => import(/* webpackChunkName: "leaveApplication" */ "../views/leaveApplication.vue"),
        children: [
          {
            path: "/leaveRecord",
            name: "leaveRecord",
            component: () => import(/* webpackChunkName: "leaveRecord" */ "../views/leaveRecord.vue"),
          }
        ]
      },
      {
        path: "/businessTripApplication",
        name: "businessTripApplication",
        component: () => import(/* webpackChunkName: "businessTripApplication" */ "../views/businessTripApplication.vue"),
      }
    ]
  },
  {
    path: "/systemSettings",
    name: "systemSettings",
    component: () => import(/* webpackChunkName: "systemSettings" */ "../views/systemSettings.vue"),
    children: [
      {
        path: "/authority",
        name: "authority",
        component: () => import(/* webpackChunkName: "authority" */ "../views/authority.vue"),
        children: [
          {
            path: "/userRoles",
            name: "userRoles",
            component: () => import(/* webpackChunkName: "userRoles" */ "../views/userRoles.vue"),
          },
          {
            path: "/menuSettings",
            name: "menuSettings",
            component: () => import(/* webpackChunkName: "menuSettings" */ "../views/menuSettings.vue"),
          }
        ]
      }
    ]
  }
];
export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/home.vue"),
  }
];

const router = new VueRouter({
  routes
});

export default router;
