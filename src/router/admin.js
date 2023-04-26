export const admin = [
    {
        path: '/settings/users',
        label: 'Usuários',
        name: 'UserList',
        component: () => import('@/components/UserList.vue')
    },
    {
        path: '/settings/unit',
        label: 'Unidades',
        name: 'UnitList',
        component: () => import('@/components/UnitList.vue')
    },
    {
        path: '/settings/time',
        label: 'Tempo',
        name: 'TimeConfig',
        component: () => import('@/components/TimeConfig.vue')
    },
    {
        path: '/settings/rooms',
        label: 'Quadras',
        name: 'RoomList',
        component: () => import('@/components/RoomList.vue')
    },
    {
        path: '/settings/clients',
        label: 'Clientes',
        name: 'ClientList',
        component: () => import('@/components/ClientList.vue')
    }
]
