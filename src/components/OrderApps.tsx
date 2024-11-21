import ubereats from '../assets/images/icons/ubereats.png';
import grubhub from '../assets/images/icons/grubhub.png';
import postmates from '../assets/images/icons/postmates.png';
import doordash from '../assets/images/icons/doordash.png';
import foodpanda from '../assets/images/icons/foodpanda.png';
import deliveroo from '../assets/images/icons/deliveroo.png';
import instacart from '../assets/images/icons/instacart.png';
import justeat from '../assets/images/icons/justeat.png';
import didifood from '../assets/images/icons/didifood.png';

function OrderApps() {
    const orderApps = [
        {id: 1, logo: ubereats},
        {id: 2, logo: grubhub},
        {id: 3, logo: postmates},
        {id: 4, logo: doordash},
        {id: 5, logo: foodpanda},
        {id: 6, logo: deliveroo},
        {id: 7, logo: instacart},
        {id: 8, logo: justeat},
        {id: 9, logo: didifood},
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
        {/** Text Section */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[346px] flex flex-col gap-4 px-4 md:px-0">
            <p className="text-[24px] md:text-[40px] lg:text-[55px] leading-[30px] md:leading-[50px] lg:leading-[60px] font-semibold">
              You can order through apps
            </p>
            <p className="text-[#414536] text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.
            </p>
          </div>
        </div>

        {/** Apps Grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-4 md:gap-6 lg:gap-9 px-4 md:px-0">
          {orderApps.map((data) => (
            <div key={data.id} className="border shadow-md flex items-center justify-center p-2 rounded-lg">
              <img className="w-10 md:w-12 lg:w-14" src={data.logo} alt="icon" />
            </div>
          ))}
        </div>
      </div>
    );
}

export default OrderApps;
