import BookForm from "../components/BookForm";
import map from '../assets/images/icons/map.png';

function Book() {
  return (
    <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1">
      {/** First Section: Booking Form */}
      <div className="bg-[#F9F9F7] flex flex-col items-center justify-center py-6 md:py-10 gap-5 px-4 md:px-8">
        <div className="flex flex-col items-center justify-center w-full max-w-[554px]">
          <p className="text-[28px] sm:text-[36px] md:text-[45px] lg:text-[55px] font-semibold leading-tight md:leading-normal text-center">
            Book A Table
          </p>
          <p className="text-[#495460] text-center text-sm md:text-base lg:text-lg mt-3 md:mt-4">
            We consider all the drivers of change, giving you the components you need to create a truly exceptional experience.
          </p>
        </div>
        <div className="flex items-center justify-center w-full">
          <BookForm />
        </div>
      </div>

      {/** Second Section: Map Image */}
      <div className="flex items-center justify-center md:py-10 md:px-10 bg-[#F9F9F7]">
        <img className="w-full h-full object-cover" src={map} alt="Map" />
      </div>
    </div>
  );
}

export default Book;
