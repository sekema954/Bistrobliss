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
  const cardRef = useRef<(HTMLDivElement | null)[]>([]);

  // Animation using GSAP and ScrollTrigger
  useGSAP(() => {
    cardRef.current
      .filter((card): card is HTMLDivElement => card !== null) // Ensure only non-null elements
      .forEach((card, i) => {
        gsap.from(card, {
          x: 100,
          opacity: 0,
          duration: 1,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
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
          ref={(el) => (cardRef.current[index] = el)}
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
