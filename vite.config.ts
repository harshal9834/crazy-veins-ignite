import { defineConfig, mergeConfig, loadEnv } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(async (env) => {
  const { command, mode } = env;

  const internalPlugins = [];
  internalPlugins.push(tailwindcss());
  internalPlugins.push(tsconfigPaths({ projects: ["./tsconfig.json"] }));

  const tanstackStartDefaults = {
    importProtection: {
      behavior: "error",
      client: {
        files: ["**/server/**"],
        specifiers: ["server-only"]
      }
    }
  };
  
  internalPlugins.push(tanstackStart({
    ...tanstackStartDefaults,
    server: { entry: "server" }
  }));
  
  internalPlugins.push(react());

  let envDefine = {};
  const loadedEnv = loadEnv(mode, process.cwd(), "VITE_");
  for (const [key, value] of Object.entries(loadedEnv)) {
    envDefine[`import.meta.env.${key}`] = JSON.stringify(value);
  }

  let config = {
    define: envDefine,
    server: {
      port: 5000,
      host: true,
    },
    ssr: {
      noExternal: ["@tanstack/react-start", "@tanstack/react-start-server"],
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
    },
    resolve: {
      alias: {
        "@": `${process.cwd()}/src`
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core"
      ]
    },
    plugins: [...internalPlugins]
  };

  return config;
});
