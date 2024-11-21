import cheff from '../assets/images/icons/gridimage1.png';
import food1 from '../assets/images/icons/gridimage2.png';
import food2 from '../assets/images/icons/gridimage3.png';
import offer from '../assets/images/icons/offer.png';
import cart from '../assets/images/icons/cart.png';
import time from '../assets/images/icons/time.png';

function Delivery() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 px-5 py-7">
        {/* Left Section - Images */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <div className="w-full max-w-xs md:w-[431px] h-auto md:h-[600px] flex-shrink-0">
                <img className="w-full h-full object-cover" src={cheff} alt="Chef preparing food" />
            </div>
            <div className="flex flex-col gap-4 md:gap-2 py-3">
                <div className="w-full max-w-xs md:w-[290px] h-auto md:h-[333px]">
                    <img className="w-full h-full object-cover" src={food1} alt="Delicious food 1" />
                </div>
                <div className="w-full max-w-xs md:w-[290px] h-auto md:h-[240px]">
                    <img className="w-full h-full object-cover" src={food2} alt="Delicious food 2" />
                </div>
            </div>
        </div>

        {/* Right Section - Text Content */}
        <div className="flex items-center justify-center w-full mt-5 md:mt-0">
            <div className="text-center md:text-left max-w-md">
                <div className="flex flex-col gap-4">
                    <p className="font-regular text-2xl md:text-[55px] leading-tight">Fastest Food Delivery in City</p>
                    <p className="text-[#414536]">Our visual designer lets you quickly and easily drag your way to custom apps for both desktop and mobile.</p>
                </div>
                <div className="mt-8 flex flex-col gap-4">
                    <div className="flex items-center gap-3 md:gap-5">
                        <img className="w-6 h-6 md:w-auto md:h-auto" src={time} alt="Time icon" />
                        <p>Delivery within 30 minutes</p>
                    </div>
                    <div className="flex items-center gap-3 md:gap-5">
                        <img className="w-6 h-6 md:w-auto md:h-auto" src={offer} alt="Offer icon" />
                        <p>Best Offer & Prices</p>
                    </div>
                    <div className="flex items-center gap-3 md:gap-5">
                        <img className="w-6 h-6 md:w-auto md:h-auto" src={cart} alt="Cart icon" />
                        <p>Online Services Available</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Delivery;
