//about information component
import about from '../assets/images/icons/about.png';

function Information() {
    const Prop = [
        {id:1, value:3, title:"Locations"},
        {id:2, value:1995, title:"Founded"},
        {id:3, value:65, title:"Staff Members"},
        {id:4, value:100, title:"Satisfied Customers"},
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 md:p-12">
            {/** grid1 */}
            <div className='flex flex-col gap-5'>
                <p className='font-semibold text-[30px] md:text-[55px]'>
                    A little information for our valuable guest
                </p>
                <p className='text-[#414536] text-base md:text-lg'>
                    At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
                </p>
                <div className='grid grid-cols-2 grid-rows-2 gap-4'>
                    {Prop.map(data => (
                        <div 
                            key={data.id} 
                            className='w-full h-[150px] md:h-[174px] border border-[#DBFD0] shadow-lg flex items-center justify-center p-4 md:w-[293px]'
                        >
                            <div className='text-center flex flex-col gap-3'>
                                <p className='font-semibold text-3xl md:text-[55px] text-[#2C2F24]'>
                                    {data.value}
                                </p>
                                <p className='text-[#414536] text-sm md:text-base'>
                                    {data.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/** grid2 */}
            <div className='flex items-center justify-center mt-6 md:mt-0'>
                <div className='w-full h-[300px] md:w-[555px] md:h-[645px]'>
                    <img 
                        className='w-full h-full object-cover rounded-[20px] shadow-lg' 
                        src={about} 
                        alt="icon" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Information;
