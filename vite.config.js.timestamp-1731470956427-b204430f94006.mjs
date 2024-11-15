// vite.config.js
import { defineConfig } from "file:///D:/OSPanel/home/photo159/node_modules/vite/dist/node/index.js";
import laravel from "file:///D:/OSPanel/home/photo159/node_modules/laravel-vite-plugin/dist/index.js";
import reactRefresh from "file:///D:/OSPanel/home/photo159/node_modules/@vitejs/plugin-react-refresh/index.js";
import mdx from "file:///D:/OSPanel/home/photo159/node_modules/@mdx-js/rollup/index.js";
var vite_config_default = defineConfig({
  plugins: [
    laravel({
      input: ["resources/css/app.css", "resources/js/app.tsx"],
      refresh: true
    }),
    { enforce: "pre", ...mdx() },
    reactRefresh()
  ],
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        ".ts": "tsx"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxPU1BhbmVsXFxcXGhvbWVcXFxccGhvdG8xNTlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXE9TUGFuZWxcXFxcaG9tZVxcXFxwaG90bzE1OVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovT1NQYW5lbC9ob21lL3Bob3RvMTU5L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBsYXJhdmVsIGZyb20gXCJsYXJhdmVsLXZpdGUtcGx1Z2luXCI7XG5pbXBvcnQgcmVhY3RSZWZyZXNoIGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1yZWZyZXNoXCI7XG5cbmltcG9ydCBtZHggZnJvbSBcIkBtZHgtanMvcm9sbHVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW1xuICAgICAgICBsYXJhdmVsKHtcbiAgICAgICAgICAgIGlucHV0OiBbXCJyZXNvdXJjZXMvY3NzL2FwcC5jc3NcIiwgXCJyZXNvdXJjZXMvanMvYXBwLnRzeFwiXSxcbiAgICAgICAgICAgIHJlZnJlc2g6IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgICB7IGVuZm9yY2U6IFwicHJlXCIsIC4uLm1keCgpIH0sXG4gICAgICAgIHJlYWN0UmVmcmVzaCgpLFxuICAgIF0sXG4gICAgb3B0aW1pemVEZXBzOiB7XG4gICAgICAgIGZvcmNlOiB0cnVlLFxuICAgICAgICBlc2J1aWxkT3B0aW9uczoge1xuICAgICAgICAgICAgbG9hZGVyOiB7XG4gICAgICAgICAgICAgICAgXCIudHNcIjogXCJ0c3hcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrUSxTQUFTLG9CQUFvQjtBQUMvUixPQUFPLGFBQWE7QUFDcEIsT0FBTyxrQkFBa0I7QUFFekIsT0FBTyxTQUFTO0FBRWhCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNKLE9BQU8sQ0FBQyx5QkFBeUIsc0JBQXNCO0FBQUEsTUFDdkQsU0FBUztBQUFBLElBQ2IsQ0FBQztBQUFBLElBQ0QsRUFBRSxTQUFTLE9BQU8sR0FBRyxJQUFJLEVBQUU7QUFBQSxJQUMzQixhQUFhO0FBQUEsRUFDakI7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNWLE9BQU87QUFBQSxJQUNQLGdCQUFnQjtBQUFBLE1BQ1osUUFBUTtBQUFBLFFBQ0osT0FBTztBQUFBLE1BQ1g7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
