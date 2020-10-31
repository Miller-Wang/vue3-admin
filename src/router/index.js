import { createRouter, createWebHashHistory } from 'vue-router';

export const routes = [
  {
    path: '/',
    name: '主菜单',
    icon: 'UserOutlined',
    component: () => import('@/components/Layout'),
    children: [
      {
        path: '/',
        name: '主页',
        component: () => import('@/views/home/index'),
      },
      {
        path: '/list',
        name: '表单',
        component: () => import('@/views/home/list'),
      },
    ],
  },
  {
    path: '/order',
    name: '订单模块',
    icon: 'UserOutlined',
    component: () => import('@/components/Layout'),
    children: [
      {
        path: '/order/mine',
        name: '我的订单',
        component: () => import('@/views/order/myOrder'),
      },
      {
        path: '/order/list',
        name: '表格',
        component: () => import('@/views/order/orderList'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    icon: 'UserOutlined',
    hiden: true, // 不在菜单中显示
    component: () => import('../views/login'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
