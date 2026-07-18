// @lovable.dev/vite-tanstack-config já inclui tanstackStart, nitro (Cloudflare por padrão), etc.
// Para deploy em EasyPanel (Docker/Node) sobrescrevemos o preset do nitro para node-server.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Mantém nosso wrapper de SSR em src/server.ts
    server: { entry: "server" },
  },
  nitro: {
    config: {
      preset: "node-server",
    },
  },
});
