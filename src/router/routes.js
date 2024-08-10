export default [
    {
        name: 'Master',
        path: '/',
        component: import('../layout/master'),
        redirect: '/',
        children: [
            {
            name: 'table',
            path: '/',
            component: import('./../components/table'),
            }
        ]
    }
];
