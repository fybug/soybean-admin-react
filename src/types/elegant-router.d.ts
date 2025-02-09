/* prettier-ignore */
/* eslint-disable */
// Generated by elegant-router
// Read more: https://github.com/mufeng889/elegant-router
// Vue auto route: https://github.com/soybeanjs/elegant-router
// 请不要手动修改此文件，否则会导致优雅路由无法正常工作
// 如果需要修改，请在优雅路由配置文件中进行修改
// 这是自动生成的文件，请不要手动修改


declare module "@elegant-router/types" {
  type ElegantConstRoute = import('@ohh-889/react-auto-route').ElegantConstRoute;


  /**
   * route map
   */
  export type RouteMap = {
    "not-found": "*";
    "exception": "/exception";
    "exception_403": "/exception/403";
    "exception_404": "/exception/404";
    "exception_500": "/exception/500";
    "document": "/document";
    "document_project": "/document/project";
    "document_project-link": "/document/project-link";
    "document_react": "/document/react";
    "document_vite": "/document/vite";
    "document_unocss": "/document/unocss";
    "document_procomponents": "/document/procomponents";
    "document_antd": "/document/antd";
    "logout": "/logout";
    "(base)_home": "/home";
    "(base)_manage": "/manage";
    "(base)_manage_menu": "/manage/menu";
    "(base)_user-center": "/user-center";
    "(blank)_login": "/login";
    "(blank)_login_code-login": "/login/code-login";
    "(blank)_login_register": "/login/register";
    "(blank)_login_reset-pwd": "/login/reset-pwd";
    "403": "/403";
    "404": "/404";
    "500": "/500";
    "root": "/";
  };

  /**
   * route key
   */
  export type RouteKey = keyof RouteMap;

  /**
   * route path
   */
  export type RoutePath = RouteMap[RouteKey];

  /**
   * custom route key
   */
  export type CustomRouteKey = Extract<
    RouteKey,
    | "not-found"
    | "exception"
    | "exception_403"
    | "exception_404"
    | "exception_500"
    | "document"
    | "document_project"
    | "document_project-link"
    | "document_react"
    | "document_vite"
    | "document_unocss"
    | "document_procomponents"
    | "document_antd"
    | "logout"
  >;

  /**
   * the generated route key
   */
  export type GeneratedRouteKey = Exclude<RouteKey, CustomRouteKey>;

  /**
   * the first level route key, which contain the layout of the route
   */
  export type FirstLevelRouteKey = Extract<
    RouteKey,
    | "(base)"
    | "(blank)"
    | "403"
    | "404"
    | "500"
    | "root"
  >;

  /**
   * the custom first level route key
   */
  export type CustomFirstLevelRouteKey = Extract<
    CustomRouteKey,
    | "not-found"
    | "exception"
    | "document"
    | "logout"
  >;

  /**
   * the last level route key, which has the page file
   */
  export type LastLevelRouteKey = Extract<
    RouteKey,
    | "(base)_home"
    | "(base)_home"
    | "(base)"
    | "(base)_manage"
    | "(base)_manage_menu"
    | "(base)_manage_menu"
    | "(base)_user-center"
    | "(base)_user-center"
    | "(blank)"
    | "(blank)_login_code-login"
    | "(blank)_login_code-login"
    | "(blank)_login"
    | "(blank)_login"
    | "(blank)_login"
    | "(blank)_login_register"
    | "(blank)_login_register"
    | "(blank)_login_reset-pwd"
    | "(blank)_login_reset-pwd"
    | "403"
    | "404"
    | "500"
    | "root"
    | "root"
    | "root"
    | "root"
  >;

  /**
   * the custom last level route key
   */
  export type CustomLastLevelRouteKey = Extract<
    CustomRouteKey,
    | "not-found"
    | "exception_403"
    | "exception_404"
    | "exception_500"
    | "document_project"
    | "document_project-link"
    | "document_react"
    | "document_vite"
    | "document_unocss"
    | "document_procomponents"
    | "document_antd"
    | "logout"
  >;
}
