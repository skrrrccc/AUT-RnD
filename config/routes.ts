export default [
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome'
  },
  {
    path: '/sheep',
    name: 'sheep',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/sheep/main',
        name: 'main',
        icon: 'smile',
        component: './sheep/MainContent'
      },
      {
        path: '/sheep/sheep3D',
        name: 'sheep3D',
        icon: 'smile',
        component: './sheep/Sheep3D'
      },
      {
        path: '/sheep/inner-ear-slice',
        name: 'inner-ear-slice',
        icon: 'smile',
        component: './sheep/InnerEarSlice'
      }
    ],
  },
  {
    path: '/human',
    name: 'human',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/human/main',
        name: 'main',
        icon: 'smile',
        component: './human/MainContent'
      },
      {
        path: '/human/human3D',
        name: 'human3D',
        icon: 'smile',
        component: './human/Human3D'
      },
      {
        path: '/human/inner-ear-slice',
        name: 'inner-ear-slice',
        icon: 'smile',
        component: './sheep/InnerEarSlice'
      }
    ],
  },
  {
    path: '/mice',
    name: 'mice',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/mice/main',
        name: 'main',
        icon: 'smile',
        component: './mice/MainContent'
      },
      {
        path: '/mice/mice3D',
        name: 'mice3D',
        icon: 'smile',
        component: './mice/Mice3D'
      },
      {
        path: '/mice/inner-ear-slice',
        name: 'inner-ear-slice',
        icon: 'smile',
        component: './mice/InnerEarSlice'
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
