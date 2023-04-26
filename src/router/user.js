export const user = [
    {
        path: '/schedules/add',
        icon: 'today',
        label: 'Agendar',
        inset: 0,
        name: 'ScheduleAdd',
        component: () => import('@/components/ScheduleAdd.vue')
    },
    {
        path: '/schedules',
        icon: 'calendar_month',
        label: 'Meus agendamentos',
        inset: 0,
        name: 'ScheduleList',
        component: () => import('@/components/ScheduleList.vue')
    },
    {
        path: '/profile',
        icon: 'person',
        label: 'Meu perfil',
        inset: 0,
        name: 'UserProfile',
        component: () => import('@/components/UserProfile.vue')
    },

]
