import { setupApp } from "https://git.foo-bar.top/sean/deno-micro-cms/raw/commit/d2104333665ec9e423abe473dcf4c2900eceacd4/mod.ts";

const app = await setupApp({
  STATIC_ROUTES: `/admin,www-admin,index.html,index.html;,www,index.html,index.html`,
});

export default {
  fetch: app.fetch,
};
