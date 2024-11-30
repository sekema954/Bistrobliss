//Read more blogs
import { useEffect, useState } from 'react';
import blog1 from '../assets/images/icons/blog1.png';
import blog2 from '../assets/images/icons/blog2.png';
import blog3 from '../assets/images/icons/blog3.png';
import blog4 from '../assets/images/icons/blog4.png';
import blog5 from '../assets/images/icons/blog4.png';

function ReadMoreArticles() {
    interface Prop {
        id: number;
        thumbnail: string;
        date: string;
        title: string;
    };
    // create blog array
    const BlogData = [
        {id:1, thumbnail: blog1, date:'January 3 2024', title: 'How to prepare a delicious gluten free sushi'},
        {id:2, thumbnail: blog2, date:'January 3 2024', title: 'How to prepare a delicious gluten free sushi'},
        {id:3, thumbnail: blog3, date:'January 3 2024', title: 'How to prepare a delicious gluten free sushi'},
        {id:4, thumbnail: blog4, date:'January 3 2024', title: 'How to prepare a delicious gluten free sushi'},
        {id:5, thumbnail: blog5, date:'January 3 2024', title: 'How to prepare a delicious gluten free sushi'},
    ];

    //slice blogs to show only 4
    const updatedBlogs = BlogData.slice(0,4);
    const [blogs, setBlogs] = useState<Prop[]>([]);

    //function to update blog state
    const updateBlogState = ()=>{
        setBlogs(updatedBlogs);
    };

    useEffect(()=>{
        updateBlogState();
    }, []);

  return (
    <div>
        <div className="text-center">
            <p className="text-[30px] md:text-[55px]">Read More Articles</p>
            <p>We consider all the drivers of change gives you the components you need<br></br> to change to create a truly happens.</p>
        </div>
        <div className='py-5 flex flex-col md:flex-row gap-5 mt-5 items-center justify-center'>
            {blogs.map(data=>(
                <a href='/blogdetails' key={data.id} className='w-[306px] h-[340px] shadow shadow-lg rounded-[10px]'>
                    {/**context */}
                    <div>
                        {/***thumbnail */}
                        <div className='w-[306px] h-[200px]'>
                            <img src={data.thumbnail} alt={data.title} />
                        </div>
                        <div className='px-5 py-5'>
                            <p className='text-[#737865] py-1'>{data.date}</p>
                            <p className='font-semibold text-[20px]'>{data.title}</p>
                        </div>
                    </div>

                </a>
            ))}
        </div>
    </div>
  )
}

export default ReadMoreArticles