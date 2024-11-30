//blog details page
import meal from '../assets/images/icons/meal.png';
import ReadMoreArticles from '../components/ReadMoreArticles';
function BlogDetails() {
  return (
    <div className="px-[20px] md:px-[100px] py-8">
        <div className="py-10">
            <p className=" text-[33px] md:text-[55px] text-center">The secret tips & tricks to prepare a<br></br> perfect burger & pizza for our customers</p>
        </div>
        {/**blog image */}
        <div className="w-full h-[400px] md:h-[699px]">
            <img className='w-full h-full object-cover' src={meal} alt="icon" />
        </div>
        {/**blog context title */}
        <div className='py-6'>
            <p className='font-semibold text-[24px]'>What do you need to prepare a home-made burger?</p>
        </div>
        {/***blog context- 1 */}
        <div>
            <p className='text-[#414536]'>Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.</p>
        </div>
        {/***blog main context */}
        <div className='py-3'>
            <ol className='list-inside list-decimal'>
                <li className='py-2 md:py-0'>
                    <span className='font-semibold'>Quality Beef:</span> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.
                </li>
                <li className='py-2 md:py-0'>
                    <span className='font-semibold'>Proper Seasoning:</span> Don't skimp on salt and pepper. Season your patties generously just before cooking to enhance the natural beef flavor.
                </li>
                <li className='py-2 md:py-0'>
                    <span className='font-semibold'>Dont't Overwork The Meat:</span> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.
                </li>
                <li className='py-2 md:py-0'>
                    <span className='font-semibold'>Cooking Temperature:</span> Cook your burger on medium-high heat for a well-seared, flavorful crust while keeping the inside juicy.
                </li>
                <li className='py-2 md:py-0'>
                    <span className='font-semibold'>Resting:</span> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.
                </li>
            </ol>
        </div>
        {/***blog second context */}
         {/**blog context title */}
         <div className='py-6'>
            <p className='font-semibold text-[24px]'>What are the right ingredients to make it delicious?</p>
        </div>
        {/***blog context- 1 */}
        <div>
            <p className='text-[#414536]'>Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.</p>
        </div>
        {/***blog main context */}
        <div className='py-3'>
            <ol className='list-inside list-decimal'>
                <li className='py-2 md:py-0'>
                    <span className='font-semibold'>Quality Beef:</span> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.
                </li>
                <li className='py-2 md:py-0'>
                    <span className='font-semibold'>Proper Seasoning:</span> Don't skimp on salt and pepper. Season your patties generously just before cooking to enhance the natural beef flavor.
                </li>
                <li className='py-2 md:py-0'>
                    <span className='font-semibold'>Dont't Overwork The Meat:</span> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.
                </li>
                <li className='py-2 md:py-0'>
                    <span className='font-semibold'>Cooking Temperature:</span> Cook your burger on medium-high heat for a well-seared, flavorful crust while keeping the inside juicy.
                </li>
                <li className='py-2 md:py-0'>
                    <span className='font-semibold'>Resting:</span> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.
                </li>
            </ol>
        </div>
        {/**Read more articles */}
        <div className='mt-5 py-5 bg-white flex items-center justify-center'>
            <ReadMoreArticles />
        </div>
    </div>
  )
}

export default BlogDetails