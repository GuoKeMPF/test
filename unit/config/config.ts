import { defineConfig } from 'umi';
import { routes } from './router';

export default defineConfig({
  antd: {},
  mfsu: {},
  dva: {
    hmr: true,
  },
  dynamicImport: {
    loading: '@/Loading',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  // mfsu: {},
  fastRefresh: {},
  devServer: {
    host: '0.0.0.0',
  },
  // ssr: {
  //   devServerRender: false,
  // },
  exportStatic: {},
  webpack5: {},
  title: false,
  routes,
});
