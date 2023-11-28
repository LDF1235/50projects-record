import DemoCard from '@/components/DemoCard';
import expandingCardsPng from '../assets/home/1-expanding-cards.png';
import progressStepsPng from '../assets/home/2-progress-steps.png';
import rotatingNavigationAnimationPng from '../assets/home/3-rotating-navigation-animation.png';
import hiddenSearchWidgetPng from '../assets/home/4-hidden-search-widget.png';
import blurryLoadingPng from '../assets/home/5-blurry-loading.png';
import scrollAnimationPng from '../assets/home/6-scroll-animation.png';

const Home = () => {
  return (
    <div className='bg-[#333333] h-full'>
      <div className='flex flex-wrap gap-[2px]  '>
        <DemoCard
          coverAlt='expanding-cards'
          coverUrl={expandingCardsPng}
          title='Expanding Cards'
          linkTo='/expanding-cards'
        />
        <DemoCard
          coverAlt='progress-steps'
          coverUrl={progressStepsPng}
          title='Progress Steps'
          linkTo='/progress-steps'
        />
        <DemoCard
          coverAlt='rotating-navigation-animation'
          coverUrl={rotatingNavigationAnimationPng}
          title='Rotating Navigation Animation'
          linkTo='/rotating-navigation-animation'
        />
        <DemoCard
          coverAlt='hidden-search-widget'
          coverUrl={hiddenSearchWidgetPng}
          title='Hidden Search Widget'
          linkTo='/hidden-search-widget'
        />
        <DemoCard
          coverAlt='blurry-loading'
          coverUrl={blurryLoadingPng}
          title='Blurry Loading'
          linkTo='/blurry-loading'
        />
        <DemoCard
          coverAlt='scroll-animation'
          coverUrl={scrollAnimationPng}
          title='Scroll Animation'
          linkTo='/scroll-animation'
        />
        <div className='w-[18%] invisible grow aspect-[681/484] mc-skeleton ' />
        <div className='w-[18%] invisible grow aspect-[681/484] mc-skeleton ' />
        <div className='w-[18%] invisible grow aspect-[681/484] mc-skeleton ' />
        <div className='w-[18%] invisible grow aspect-[681/484] mc-skeleton ' />
      </div>
    </div>
  );
};

export default Home;
