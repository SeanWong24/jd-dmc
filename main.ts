import { setupApp } from "https://git.foo-bar.top/sean/deno-micro-cms/raw/commit/efa4105079f6460f912ca4b36462d2aabcf16923/mod.ts";

const app = await setupApp({
  STATIC_ROUTES: `/admin,www-admin,index.html,index.html;,www,index.html,index.html`,
});

export default {
  fetch: app.fetch,
};
