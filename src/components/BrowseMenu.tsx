
//browse menu component
import breakfast from '../assets/images/icons/breakfast.png';
import maindishes from '../assets/images/icons/maindishes.png';
import drinks from '../assets/images/icons/drinks.png';
import desserts from '../assets/images/icons/desserts.png';
function BrowseMenu() {
    const menuCategory = [
        {id:1, title:'Breakfast', icon: breakfast, link:'/breakfast', context:'In the new era of technology we look in the future with certainty and pride for our life.'},
        {id:2, title:'Main Dishes', icon: maindishes, link:'/maindishes', context:'In the new era of technology we look in the future with certainty and pride for our life.'},
        {id:3, title:'Drinks', icon: drinks, link:'/drinks', context:'In the new era of technology we look in the future with certainty and pride for our life.'},
        {id:4, title:'Desserts', icon: desserts, link:'/desserts', context:'In the new era of technology we look in the future with certainty and pride for our life.'},
    ];
  return (
    <div className="py-10 gap-4 flex flex-col md:flex-row md:flex">
        {menuCategory.map(data=>(
            <div key={data.id} className='w-[306px] h-[375px] border border-gray shadow flex justify-center py-7 px-7 rounded-[20px]'>
                <div className='text-center flex flex-col gap-3 items-center'>
                    <img className='w-[100px] h-[100px]' src={data.icon} alt="icon" />
                    <p className='font-semibold text-lg'>{data.title}</p>
                    <p>{data.context}</p>
                    <a className='text-red-600 mt-7' href={data.link}>Explore Menu</a>
                </div>

            </div>
        ))}
    </div>
  )
}

export default BrowseMenu