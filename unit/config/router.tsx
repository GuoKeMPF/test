import { HomeOutlined, AppstoreOutlined } from '@ant-design/icons';
import React from 'react';

export interface RoutesType {
  path?: string;
  routes?: RoutesType[];
  component?: string;
  exact?: boolean;
  redirect?: string;
  [key: string]: any;
}

export const routes: RoutesType[] = [
  {
    path: '/',
    name: 'auto test',
    component: '@/layout/BastLayout',
    icon: <HomeOutlined />,
    routes: [
      {
        path: '/home',
        name: 'home',
        component: '@/pages/index',
      },
      {
        path: '/unit/element',
        name: 'element',
        component: '@/pages/Element',
      },
      {
        path: '/unit/redux',
        name: 'redux',
        component: '@/pages/Redux',
      },
      {
        path: '/unit/routerparmas',
        name: 'router parmas',
        component: '@/layout/RouterParmas',
        routes: [
          {
            path: '/unit/routerparmas/:id',
            component: '@/pages/RouterParmas',
          },
        ],
      },
    ],
  },
];
