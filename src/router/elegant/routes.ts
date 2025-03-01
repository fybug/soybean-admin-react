/* eslint-disable */
// Generated by elegant-router
// Read more: https://github.com/mufeng889/elegant-router
// Vue auto route: https://github.com/soybeanjs/elegant-router
// 请不要手动修改此文件，否则会导致优雅路由无法正常工作
// 如果需要修改，请在优雅路由配置文件中进行修改
// 这是自动生成的文件，请不要手动修改

export const generatedRoutes = [
  {
    matchedFiles: ['root', '/src/pages/index.tsx', '/src/pages/loading.tsx', 'root'],
    name: 'root',
    path: '/',
    children: [
      {
        matchedFiles: ['(base)', null, null, null],
        name: '(base)',
        path: null,
        children: [
          { matchedFiles: [null, '/src/pages/(base)/home/index.tsx', null, null], name: '(base)_home', path: '/home' },
          {
            matchedFiles: [null, '/src/pages/(base)/manage/index.tsx', null, null],
            name: '(base)_manage',
            path: '/manage',
            children: [
              {
                matchedFiles: [null, '/src/pages/(base)/manage/menu/index.tsx', null, null],
                name: '(base)_manage_menu',
                path: '/manage/menu'
              },
              {
                matchedFiles: [null, '/src/pages/(base)/manage/user/index.tsx', null, null],
                name: '(base)_manage_user',
                path: '/manage/user'
              }
            ]
          },
          {
            matchedFiles: [null, '/src/pages/(base)/multi-menu/index.tsx', null, null],
            name: '(base)_multi-menu',
            path: '/multi-menu',
            children: [
              {
                matchedFiles: [null, '/src/pages/(base)/multi-menu/first/index.tsx', null, null],
                name: '(base)_multi-menu_first',
                path: '/multi-menu/first',
                children: [
                  {
                    matchedFiles: [null, '/src/pages/(base)/multi-menu/first/child/index.tsx', null, null],
                    name: '(base)_multi-menu_first_child',
                    path: '/multi-menu/first/child'
                  }
                ]
              },
              {
                matchedFiles: [null, null, null, null],
                name: '(base)_multi-menu_second',
                path: '/multi-menu/second',
                children: [
                  {
                    matchedFiles: [null, null, null, null],
                    name: '(base)_multi-menu_second_child',
                    path: '/multi-menu/second/child',
                    children: [
                      {
                        matchedFiles: [null, '/src/pages/(base)/multi-menu/second/child/home/index.tsx', null, null],
                        name: '(base)_multi-menu_second_child_home',
                        path: '/multi-menu/second/child/home'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            matchedFiles: [null, null, null, null],
            name: '(base)_projects',
            path: '/projects',
            children: [
              {
                matchedFiles: [null, null, null, null],
                name: '(base)_projects_[pid]',
                path: '/projects/:pid',
                children: [
                  {
                    matchedFiles: [null, null, null, null],
                    name: '(base)_projects_[pid]_edit',
                    path: '/projects/:pid/edit',
                    children: [
                      {
                        matchedFiles: [null, '/src/pages/(base)/projects/[pid]/edit/[id].tsx', null, null],
                        name: '(base)_projects_[pid]_edit_[id]',
                        path: '/projects/:pid/edit/:id'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            matchedFiles: [null, '/src/pages/(base)/user-center/index.tsx', null, null],
            name: '(base)_user-center',
            path: '/user-center'
          }
        ]
      },
      {
        matchedFiles: ['(blank)', null, null, null],
        name: '(blank)',
        path: null,
        children: [
          {
            matchedFiles: ['(blank)_login', '/src/pages/(blank)/login/index.tsx', null, null],
            name: '(blank)_login',
            path: '/login',
            children: [
              {
                matchedFiles: [null, '/src/pages/(blank)/login/code-login/index.tsx', null, null],
                name: '(blank)_login_code-login',
                path: '/login/code-login'
              },
              {
                matchedFiles: [null, '/src/pages/(blank)/login/register/index.tsx', null, null],
                name: '(blank)_login_register',
                path: '/login/register'
              },
              {
                matchedFiles: [null, '/src/pages/(blank)/login/reset-pwd/index.tsx', null, null],
                name: '(blank)_login_reset-pwd',
                path: '/login/reset-pwd'
              }
            ]
          }
        ]
      },
      { matchedFiles: [null, '/src/pages/_builtin/403/index.tsx', null, null], name: '403', path: '/403' },
      { matchedFiles: [null, '/src/pages/_builtin/404/index.tsx', null, null], name: '404', path: '/404' },
      { matchedFiles: [null, '/src/pages/_builtin/500/index.tsx', null, null], name: '500', path: '/500' },
      {
        matchedFiles: [null, '/src/pages/_builtin/iframe-page/index.tsx', null, null],
        name: 'iframe-page',
        path: '/iframe-page'
      },
      { matchedFiles: [null, '/src/pages/_builtin/404/index.tsx', null, null], name: 'notFound', path: '*' }
    ]
  }
];
