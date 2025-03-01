/* prettier-ignore */
/* eslint-disable */
// Generated by elegant-router
// Read more: https://github.com/mufeng889/elegant-router
// Vue auto route: https://github.com/soybeanjs/elegant-router
// 请不要手动修改此文件，否则会导致优雅路由无法正常工作
// 如果需要修改，请在优雅路由配置文件中进行修改
// 这是自动生成的文件，请不要手动修改


import type { ElegantConstRoute } from '@soybean-react/vite-plugin-react-router';
import type { RouteObject } from 'react-router-dom';

import { errors, layouts, pages as views } from './imports';

const loadings = import.meta.glob(`/src/pages/**/loading.tsx`, { eager: true, import: 'default' });

const handles = import.meta.glob([`/src/pages/**/index.tsx`, `/src/pages/**/[[]*[]].tsx`,'!**/module/index.tsx','!**/components/index.tsx'], { eager: true, import: 'handle' });

/**
* transform elegant const routes to react routes
*
* @param routes elegant const routes
* @param layouts layout components
* @param views view components
*/
export function transformElegantRoutesToReactRoutes(routes: ElegantConstRoute[]) {
 return routes.flatMap(route => transformElegantRouteToReactRoute(route));
}

/**
* transform elegant route to react route
*
* @param route elegant const route
* @param layouts layout components
* @param views view components
*/
export function transformElegantRouteToReactRoute(route: ElegantConstRoute): RouteObject {
 const ROUTE_DEGREE_SPLITTER = '_';

 function isRouteGroup(name: string) {
   const lastName = name.split(ROUTE_DEGREE_SPLITTER).at(-1);
   return lastName?.startsWith('(') && lastName?.endsWith(')');
 }

 const { children, matchedFiles, name, path } = route;

 // Get the error boundary component
 const getErrorComponent = () => (matchedFiles[3] ? errors[matchedFiles[3]]() : errors.root());

 // Convert route config, simplifying the logic for actions, loader, etc.
 function convertConfig(m: any) {
   const { action, loader, shouldRevalidate, default: Component } = m;
   return {
     action, // always use action
     loader, // always use loader
     shouldRevalidate,
     Component
   };
 }

 // Get config for the route if available
 async function getConfig(index: boolean = false) {
   if (matchedFiles[0] && !index) {
     const config = await layouts[matchedFiles[0]]();
     return convertConfig(config);
   }

   let pageName = name;

   if (pageName==='notFound') {
         pageName = '404'
   };

   if (matchedFiles[1] && (!children?.length||index)) {
     const config = await views[pageName]();

     return convertConfig(config);
   }

   return null;
 }


 const reactRoute = {
   children: [],
   HydrateFallback: matchedFiles[2] ? loadings[matchedFiles[2]] : loadings[`/src/pages/loading.tsx`] ,
   id: name,
   handle: matchedFiles[1] ? handles[matchedFiles[1]] : null,
   lazy: async () => {
     const ErrorBoundary = await getErrorComponent();

     return {
       ErrorBoundary: ErrorBoundary?.default,
       ...(await getConfig())
     };
   },
   path
 } as RouteObject;

 if (children?.length) {
   reactRoute.children = children.flatMap(child => transformElegantRouteToReactRoute(child));

   if (matchedFiles[1] && !isRouteGroup(name)) {
     reactRoute.children.unshift({
       handle: matchedFiles[1] ? handles[matchedFiles[1]] : null,
       index: true,
       lazy: async () => {
         const ErrorBoundary = await getErrorComponent();

         return {
           ErrorBoundary: ErrorBoundary?.default,
           ...(await getConfig(true))
         };
       }
     });
   }
 }

 return reactRoute;
}
