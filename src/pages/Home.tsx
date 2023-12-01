import DemoCard from '@/components/DemoCard';
import expandingCardsPng from '../assets/home/1-expanding-cards.png';
import dadJokesPng from '../assets/home/10-dad-jokes.png';
import eventKeycodesPng from '../assets/home/11-event-keycodes.png';
import faqCollapsePng from '../assets/home/12-faq-collapse.png';
import randomChoicePickerPng from '../assets/home/13-random-choice-picker.png';
import animatedNavigationPng from '../assets/home/14-animated-navigation.png';
import incrementingCounterPng from '../assets/home/15-incrementing-counter.png';
import drinkWaterPng from '../assets/home/16-drink-water.png';
import progressStepsPng from '../assets/home/2-progress-steps.png';
import rotatingNavigationAnimationPng from '../assets/home/3-rotating-navigation-animation.png';
import hiddenSearchWidgetPng from '../assets/home/4-hidden-search-widget.png';
import blurryLoadingPng from '../assets/home/5-blurry-loading.png';
import scrollAnimationPng from '../assets/home/6-scroll-animation.png';
import splitLandingPagePng from '../assets/home/7-split-landing-page.png';
import formWavePng from '../assets/home/8-form-wave.png';
import soundBoardPng from '../assets/home/9-sound-board.png';
import movieAppPng from '../assets/home/17-movie-app.png';
import backgroundSlider from '../assets/home/18-background-slider.png';

const Home = () => {
  return (
    <div className='bg-[#333333] min-h-full'>
      <div className='flex flex-wrap gap-[2px]  '>
        {cards.map(x => (
          <DemoCard
            key={x.linkTo}
            {...x}
          />
        ))}
        {Array.from({ length: Math.ceil(cards.length / 5) * 5 - cards.length }).map((_, i) => (
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
  {
    coverAlt: 'sound-board',
    coverUrl: soundBoardPng,
    title: 'Sound Board',
    linkTo: '/sound-board',
  },
  {
    coverAlt: 'dad-jokes',
    coverUrl: dadJokesPng,
    title: 'Dad Jokes',
    linkTo: '/dad-jokes',
  },
  {
    coverAlt: 'event-keycodes',
    coverUrl: eventKeycodesPng,
    title: 'Event Keycodes',
    linkTo: '/event-keycodes',
  },
  {
    coverAlt: 'faq-collapse',
    coverUrl: faqCollapsePng,
    title: 'Faq Collapse',
    linkTo: '/faq-collapse',
  },
  {
    coverAlt: 'random-choice-picker',
    coverUrl: randomChoicePickerPng,
    title: 'Random Choice Picker',
    linkTo: '/random-choice-picker',
  },
  {
    coverAlt: 'animated-navigation',
    coverUrl: animatedNavigationPng,
    title: 'Animated Navigation',
    linkTo: '/animated-navigation',
  },
  {
    coverAlt: 'incrementing-counter',
    coverUrl: incrementingCounterPng,
    title: 'Incrementing Counter',
    linkTo: '/incrementing-counter',
  },
  {
    coverAlt: 'drink-water',
    coverUrl: drinkWaterPng,
    title: 'Drink Water',
    linkTo: '/drink-water',
  },
  {
    coverAlt: 'movie-app',
    coverUrl: movieAppPng,
    title: 'Movie App',
    linkTo: '/movie-app',
  },
  {
    coverAlt: 'background-slider',
    coverUrl: backgroundSlider,
    title: 'Background Slider',
    linkTo: '/background-slider',
  },
];

export default Home;
