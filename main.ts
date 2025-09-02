import { setupApp } from "https://git.foo-bar.top/sean/deno-micro-cms/raw/commit/d18fba27a2a7e80b656503334ff32ab146a48052/mod.ts";

const app = await setupApp({
  STATIC_ROUTES: `/admin,www-admin,index.html,index.html;,www,index.html,index.html`,
});

export default {
  fetch: app.fetch,
};
