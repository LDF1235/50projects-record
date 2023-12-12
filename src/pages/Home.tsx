import DemoCard from '@/components/DemoCard';

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
    coverUrl: new URL('../assets/home/1-expanding-cards.png', import.meta.url).href,
    title: 'Expanding Cards',
    linkTo: '/expanding-cards',
  },
  {
    coverAlt: 'progress-steps',
    coverUrl: new URL('../assets/home/2-progress-steps.png', import.meta.url).href,
    title: 'Progress Steps',
    linkTo: '/progress-steps',
  },
  {
    coverAlt: 'rotating-navigation-animation',
    coverUrl: new URL('../assets/home/3-rotating-navigation-animation.png', import.meta.url).href,
    title: 'Rotating Navigation Animation',
    linkTo: '/rotating-navigation-animation',
  },
  {
    coverAlt: 'hidden-search-widget',
    coverUrl: new URL('../assets/home/4-hidden-search-widget.png', import.meta.url).href,
    title: 'Hidden Search Widget',
    linkTo: '/hidden-search-widget',
  },
  {
    coverAlt: 'blurry-loading',
    coverUrl: new URL('../assets/home/5-blurry-loading.png', import.meta.url).href,
    title: 'Blurry Loading',
    linkTo: '/blurry-loading',
  },
  {
    coverAlt: 'scroll-animation',
    coverUrl: new URL('../assets/home/6-scroll-animation.png', import.meta.url).href,
    title: 'Scroll Animation',
    linkTo: '/scroll-animation',
  },
  {
    coverAlt: 'split-landing-page',
    coverUrl: new URL('../assets/home/7-split-landing-page.png', import.meta.url).href,
    title: 'Split Landing Page',
    linkTo: '/split-landing-page',
  },
  {
    coverAlt: 'form-wave',
    coverUrl: new URL('../assets/home/8-form-wave.png', import.meta.url).href,
    title: 'Form Wave',
    linkTo: '/form-wave',
  },
  {
    coverAlt: 'sound-board',
    coverUrl: new URL('../assets/home/9-sound-board.png', import.meta.url).href,
    title: 'Sound Board',
    linkTo: '/sound-board',
  },
  {
    coverAlt: 'dad-jokes',
    coverUrl: new URL('../assets/home/10-dad-jokes.png', import.meta.url).href,
    title: 'Dad Jokes',
    linkTo: '/dad-jokes',
  },
  {
    coverAlt: 'event-keycodes',
    coverUrl: new URL('../assets/home/11-event-keycodes.png', import.meta.url).href,
    title: 'Event Keycodes',
    linkTo: '/event-keycodes',
  },
  {
    coverAlt: 'faq-collapse',
    coverUrl: new URL('../assets/home/12-faq-collapse.png', import.meta.url).href,
    title: 'Faq Collapse',
    linkTo: '/faq-collapse',
  },
  {
    coverAlt: 'random-choice-picker',
    coverUrl: new URL('../assets/home/13-random-choice-picker.png', import.meta.url).href,
    title: 'Random Choice Picker',
    linkTo: '/random-choice-picker',
  },
  {
    coverAlt: 'animated-navigation',
    coverUrl: new URL('../assets/home/14-animated-navigation.png', import.meta.url).href,
    title: 'Animated Navigation',
    linkTo: '/animated-navigation',
  },
  {
    coverAlt: 'incrementing-counter',
    coverUrl: new URL('../assets/home/15-incrementing-counter.png', import.meta.url).href,
    title: 'Incrementing Counter',
    linkTo: '/incrementing-counter',
  },
  {
    coverAlt: 'drink-water',
    coverUrl: new URL('../assets/home/16-drink-water.png', import.meta.url).href,
    title: 'Drink Water',
    linkTo: '/drink-water',
  },
  {
    coverAlt: 'movie-app',
    coverUrl: new URL('../assets/home/17-movie-app.png', import.meta.url).href,
    title: 'Movie App',
    linkTo: '/movie-app',
  },
  {
    coverAlt: 'background-slider',
    coverUrl: new URL('../assets/home/18-background-slider.png', import.meta.url).href,
    title: 'Background Slider',
    linkTo: '/background-slider',
  },
  {
    coverAlt: 'theme-clock',
    coverUrl: new URL('../assets/home/19-theme-clock.png', import.meta.url).href,
    title: 'Theme Clock',
    linkTo: '/theme-clock',
  },
  {
    coverAlt: 'button-ripple-effect',
    coverUrl: new URL('../assets/home/20-button-ripple-effect.png', import.meta.url).href,
    title: 'Button Ripple Effect',
    linkTo: '/button-ripple-effect',
  },
  {
    coverAlt: 'drag-and-drop',
    coverUrl: new URL('../assets/home/21-drag-n-drop.png', import.meta.url).href,
    title: 'Drag N Drop',
    linkTo: '/drag-and-drop',
  },
  {
    coverAlt: 'drawing-app',
    coverUrl: new URL('../assets/home/22-drawing-app.png', import.meta.url).href,
    title: 'Drawing App',
    linkTo: '/drawing-app',
  },
  {
    coverAlt: 'kinetic-loader',
    coverUrl: new URL('../assets/home/23-kinetic-loader.png', import.meta.url).href,
    title: 'Kinetic Loader',
    linkTo: '/kinetic-loader',
  },
  {
    coverAlt: 'content-placeholder',
    coverUrl: new URL('../assets/home/24-content-placeholder.png', import.meta.url).href,
    title: 'Content Placeholder',
    linkTo: '/content-placeholder',
  },
  {
    coverAlt: 'sticky-nav-bar',
    coverUrl: new URL('../assets/home/25-sticky-navbar.png', import.meta.url).href,
    title: 'Sticky Nav Bar',
    linkTo: '/sticky-nav-bar',
  },
  {
    coverAlt: 'double-vertical-slider',
    coverUrl: new URL('../assets/home/26-double-vertical-slider.png', import.meta.url).href,
    title: 'Double Vertical Slider',
    linkTo: '/double-vertical-slider',
  },
  {
    coverAlt: 'toast-notification',
    coverUrl: new URL('../assets/home/27-toast-notification.png', import.meta.url).href,
    title: 'Toast Notification',
    linkTo: '/toast-notification',
  },
  {
    coverAlt: 'github-profiles',
    coverUrl: new URL('../assets/home/28-github-profiles.png', import.meta.url).href,
    title: 'Github Profiles',
    linkTo: '/github-profiles',
  },
  {
    coverAlt: 'double-click-heart',
    coverUrl: new URL('../assets/home/29-double-click-heart.png', import.meta.url).href,
    title: 'Double Click Heart',
    linkTo: '/double-click-heart',
  },
  {
    coverAlt: 'auto-text-effect',
    coverUrl: new URL('../assets/home/30-auto-text-effect.png', import.meta.url).href,
    title: 'Auto Text Effect',
    linkTo: '/auto-text-effect',
  },
  {
    coverAlt: 'password-generator',
    coverUrl: new URL('../assets/home/31-password-generator.png', import.meta.url).href,
    title: 'Password Generator',
    linkTo: '/password-generator',
  },
  {
    coverAlt: 'good-cheap-fast',
    coverUrl: new URL('../assets/home/32-good-cheap-fast.png', import.meta.url).href,
    title: 'Good Cheap Fast',
    linkTo: '/good-cheap-fast',
  },
  {
    coverAlt: 'notes-app',
    coverUrl: new URL('../assets/home/33-notes-app.png', import.meta.url).href,
    title: 'Notes App',
    linkTo: '/notes-app',
  },
  {
    coverAlt: 'animated-countdown',
    coverUrl: new URL('../assets/home/34-animated-countdown.png', import.meta.url).href,
    title: 'Animated CountDown',
    linkTo: '/animated-countdown',
  },
  {
    coverAlt: 'image-carousel',
    coverUrl: new URL('../assets/home/35-image-carousel.png', import.meta.url).href,
    title: 'Image Carousel',
    linkTo: '/image-carousel',
  },
  {
    coverAlt: 'hoverboard',
    coverUrl: new URL('../assets/home/36-hoverboard.png', import.meta.url).href,
    title: 'Hoverboard',
    linkTo: '/hoverboard',
  },
  {
    coverAlt: 'pokedex',
    coverUrl: new URL('../assets/home/37-pokedex.png', import.meta.url).href,
    title: 'Pokedex',
    linkTo: '/pokedex',
  },
  {
    coverAlt: 'mobile-tab-navigation',
    coverUrl: new URL('../assets/home/38-mobile-tab-navigation.png', import.meta.url).href,
    title: 'Mobile Tab Navigation',
    linkTo: '/mobile-tab-navigation',
  },
  {
    coverAlt: 'password-strength-background',
    coverUrl: new URL('../assets/home/39-password-strength-background.png', import.meta.url).href,
    title: 'Password Strength Background',
    linkTo: '/password-strength-background',
  },
  {
    coverAlt: '3d-background-boxes',
    coverUrl: new URL('../assets/home/40-3d-background-boxes.png', import.meta.url).href,
    title: '3D Background Boxes',
    linkTo: '/3d-background-boxes',
  },
  {
    coverAlt: 'verify-account-ui',
    coverUrl: new URL('../assets/home/41-verify-account-ui.png', import.meta.url).href,
    title: 'Verify Account UI',
    linkTo: '/verify-account-ui',
  },
  {
    coverAlt: 'live-user-filter',
    coverUrl: new URL('../assets/home/42-live-user-filter.png', import.meta.url).href,
    title: 'Live User Filter',
    linkTo: '/live-user-filter',
  },
  {
    coverAlt: 'feedback-ui-design',
    coverUrl: new URL('../assets/home/43-feedback-ui-design.png', import.meta.url).href,
    title: 'Feedback Ui Design',
    linkTo: '/feedback-ui-design',
  },
  {
    coverAlt: 'custom-range-slider',
    coverUrl: new URL('../assets/home/44-custom-range-slider.png', import.meta.url).href,
    title: 'Feedback Ui Design',
    linkTo: '/custom-range-slider',
  },
];

export default Home;
