import type { RouteObject } from 'react-router-dom';

import { authRoutes } from '@/router';
import { store } from '@/store';

import { isStaticSuper, selectUserInfo } from '../auth/authStore';

import { filterAuthRoutesByDynamic, filterAuthRoutesByRoles, mergeValuesByParent } from './shared';

const hasRoutes = ['/manage', '/manage/user', '/manage/user/:id', '/home', '/about'];

export function initAuthRoutes(addRoutes: (parent: string | null, route: RouteObject[]) => void) {
  const authRouteMode = import.meta.env.VITE_AUTH_ROUTE_MODE;

  const reactAuthRoutes = mergeValuesByParent(authRoutes);

  const isSuper = isStaticSuper(store.getState());

  const { roles } = selectUserInfo(store.getState());

  // 静态模式
  if (authRouteMode === 'static') {
    // 超级管理员
    if (isSuper) {
      reactAuthRoutes.forEach(route => {
        addRoutes(route.parent, route.route);
      });
    } else {
      // 非超级管理员
      const filteredRoutes = filterAuthRoutesByRoles(reactAuthRoutes, roles);

      filteredRoutes.forEach(({ parent, route }) => {
        addRoutes(parent, route);
      });
    }
  } else {
    // 动态模式
    const filteredRoutes = filterAuthRoutesByDynamic(reactAuthRoutes, hasRoutes);

    filteredRoutes.forEach(({ parent, route }) => {
      addRoutes(parent, route);
    });
  }
}
