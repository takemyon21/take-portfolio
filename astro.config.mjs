import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
// export default defineConfig({});
export default defineConfig({
  integrations: [tailwind()],
  server: {
    // 他の端末からローカルサーバを確認させせたいので、hostをtrueにする
    host: true,
    // 開発サーバーが立ち上がったらブラウザを自動で開かせる
    open: true
  }
})
