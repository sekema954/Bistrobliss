//about page
import AboutContent from '../components/AboutContent2';
import playBtn from '../assets/images/icons/Play.png';
import menu from '../assets/images/icons/restaurant-menu 1.png';
import order from '../assets/images/icons/order.png';
import timer from '../assets/images/icons/timer 1.png';
import Information from "../components/Information";
import Testimonials from "../components/Testimonials";
function About() {
  const Prop = [
    {id:1, icon:menu, title: 'Multi Cuisine', context:'In the new era of technology we look in the future with certainty life.'},
    {id:2, icon:order, title: 'Multi Cuisine', context:'In the new era of technology we look in the future with certainty life.'},
    {id:3, icon:timer, title: 'Multi Cuisine', context:'In the new era of technology we look in the future with certainty life.'},
  ];
  
  return (
    <div>
      <div>
        <AboutContent />
      </div>
      <div className="about-bg w-full h-[690px] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <a href="/video">
            <img className=" h-[50px] w-[50px] md:h-[106px] md:w-[106px] cursor-pointer" src={playBtn} alt="icon" />
          </a>
          <p className="text-[30px] md:text-[55px] font-bold text-white">Feel the authentic &<br></br> original taste from us</p>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:flex-row py-10 px-[70px] items-center justify-center">
        {Prop.map(data=>(
          <div>
            <div className="flex gap-5" key={data.id}>
              <img className="w-[48px] h-[48px]" src={data.icon} alt={data.title} />
              <div className="flex flex-col">
                <p className="font-semibold text-lg">{data.title}</p>
                <p className="text-[#414536]">{data.context}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#F9F9F7] py-10 px-10">
          <div className="flex items-center justify-center">
            <Information />
          </div>
          <Testimonials />
      </div>
    </div>
  )
}

export default About