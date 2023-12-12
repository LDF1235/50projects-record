import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
  },
  {
    name: 'June Cha',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
  },
  {
    name: 'Iida Niskanen',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
  },
  {
    name: 'Renee Sims',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text: "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
  },
  {
    name: 'Sasha Ho',
    position: 'Accountant',
    photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text: 'This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text: 'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
  },
];

const TestimonialBoxSwitcher = () => {
  const [index, setIndex] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const start = () => {
      progressRef.current?.offsetHeight;
      progressRef.current?.classList.replace('w-full', 'w-[0%]');
      progressRef.current?.classList.replace('duration-[10000ms]', 'duration-0');
      progressRef.current?.offsetHeight;
      progressRef.current?.classList.replace('w-[0%]', 'w-full');
      progressRef.current?.classList.replace('duration-0', 'duration-[10000ms]');
      setTimeout(() => {
        setIndex(prev => {
          let next = prev + 1;
          if (next >= testimonials.length) next = 0;
          return next;
        });
        start();
      }, 10000);
    };

    start();
  }, []);

  return (
    <div className='min-h-full bg-[#f4f4f4] flex items-center justify-center'>
      <div className='px-[50px] max-w-[768px] py-[80px] bg-[#4b6fe1] rounded-lg shadow-lg'>
        <div className='flex items-start'>
          <FontAwesomeIcon
            icon={faQuoteRight}
            className='mt-2 text-[36px] text-[#819aea]'
          />
          <div className='mx-4'>
            <div
              ref={progressRef}
              className={clsx('w-[0%] h-1 bg-white  transition-[width] duration-[10000ms] ease-linear')}
            />
            <p className='mt-4 text-white'>{testimonials[index].text}</p>
          </div>
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className='mt-2 text-[36px] text-[#819aea]'
          />
        </div>
        <div className='flex justify-center items-center mt-6'>
          <img
            alt='avatar'
            src={testimonials[index].photo}
            className='w-[75px] h-[75px] object-cover rounded-full '
          />
          <div className='text-white ml-3'>
            <p className='font-bold'>{testimonials[index].name}</p>
            <div className='mt-2'>{testimonials[index].position}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBoxSwitcher;
