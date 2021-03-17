export default [
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome'
  },
  {
    path: '/inner-ear',
    name: 'inner-ear',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/inner-ear/sheep',
        name: 'sheep',
        icon: 'smile',
        component: './InnerEar/Sheep'
      },
      {
        path: '/inner-ear/human',
        name: 'human',
        icon: 'smile',
        component: './InnerEar/Human'
      },
      {
        path: '/inner-ear/mice',
        name: 'mice',
        icon: 'smile',
        component: './InnerEar/Mice'
      }
    ],
  },
  {
    path: '/about-us',
    name: 'about-us',
    icon: 'bank',
    component: './AboutUs'
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    icon: 'comment',
    component: './ContactUs'
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
