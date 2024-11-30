import { useRef } from 'react';
import breakfast from '../assets/images/icons/breakfast.png';
import maindishes from '../assets/images/icons/maindishes.png';
import drinks from '../assets/images/icons/drinks.png';
import desserts from '../assets/images/icons/desserts.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function BrowseMenu() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animation using GSAP and ScrollTrigger
  useGSAP(() => {
    // Animate each card when it comes into view
    cardRefs.current.forEach((card, index) => {
        console.log(index)
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
          }
        }
      );
    });
  }, []);

  const menuCategory = [
    { id: 1, title: 'Breakfast', icon: breakfast, link: '/menu', context: 'In the new era of technology we look in the future with certainty and pride for our life.' },
    { id: 2, title: 'Main Dishes', icon: maindishes, link: '/menu', context: 'In the new era of technology we look in the future with certainty and pride for our life.' },
    { id: 3, title: 'Drinks', icon: drinks, link: '/menu', context: 'In the new era of technology we look in the future with certainty and pride for our life.' },
    { id: 4, title: 'Desserts', icon: desserts, link: '/menu', context: 'In the new era of technology we look in the future with certainty and pride for our life.' },
  ];

  return (
    <div className="py-10 gap-4 flex flex-col md:flex-row md:flex">
      {menuCategory.map((data, index) => (
        <div
          key={data.id}
          ref={(el) => (cardRefs.current[index] = el)}
          className="w-[306px] h-[375px] border border-gray shadow flex justify-center py-7 px-7 rounded-[20px] transition-transform duration-300 hover:shadow-lg hover:-translate-y-2"
        >
          <div className="text-center flex flex-col gap-3 items-center">
            <img className="w-[100px] h-[100px]" src={data.icon} alt="icon" />
            <p className="font-semibold text-lg">{data.title}</p>
            <p>{data.context}</p>
            <a className="text-red-600 mt-7" href={data.link}>Explore Menu</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BrowseMenu;
