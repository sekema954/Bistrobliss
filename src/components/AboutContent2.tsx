import gridimage from '../assets/images/icons/platefood.png';
import phone from '../assets/images/icons/Icon/Outline/phone.png';
import mail from '../assets/images/icons/Icon/Outline/mail.png';
import marker from '../assets/images/icons/Icon/Outline/location-marker.png';

function AboutContent() {
  return (
    <div className="bg-[#F9F9F7] flex items-center justify-center px-5 py-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 h-full">
            {/* Left Section with Image */}
            <div className="flex justify-center">
                <div className="relative w-full max-w-lg h-auto md:w-[649px] md:h-[616px]">
                    <img className="w-full h-auto max-w-xs md:max-w-none md:w-[599px] md:h-[566px]" src={gridimage} alt="icon" />
                    <div className="absolute right-0 bottom-0 w-full md:w-[411px] bg-[#474747] px-5 py-5 md:px-10 md:py-10 text-white">
                        <p className="font-semibold text-lg">Come and visit us</p>
                        <div className="mt-6 space-y-4">
                            <div className="flex items-center gap-3">
                                <img className="w-6 h-6" src={phone} alt="phone icon" />
                                <p>(123)-546-7890</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <img className="w-6 h-6" src={mail} alt="mail icon" />
                                <p>test@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <img className="w-6 h-6" src={marker} alt="location icon" />
                                <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section with Text */}
            <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-6 md:space-y-7 mt-5 md:mt-0 md:px-7">
                <p className="font-regular text-3xl md:text-[55px] leading-tight">
                    We provide healthy food for your family.
                </p>
                <p className="text-[#2C2F24]">
                    Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in the city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
                </p>
                <p className="text-[#2C2F24]">
                    At our place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
                </p>
            </div>
        </div>
    </div>
  );
}

export default AboutContent;
