

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    "tailwindcss",
    [
      "cssnano", {
        preset: "default"
      }
    ],
    "postcss-nested",
    [
      "postcss-custom-media", {
        preserv: false
      }
    ],
    "postcss-font-magician"
 
  ]
};

console.log('PostCSS config loaded');  // Adicione isso para verificar se o arquivo está sendo carregado.

export default config;
