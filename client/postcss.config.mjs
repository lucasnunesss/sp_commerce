

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    "tailwindcss",
    [
      "cssnano", {
        preset: "default"
      }
    ],
    "postcss-nested"
  ]
};

console.log('PostCSS config loaded');  // Adicione isso para verificar se o arquivo está sendo carregado.

export default config;
