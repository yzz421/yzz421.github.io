import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/overview',
    },
    {
      name: '库存总览',
      path: '/overview',
      component: './Overview',
    },
    {
      name: '库存明细',
      path: '/details',
      component: './Details',
    },
  ],
  npmClient: 'yarn',
});
