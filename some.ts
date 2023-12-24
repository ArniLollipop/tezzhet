import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      to.matched.some;
      let position = {};
      if (to.matched.length < 2) {
        position = { x: 0, y: 0 };
      }
      if (to.hash) {
        position = { selector: to.hash };
      }
      return position;
    }
  },
};
