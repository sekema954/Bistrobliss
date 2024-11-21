import instagram from '../assets/images/icons/igf.png';
import facebook from '../assets/images/icons/facebookf.png';
import git from '../assets/images/icons/gitf.png';
import twitter from '../assets/images/icons/twitterf.png';
import logo from '../assets/images/icons/japanese-food.png';
import image1 from '../assets/images/icons/footericon1.png';
import image2 from '../assets/images/icons/footericon2.png';
import image3 from '../assets/images/icons/footericon3.png';
import image4 from '../assets/images/icons/footericon4.png';

function Footer() {
  return (
    <div className="bg-[#474747]">
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[100px] py-10 lg:py-[100px] gap-10 lg:gap-0">
        
        {/**col1 */}
        <div className='flex flex-col items-center lg:items-start gap-8'>
          <div className='flex items-center justify-center lg:justify-start gap-6'>
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <p className='text-white text-center text-xl lg:text-2xl'>Bistro Bliss</p>
          </div>
          <div className="text-center lg:text-left">
            <p className='text-[#ADB29E]'>
              In the new era of technology, we look <br className="hidden lg:block" /> 
              to the future with certainty and pride for <br className="hidden lg:block" /> 
              our company.
            </p>
          </div>
          <div className='flex gap-4 justify-center lg:justify-start'>
            <img className='w-[35px] h-[35px] cursor-pointer transition duration-[1s] hover:scale-125' src={twitter} alt="Twitter icon" />
            <img className='w-[35px] h-[35px] cursor-pointer transition duration-[1s] hover:scale-125' src={facebook} alt="Facebook icon" />
            <img className='w-[35px] h-[35px] cursor-pointer transition duration-[1s] hover:scale-125' src={instagram} alt="Instagram icon" />
            <img className='w-[35px] h-[35px] cursor-pointer transition duration-[1s] hover:scale-125' src={git} alt="GitHub icon" />
          </div>
        </div>

        {/**col2 */}
        <div className='text-center lg:text-left'>
          <p className='text-white font-semibold text-lg'>Pages</p>
          <div className='text-[#DBDFD0] mt-4 flex flex-col gap-2'>
            {['Home', 'About', 'Menu', 'Pricing', 'Blog', 'Contact', 'Delivery'].map((page, index) => (
              <a key={index} className='transition duration-[1s] hover:scale-125' href={`/${page.toLowerCase()}`}>{page}</a>
            ))}
          </div>
        </div>

        {/**col3 */}
        <div className='text-center lg:text-left'>
          <p className='text-white font-semibold text-lg'>Utility Pages</p>
          <div className='text-[#DBDFD0] mt-4 flex flex-col gap-2'>
            {['Start Here', 'Styleguide', 'Password Protected', '404 Not Found', 'Licenses', 'Changelog', 'View More'].map((utility, index) => (
              <a key={index} className='transition duration-[1s] hover:scale-125' href={`/${utility.replace(/\s+/g, '').toLowerCase()}`}>{utility}</a>
            ))}
          </div>
        </div>

        {/**col4 */}
        <div className='text-center lg:text-left'>
          <p className='text-white font-semibold text-lg'>Follow Us on Instagram</p>
          <div className='grid grid-cols-2 gap-3 mt-6'>
            {[image1, image2, image3, image4].map((img, index) => (
              <div key={index} className='w-[90px] h-[80px] lg:w-[194px] lg:h-[170px]'>
                <img className='w-full h-full object-cover' src={img} alt={`Instagram image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
