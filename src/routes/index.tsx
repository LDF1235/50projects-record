import { ComponentType, Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const lazyLoadPage = (filename: string) => {
  const path = `../pages/${filename}.tsx`;
  const module = import.meta.glob('../pages/*.tsx');
  const Component = lazy(module[path] as () => Promise<{ default: ComponentType<unknown> }>);

  return (
    <Suspense fallback={<div className='pt-[100px] text-center'>loading</div>}>
      <Component />
    </Suspense>
  );
};

const routes: RouteObject[] = [
  { path: '/', element: lazyLoadPage('Home') },
  {
    path: '/expanding-cards',
    element: lazyLoadPage('ExpandingCards'),
  },
  {
    path: '/progress-steps',
    element: lazyLoadPage('ProgressSteps'),
  },
  {
    path: '/rotating-navigation-animation',
    element: lazyLoadPage('RotatingNavigationAnimation'),
  },
  {
    path: '/hidden-search-widget',
    element: lazyLoadPage('HiddenSearchWidget'),
  },
  {
    path: '/blurry-loading',
    element: lazyLoadPage('BlurryLoading'),
  },
  {
    path: '/scroll-animation',
    element: lazyLoadPage('ScrollAnimation'),
  },
  {
    path: '/split-landing-page',
    element: lazyLoadPage('SplitLandingPage'),
  },
  {
    path: '/form-wave',
    element: lazyLoadPage('FormWave'),
  },
  {
    path: '/sound-board',
    element: lazyLoadPage('SoundBoard'),
  },
  {
    path: '/dad-jokes',
    element: lazyLoadPage('DadJokes'),
  },
  {
    path: '*',
    element: lazyLoadPage('Home'),
  },
];

export { routes };
