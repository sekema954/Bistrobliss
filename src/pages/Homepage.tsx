import BrowseMenu from "../components/BrowseMenu";
import Menubtn from "../components/Menubtn";
import AboutContent from "../components/AboutContent";
import ServiceCards from "../components/ServiceCards";
import Delivery from "../components/Delivery";
import Testimonials from "../components/Testimonials";
import BlogView from "../components/BlogView";
import { useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Homepage() {
  let HeaderText = useRef(null);
  let subText = useRef(null);

  useGSAP(() => {
    // Animation for HeaderText with ScrollTrigger
    gsap.to(HeaderText.current, {
      opacity: 1,
      duration: 1,
      ease: 'bounce',
      yPercent: -20,
    });

    // Animation for subText with ScrollTrigger
    gsap.to(subText.current, {
      delay: 1,
      opacity: 1,
      ease: 'bounce',
      yPercent: -15,
    });

  }, []);

  return (
    <div>
      {/***first page */}
      <div className="w-full h-screen custom-bg bg-center bg-no-repeat bg-cover flex items-center justify-center">
        <div className="w-[407px] text-center flex flex-col gap-3">
          <p ref={HeaderText} className="opacity-0 md:text-[66px] text-[50px] font-regular text-center text-[#2C2F24] leading-[70px]">Best food for<br></br>your taste</p>
          <p ref={subText} className="text-sm md:text-md opacity-0">Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <a href="/book">
              <button className="w-[148px] h-[48px] rounded-full text-white bg-red-800 text-black transition duration-[1s] hover:bg-white hover:text-black hover:border ">Book A Table</button>
            </a>
            <Menubtn />
          </div>
        </div>
      </div>

      {/***browse menu  */}
      <div className="py-10">
        <div className="text-center">
          <p className="text-[35px] font-regular">Browse Our Menu</p>
        </div>
        <div className="flex items-center justify-center">
          <BrowseMenu />
        </div>
      </div>

      {/**About content */}
      <div>
        <div>
          <AboutContent />
        </div>
      </div>

      {/**services */}
      <div className="px-10 py-10">
        <div className="px-10">
          <p className="font-regular text-3xl md:text-[55px] leading-tight md:w-[45%] md:text-left text-center">We also offer unique services for your events</p>
        </div>
        <div className="flex items-center justify-center my-10">
          <ServiceCards />
        </div>
      </div>
      {/**Delivery */}
      <div className="bg-[#F9F9F7] px-10 py-10">
        <Delivery />
      </div>

      {/**Testimonials */}
      <div className="py-10">
        <div>
          <p className="text-4xl text-center">What Our Customers Say</p>
        </div>
        <div>
          <Testimonials />
        </div>
      </div>

      {/**Blog */}
      <div className="bg-[#F9F9F7] px-[50px] py-[50px]">
        <div className="flex justify-between items-center">
          <p className="md:text-[55px] text-sm">Our Blog & Articles</p>
          <a href="/blog">
            <button className="md:w-[148px] md:h-[48px] text-sm md:text-md rounded-full bg-[#AD343E] text-white transition duration-1000 hover:bg-transparent hover:text-black hover:border border-black">Read All Articles</button>
          </a>
        </div>
        <div className="flex items-center justify-center">
          <BlogView />
        </div>
      </div>

    </div>
  );
}

export default Homepage;
