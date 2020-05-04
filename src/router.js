import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: '儀表板',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: '使用者資料',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },
        {
          name: 'Icons',
          path: 'components/icons',
          component: () => import('@/views/dashboard/component/Icons'),
        },
        {
          name: '工作清單',
          path: 'tables/jobtables',
          component: () => import('@/views/dashboard/tables/JobTables'),
        },
        {
          name: '專案清單',
          path: 'tables/projecttables',
          component: () => import('@/views/dashboard/tables/ProjectTables'),
        },
        {
          name: 'CI/CD工具軟體設定',
          path: 'cicd/graph',
          component: () => import('@/views/dashboard/Cicdgraph'),
        },
        // Tables
        {
          name: 'CI/CD紀錄清單',
          path: 'tables/cicdrecordlist-tables',
          component: () => import('@/views/dashboard/tables/CicdRecordListTables'),
        },
        // Maps
        {
          name: 'Google Maps',
          path: 'maps/google-maps',
          component: () => import('@/views/dashboard/maps/GoogleMaps'),
        },
        // Upgrade
        {
          name: 'Upgrade',
          path: 'upgrade',
          component: () => import('@/views/dashboard/Upgrade'),
        },
      ],
    },
  ],
})
