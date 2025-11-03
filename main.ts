import { setupApp } from "https://git.foo-bar.top/sean/deno-micro-cms/raw/commit/3a50cddae3e9c5ad9e565132c50355672c33f1dc/mod.ts";

const app = await setupApp({
  STATIC_ROUTES: `/admin,www-admin,index.html,index.html;,www,index.html,index.html`,
});

export default {
  fetch: app.fetch,
};
