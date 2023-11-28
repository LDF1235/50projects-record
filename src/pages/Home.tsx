import DemoCard from '@/components/DemoCard';
import expandingCardsPng from '../assets/home/1-expanding-cards.png';
import progressStepsPng from '../assets/home/2-progress-steps.png';
import rotatingNavigationAnimationPng from '../assets/home/3-rotating-navigation-animation.png';
import hiddenSearchWidgetPng from '../assets/home/4-hidden-search-widget.png';
import blurryLoadingPng from '../assets/home/5-blurry-loading.png';
import scrollAnimationPng from '../assets/home/6-scroll-animation.png';
import splitLandingPagePng from '../assets/home/7-split-landing-page.png';
import formWavePng from '../assets/home/8-form-wave.png';

const Home = () => {
  return (
    <div className='bg-[#333333] h-full'>
      <div className='flex flex-wrap gap-[2px]  '>
        {cards.map(x => (
          <DemoCard
            key={x.linkTo}
            {...x}
          />
        ))}
        {Array.from({ length: Math.ceil(cards.length / 10) * 10 - cards.length }).map((_, i) => (
          <div
            key={i}
            className='w-[18%] invisible grow aspect-[681/484] mc-skeleton '
          />
        ))}
      </div>
    </div>
  );
};

const cards = [
  {
    coverAlt: 'expanding-cards',
    coverUrl: expandingCardsPng,
    title: 'Expanding Cards',
    linkTo: '/expanding-cards',
  },
  {
    coverAlt: 'progress-steps',
    coverUrl: progressStepsPng,
    title: 'Progress Steps',
    linkTo: '/progress-steps',
  },
  {
    coverAlt: 'rotating-navigation-animation',
    coverUrl: rotatingNavigationAnimationPng,
    title: 'Rotating Navigation Animation',
    linkTo: '/rotating-navigation-animation',
  },
  {
    coverAlt: 'hidden-search-widget',
    coverUrl: hiddenSearchWidgetPng,
    title: 'Hidden Search Widget',
    linkTo: '/hidden-search-widget',
  },
  {
    coverAlt: 'blurry-loading',
    coverUrl: blurryLoadingPng,
    title: 'Blurry Loading',
    linkTo: '/blurry-loading',
  },
  {
    coverAlt: 'scroll-animation',
    coverUrl: scrollAnimationPng,
    title: 'Scroll Animation',
    linkTo: '/scroll-animation',
  },
  {
    coverAlt: 'split-landing-page',
    coverUrl: splitLandingPagePng,
    title: 'Split Landing Page',
    linkTo: '/split-landing-page',
  },
  {
    coverAlt: 'form-wave',
    coverUrl: formWavePng,
    title: 'Form Wave',
    linkTo: '/form-wave',
  },
];

export default Home;
