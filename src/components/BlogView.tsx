import burger from '../assets/images/icons/burger.png';
import pizza from '../assets/images/icons/pizza.png';
import cake from '../assets/images/icons/cake.png';
import chicken from '../assets/images/icons/chicken.png';
import fries from '../assets/images/icons/fries.png';

function BlogView() {
    const BlostPosts = [
        { id: 1, image: burger, postDate: 'January 3, 2023', title: 'The secret tips & tricks to prepare a perfect burger & pizza for our customers', context: 'Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.' },
        { id: 2, image: fries, postDate: 'January 3, 2023', title: 'How to prepare the perfect french fries in an air fryer' },
        { id: 3, image: chicken, postDate: 'January 3, 2023', title: 'How to prepare delicious chicken tenders' },
        { id: 4, image: cake, postDate: 'January 3, 2023', title: '7 delicious cheesecake recipes you can prepare' },
        { id: 5, image: pizza, postDate: 'January 3, 2023', title: '5 great pizza restaurants you should visit this city' }
    ];

    return (
        <div className="py-10 px-4 lg:px-10 flex flex-col lg:flex-row gap-10">
            {/** Left side larger grid box */}
            <a href='/blogdetails' className="w-full lg:w-[536px]">
                <div className="w-full h-full rounded-[10px] overflow-hidden shadow shadow-lg">
                    <img src={BlostPosts[0].image} alt="Featured post" className="w-full h-64 sm:h-80 object-cover" />
                    <div className="p-4 sm:p-6">
                        <p className="text-sm text-gray-500">{BlostPosts[0].postDate}</p>
                        <h2 className="font-bold text-xl sm:text-2xl mt-2">{BlostPosts[0].title}</h2>
                        <p className="text-gray-600 mt-4">{BlostPosts[0].context}</p>
                    </div>
                </div>
            </a>

            {/** Right side 4 smaller boxes in a 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
                {BlostPosts.slice(1).map((data) => (
                    <a href='/blogdetails' key={data.id} className="rounded-[10px] overflow-hidden w-full h-auto shadow shadow-lg">
                        <img src={data.image} alt={data.title} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <p className="text-sm text-gray-500">{data.postDate}</p>
                            <h3 className="font-semibold text-sm mt-2">{data.title}</h3>
                            {data.context && (
                                <p className="text-gray-600 mt-2">{data.context}</p>
                            )}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default BlogView;
