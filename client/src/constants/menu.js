const data = [
  {
    id: 'dashboard',
    icon: 'simple-icon-home',
    label: 'menu.dashboard',
    to: '/app/dashboard',
  },
  {
    id: 'projects',
    icon: 'simple-icon-briefcase',
    label: 'menu.projects',
    to: '/app/projects',
    subs: [
      {
        icon: 'simple-icon-plus',
        label: 'menu.new-project',
        to: '/app/projects/new-project',
      },
      {
        id: 'projects-list',
        icon: 'simple-icon-list',
        label: 'menu.project-list',
        to: '/app/projects/list',
      },
    ],
  },
  {
    id: 'tools',
    icon: 'simple-icon-wrench',
    label: 'menu.tools',
    to: '/app/tools',
  },
  {
    id: 'support',
    icon: 'simple-icon-question',
    label: 'menu.support',
    to: '/app/support',
    subs: [
      {
        icon: 'simple-icon-question',
        label: 'menu.faq',
        to: '/app/support/faq',
      },
      {
        id: 'projects-list',
        icon: 'simple-icon-list',
        label: 'menu.contact-us',
        to: '/app/support/contact',
      },
    ],
  },
  {
    id: 'settings',
    icon: 'simple-icon-settings',
    label: 'menu.settings',
    to: '/app/settings',
  },
];
export default data;
