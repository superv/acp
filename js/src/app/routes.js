
export default [
  {
    path: '/',
    meta: {
      layout: 'default'
    },
    component: () => import('@app/pages/Dashboard'),
  },
  {
    path: '/login',
    meta: {
      layout: 'blank'
    },
    before: (superv) => {
      if (!superv.auth.loggedIn) {
        return true
      }
      superv.router.push('/')
    },
    component: () => import('@app/pages/Login'),
  },
]
