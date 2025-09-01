import { setupApp } from "https://git.foo-bar.top/sean/deno-micro-cms/raw/branch/main/mod.ts";

const app = await setupApp({
  STATIC_ROUTES: `/admin,www-admin,index.html,index.html:,www,index.html,index.html`,
});

export default {
  fetch: app.fetch,
};
