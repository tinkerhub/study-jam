import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// Import the Netlify adapter
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: "https://studyjams.tinkerub.org", // Update the site URL if needed
  integrations: [tailwind()],
  output: 'server', // Required for server-side adapters like Netlify
  adapter: netlify(),
});
