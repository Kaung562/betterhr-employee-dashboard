export default [
    {
        name: 'Master',
        path: '/',
        component: import('../layout/master'),
        redirect: '/dashboard',
        children: [
            {
            name: 'table',
            path: '/dashboard',
            component: import('./../components/table'),
            }
        ]
    }
];
