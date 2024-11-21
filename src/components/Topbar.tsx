import phone from '../assets/images/icons/Icon/Outline/phone.png';
import mail from '../assets/images/icons/Icon/Outline/mail.png';
import instagram from '../assets/images/icons/instagram.png';
import facebook from '../assets/images/icons/facebook.png';
import reddit from '../assets/images/icons/reddit.png';
import twitter from '../assets/images/icons/twitter.png';
//top bar
function Topbar() {


  return (
    <div className="w-full h-[45px] bg-[#474747] items-center justify-between px-[100px] hidden md:flex">
        <div className='flex gap-10'>
            <div className='flex gap-2 items-center'>
                <img src={phone} alt="icon" />
                <p className='text-white'>123-456-7890</p>
            </div>
            <div className='flex gap-2 items-center'>
                <img className='w-[18px] h-[18px]' src={mail} alt="icon" />
                <p className='text-white'>test@gmail.com</p>
            </div>
        </div>

        <div className='flex gap-3'>
            <img className='w-[27.17px] h-[27.17px] cursor-pointer transition-all hover:scale-125' src={facebook} alt="icon" />
            <img className='w-[27.17px] h-[27.17px] cursor-pointer transition-all hover:scale-125' src={twitter} alt="icon" />
            <img className='w-[27.17px] h-[27.17px] cursor-pointer transition-all hover:scale-125' src={instagram} alt="icon" />
            <img className='w-[27.17px] h-[27.17px] cursor-pointer transition-all hover:scale-125' src={reddit} alt="icon" />
        </div>
    </div>
  )
}

export default Topbar