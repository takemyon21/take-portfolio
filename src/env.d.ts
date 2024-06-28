/// <reference types="astro/client" />

// カスタム型宣言
declare global {
  interface Window {
    gsap: typeof gsap
  }
}

// カスタム型宣言
declare global {
  interface Window {
    swiper: typeof swiper
  }
}
