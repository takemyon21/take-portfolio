import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import cloudflare from '@astrojs/cloudflare'

//
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  server: {
    // 他の端末からローカルサーバを確認させせたいので、hostをtrueにする
    host: true,
    // 開発サーバーが立ち上がったらブラウザを自動で開かせる
    open: true
  },
  output: 'hybrid',
  adapter: cloudflare()
  // output: 'static'
})
