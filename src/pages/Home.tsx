import DemoCard from '@/components/DemoCard';
import expandingCardsPng from '../assets/home/1-expanding-cards.png';
import progressStepsPng from '../assets/home/2-progress-steps.png';

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
        <div className='w-[18%] invisible grow aspect-[681/484] mc-skeleton '></div>
        <div className='w-[18%] invisible grow aspect-[681/484] mc-skeleton '></div>
        <div className='w-[18%] invisible grow aspect-[681/484] mc-skeleton '></div>
      </div>
    </div>
  );
};

export default Home;