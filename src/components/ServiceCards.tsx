import caterings from '../assets/images/icons/caterings.png';
import birthdays from '../assets/images/icons/birthdays.png';
import weddings from '../assets/images/icons/weddings.png';
import events from '../assets/images/icons/events.png';
function ServiceCards() {
  const services = [
    {
      id: 1,
      title: 'Caterings',
      image: caterings,
      context: 'In the new era of technology, we look to the future with certainty for life.',
    },
    {
      id: 2,
      title: 'Birthdays',
      image: birthdays,
      context: 'In the new era of technology, we look to the future with certainty for life.',
    },
    {
      id: 3,
      title: 'Weddings',
      image: weddings,
      context: 'In the new era of technology, we look to the future with certainty for life.',
    },
    {
      id: 4,
      title: 'Events',
      image: events,
      context: 'In the new era of technology, we look to the future with certainty for life.',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center pb-16">
      {services.map((data) => (
        <div
          key={data.id}
          className="w-[306px] h-[443px] bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500"
        >
          {/* Image Section */}
          <div className="w-full h-[320px]">
            <img className="w-full h-full object-cover" src={data.image} alt={data.title} />
          </div>

          {/* Text Section */}
          <div className="mt-4 px-4 flex flex-col gap-4">
            <p className="font-semibold text-xl">{data.title}</p>
            <p className="text-[#414536]">{data.context}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceCards;
