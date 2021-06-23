const data = [
  {
    id: 'dashboard',
    icon: 'simple-icon-home',
    label: 'menu.dashboard',
    to: '/admin/dashboard',
  },
  {
    id: 'users',
    icon: 'simple-icon-people',
    label: 'menu.users',
    to: '/admin/users',
    subs: [
      {
        icon: 'simple-icon-plus',
        label: 'menu.new-user',
        to: '/admin/users/new',
      },
      {
        icon: 'simple-icon-list',
        label: 'menu.users-list',
        to: '/admin/users/list',
      },
    ]
  },
  {
    id: 'projects',
    icon: 'simple-icon-briefcase',
    label: 'menu.projects',
    to: '/admin/projects',
  },
  {
    id: 'orders',
    icon: 'simple-icon-docs',
    label: 'menu.orders',
    to: '/admin/orders',
  },
];
export default data;
