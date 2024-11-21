import profile1 from '../assets/images/icons/profile1.png';
import profile2 from '../assets/images/icons/profile2.png';
import profile3 from '../assets/images/icons/profile3.png';

function Testimonials() {
    const testimonials = [
        {id: 1, title: '"The best restaurant"', context: 'Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.', profile: profile1, name: 'Sophire Robinson', location: 'Los Angeles, CA'},
        {id: 2, title: '“Simply delicious”', context: 'Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.', profile: profile2, name: 'Matt Canon', location: 'San Francisco, CA'},
        {id: 3, title: '“One of a kind restaurant”', context: 'The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.', profile: profile3, name: 'Rebecca Sanchez', location: 'San Diego, CA'},
    ];

    return (
        <div className="flex items-center justify-center py-10 px-5">
            <div className="flex flex-col md:flex-row gap-8">
                {testimonials.map(data => (
                    <div key={data.id} className="bg-[#F9F9F7] rounded-[10px] p-6 md:p-10 max-w-sm md:max-w-md mx-auto relative">
                        <div className="flex flex-col gap-4">
                            <p className="font-bold text-[20px] md:text-[24px] text-[#AD343E]">{data.title}</p>
                            <p className="text-[#414536]">{data.context}</p>
                            <hr className="mt-5 bg-[#DBDFD0]" />
                        </div>
                        <div className="flex items-center gap-4 mt-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
                                <img className="w-full h-full object-cover" src={data.profile} alt="User profile" />
                            </div>
                            <div className="flex flex-col">
                                <p className="font-semibold">{data.name}</p>
                                <p className="text-[#414536] text-sm">{data.location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
