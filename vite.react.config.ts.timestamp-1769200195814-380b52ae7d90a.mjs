// vite.react.config.ts
import { defineConfig } from "file:///Users/lucaforzutti/Documents/dev/cricons/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/lucaforzutti/Documents/dev/cricons/node_modules/vite-plugin-dts/dist/index.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "/Users/lucaforzutti/Documents/dev/cricons";
var vite_react_config_default = defineConfig({
  plugins: [
    dts({
      outDir: "dist/react",
      include: ["src/react"],
      tsconfigPath: "tsconfig.react.json",
      rollupTypes: true
    })
  ],
  build: {
    outDir: "dist/react",
    emptyOutDir: true,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/react/index.ts"),
      name: "CriconsReact",
      fileName: (format) => `cricons-react.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
export {
  vite_react_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5yZWFjdC5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbHVjYWZvcnp1dHRpL0RvY3VtZW50cy9kZXYvY3JpY29uc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2x1Y2Fmb3J6dXR0aS9Eb2N1bWVudHMvZGV2L2NyaWNvbnMvdml0ZS5yZWFjdC5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2x1Y2Fmb3J6dXR0aS9Eb2N1bWVudHMvZGV2L2NyaWNvbnMvdml0ZS5yZWFjdC5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIGR0cyh7XG4gICAgICAgICAgICBvdXREaXI6ICdkaXN0L3JlYWN0JyxcbiAgICAgICAgICAgIGluY2x1ZGU6IFsnc3JjL3JlYWN0J10sXG4gICAgICAgICAgICB0c2NvbmZpZ1BhdGg6ICd0c2NvbmZpZy5yZWFjdC5qc29uJyxcbiAgICAgICAgICAgIHJvbGx1cFR5cGVzOiB0cnVlXG4gICAgICAgIH0pXG4gICAgXSxcbiAgICBidWlsZDoge1xuICAgICAgICBvdXREaXI6ICdkaXN0L3JlYWN0JyxcbiAgICAgICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgICAgIGxpYjoge1xuICAgICAgICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3JlYWN0L2luZGV4LnRzJyksXG4gICAgICAgICAgICBuYW1lOiAnQ3JpY29uc1JlYWN0JyxcbiAgICAgICAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgY3JpY29ucy1yZWFjdC4ke2Zvcm1hdH0uanNgXG4gICAgICAgIH0sXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgICAgIGV4dGVybmFsOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxuICAgICAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgICAgICAgICAgICByZWFjdDogJ1JlYWN0JyxcbiAgICAgICAgICAgICAgICAgICAgJ3JlYWN0LWRvbSc6ICdSZWFjdERPTSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5VCxTQUFTLG9CQUFvQjtBQUN0VixPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlO0FBRnhCLElBQU0sbUNBQW1DO0FBSXpDLElBQU8sNEJBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLElBQUk7QUFBQSxNQUNBLFFBQVE7QUFBQSxNQUNSLFNBQVMsQ0FBQyxXQUFXO0FBQUEsTUFDckIsY0FBYztBQUFBLE1BQ2QsYUFBYTtBQUFBLElBQ2pCLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDSCxRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixLQUFLO0FBQUEsTUFDRCxPQUFPLFFBQVEsa0NBQVcsb0JBQW9CO0FBQUEsTUFDOUMsTUFBTTtBQUFBLE1BQ04sVUFBVSxDQUFDLFdBQVcsaUJBQWlCLE1BQU07QUFBQSxJQUNqRDtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ1gsVUFBVSxDQUFDLFNBQVMsV0FBVztBQUFBLE1BQy9CLFFBQVE7QUFBQSxRQUNKLFNBQVM7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNqQjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
