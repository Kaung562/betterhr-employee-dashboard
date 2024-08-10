export default [
    {
        name: 'Master',
        path: '/',
        component:()=> import('../layout/master.vue'),
        redirect: '/',
        children: [
            {
            name: 'table',
            path: '/',
            component:() => import('./../components/table.vue'),
            }
        ]
    }
];
