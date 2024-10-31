import { lazy } from 'react';

import { Navigate } from 'react-router-dom';

const Logout = lazy(() => import('@/pages/Logout.jsx'));
const NotFound = lazy(() => import('@/pages/NotFound.jsx'));

const Dashboard = lazy(() => import('@/pages/Dashboard'));

const Faqs = lazy(() => import('@/pages/Faqs'));
const Members = lazy(() => import('@/pages/Members'));
const Principles = lazy(() => import('@/pages/Principles'));
const Centers = lazy(() => import('@/pages/Centers'));
const Reviews = lazy(() => import('@/pages/Reviews'));
const Services = lazy(() => import('@/pages/Services'));
const Codes = lazy(() => import('@/pages/Codes'));
const Blocks = lazy(() => import('@/pages/Blocks'));
const Files = lazy(() => import('@/pages/Files'));
const Users = lazy(() => import('@/pages/Users'));

let routes = {
  expense: [],
  default: [
    {
      path: '/login',
      element: <Navigate to="/" />,
    },
    {
      path: '/logout',
      element: <Logout />,
    },
    {
      path: '/',
      element: <Faqs />,
    },

    {
      path: 'faqs',
      element: <Faqs />,
    },
    {
      path: 'members',
      element: <Members />,
    },
    {
      path: 'principles',
      element: <Principles />,
    },
    {
      path: 'centers',
      element: <Centers />,
    },
    {
      path: 'reviews',
      element: <Reviews />,
    },
    {
      path: 'services',
      element: <Services />,
    },
    {
      path: 'codes',
      element: <Codes />,
    },
    {
      path: 'blocks',
      element: <Blocks />,
    },
    {
      path: 'files',
      element: <Files />,
    },
    {
      path: 'users',
      element: <Users />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
};

export default routes;
