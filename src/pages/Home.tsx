import DemoCard from '@/components/DemoCard';
import expandingCardsPng from '../assets/home/1-expanding-cards.png';
import dadJokesPng from '../assets/home/10-dad-jokes.png';
import eventKeycodesPng from '../assets/home/11-event-keycodes.png';
import faqCollapsePng from '../assets/home/12-faq-collapse.png';
import randomChoicePickerPng from '../assets/home/13-random-choice-picker.png';
import animatedNavigationPng from '../assets/home/14-animated-navigation.png';
import incrementingCounterPng from '../assets/home/15-incrementing-counter.png';
import drinkWaterPng from '../assets/home/16-drink-water.png';
import movieAppPng from '../assets/home/17-movie-app.png';
import backgroundSliderPng from '../assets/home/18-background-slider.png';
import themeClockPng from '../assets/home/19-theme-clock.png';
import progressStepsPng from '../assets/home/2-progress-steps.png';
import buttonRippleEffectPng from '../assets/home/20-button-ripple-effect.png';
import dragAndDropPng from '../assets/home/21-drag-n-drop.png';
import drawingAppPng from '../assets/home/22-drawing-app.png';
import kineticLoaderPng from '../assets/home/23-kinetic-loader.png';
import contentPlaceholderPng from '../assets/home/24-content-placeholder.png';
import stickyNavBarPng from '../assets/home/25-sticky-navbar.png';
import doubleVerticalSliderPng from '../assets/home/26-double-vertical-slider.png';
import toastNotificationPng from '../assets/home/27-toast-notification.png';
import githubProfilesPng from '../assets/home/28-github-profiles.png';
import doubleClickHeartPng from '../assets/home/29-double-click-heart.png';
import rotatingNavigationAnimationPng from '../assets/home/3-rotating-navigation-animation.png';
import autoTextEffectPng from '../assets/home/30-auto-text-effect.png';
import passwordGeneratorPng from '../assets/home/31-password-generator.png';
import goodCheapFastPng from '../assets/home/32-good-cheap-fast.png';
import notesAppPng from '../assets/home/33-notes-app.png';
import animatedCountdownPng from '../assets/home/34-animated-countdown.png';
import hiddenSearchWidgetPng from '../assets/home/4-hidden-search-widget.png';
import blurryLoadingPng from '../assets/home/5-blurry-loading.png';
import scrollAnimationPng from '../assets/home/6-scroll-animation.png';
import splitLandingPagePng from '../assets/home/7-split-landing-page.png';
import formWavePng from '../assets/home/8-form-wave.png';
import soundBoardPng from '../assets/home/9-sound-board.png';
import imageCarouselPng from '../assets/home/35-image-carousel.png';
import hoverBoardPng from '../assets/home/36-hoverboard.png';
import pokedexPng from '../assets/home/37-pokedex.png';

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
    coverUrl: backgroundSliderPng,
    title: 'Background Slider',
    linkTo: '/background-slider',
  },
  {
    coverAlt: 'theme-clock',
    coverUrl: themeClockPng,
    title: 'Theme Clock',
    linkTo: '/theme-clock',
  },
  {
    coverAlt: 'button-ripple-effect',
    coverUrl: buttonRippleEffectPng,
    title: 'Button Ripple Effect',
    linkTo: '/button-ripple-effect',
  },
  {
    coverAlt: 'drag-and-drop',
    coverUrl: dragAndDropPng,
    title: 'Drag N Drop',
    linkTo: '/drag-and-drop',
  },
  {
    coverAlt: 'drawing-app',
    coverUrl: drawingAppPng,
    title: 'Drawing App',
    linkTo: '/drawing-app',
  },
  {
    coverAlt: 'kinetic-loader',
    coverUrl: kineticLoaderPng,
    title: 'Kinetic Loader',
    linkTo: '/kinetic-loader',
  },
  {
    coverAlt: 'content-placeholder',
    coverUrl: contentPlaceholderPng,
    title: 'Content Placeholder',
    linkTo: '/content-placeholder',
  },
  {
    coverAlt: 'sticky-nav-bar',
    coverUrl: stickyNavBarPng,
    title: 'Sticky Nav Bar',
    linkTo: '/sticky-nav-bar',
  },
  {
    coverAlt: 'double-vertical-slider',
    coverUrl: doubleVerticalSliderPng,
    title: 'Double Vertical Slider',
    linkTo: '/double-vertical-slider',
  },
  {
    coverAlt: 'toast-notification',
    coverUrl: toastNotificationPng,
    title: 'Toast Notification',
    linkTo: '/toast-notification',
  },
  {
    coverAlt: 'github-profiles',
    coverUrl: githubProfilesPng,
    title: 'Github Profiles',
    linkTo: '/github-profiles',
  },
  {
    coverAlt: 'double-click-heart',
    coverUrl: doubleClickHeartPng,
    title: 'Double Click Heart',
    linkTo: '/double-click-heart',
  },
  {
    coverAlt: 'auto-text-effect',
    coverUrl: autoTextEffectPng,
    title: 'Auto Text Effect',
    linkTo: '/auto-text-effect',
  },
  {
    coverAlt: 'password-generator',
    coverUrl: passwordGeneratorPng,
    title: 'Password Generator',
    linkTo: '/password-generator',
  },
  {
    coverAlt: 'good-cheap-fast',
    coverUrl: goodCheapFastPng,
    title: 'Good Cheap Fast',
    linkTo: '/good-cheap-fast',
  },
  {
    coverAlt: 'notes-app',
    coverUrl: notesAppPng,
    title: 'Notes App',
    linkTo: '/notes-app',
  },
  {
    coverAlt: 'animated-countdown',
    coverUrl: animatedCountdownPng,
    title: 'Animated CountDown',
    linkTo: '/animated-countdown',
  },
  {
    coverAlt: 'image-carousel',
    coverUrl: imageCarouselPng,
    title: 'Image Carousel',
    linkTo: '/image-carousel',
  },
  {
    coverAlt: 'hoverboard',
    coverUrl: hoverBoardPng,
    title: 'Hoverboard',
    linkTo: '/hoverboard',
  },  {
    coverAlt: 'pokedex',
    coverUrl: pokedexPng,
    title: 'Pokedex',
    linkTo: '/pokedex',
  },
];

export default Home;
