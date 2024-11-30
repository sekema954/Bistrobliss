import { useEffect, useRef } from 'react';
import about from '../assets/images/icons/about.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

function Information() {
  const valueRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const animateValues = [
    { id: 1, start: 0, end: 3, title: "Locations" },
    { id: 2, start: 1980, end: 1995, title: "Founded" },
    { id: 3, start: 0, end: 65, title: "Staff Members" },
    { id: 4, start: 0, end: 100, title: "Satisfied Customers" },
  ];

  useEffect(() => {
    animateValues.forEach((item, index) => {
      if (valueRefs.current[index]) {
        gsap.to(valueRefs.current[index], {
          duration: 2,
          textContent: item.end,
          snap: { textContent: 1 },
          ease: "power1.out",
          scrollTrigger: {
            trigger: valueRefs.current[index], // Element to trigger animation
            start: "top 75%", // Start animation when 75% from the top of the viewport
            toggleActions: "play none none none", // Play once on scroll
          },
          onUpdate: function () {
            const target = valueRefs.current[index];
            if (target) {
              target.textContent = Math.round(Number(target.textContent)).toString();
            }
          },
        });
      }
    });

    // Clean up ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 md:p-12">
      <div className="flex flex-col gap-5">
        <p className="font-semibold text-[30px] md:text-[55px]">
          A little information for our valuable guest
        </p>
        <p className="text-[#414536] text-base md:text-lg">
          At our place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {animateValues.map((data, index) => (
            <div
              key={data.id}
              className="w-full h-[150px] md:h-[174px] border border-[#DBFD0] shadow-lg flex items-center justify-center p-4 md:w-[293px]"
            >
              <div className="text-center flex flex-col gap-3">
                <p
                  ref={(el) => (valueRefs.current[index] = el)}
                  className="font-semibold text-3xl md:text-[55px] text-[#2C2F24]"
                >
                  {data.start}
                </p>
                <p className="text-[#414536] text-sm md:text-base">
                  {data.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-6 md:mt-0">
        <div className="w-full h-[300px] md:w-[555px] md:h-[645px]">
          <img
            className="w-full h-full object-cover rounded-[20px] shadow-lg"
            src={about}
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Information;
