import { setupApp } from "https://git.foo-bar.top/sean/deno-micro-cms/raw/commit/5994edefd167765fb2caef800334fe848f260892/mod.ts";

const app = await setupApp({
  STATIC_ROUTES: `/admin,www-admin,index.html,index.html;,www,index.html,index.html`,
});

export default {
  fetch: app.fetch,
};
