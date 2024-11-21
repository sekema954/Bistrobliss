import sushi from '../assets/images/icons/shushi.png';

function BlogProp() {
  const BlogPosts = [
    { id: 1, thumbnail: sushi, date: 'January 3, 2023', title: 'How to prepare a delicious gluten free sushi' },
    { id: 2, thumbnail: sushi, date: 'February 10, 2023', title: 'Top 10 Tips for Perfect Sushi Rolls' },
    { id: 3, thumbnail: sushi, date: 'March 5, 2023', title: 'Understanding the Basics of Sushi Making' },
    { id: 4, thumbnail: sushi, date: 'April 12, 2023', title: 'Gluten-Free Sushi: A Complete Guide' },
    { id: 5, thumbnail: sushi, date: 'May 20, 2023', title: 'Sushi Etiquette You Should Know' },
    { id: 6, thumbnail: sushi, date: 'June 15, 2023', title: 'Exploring Different Types of Sushi' },
    { id: 7, thumbnail: sushi, date: 'July 22, 2023', title: 'Choosing the Best Ingredients for Sushi' },
    { id: 8, thumbnail: sushi, date: 'August 8, 2023', title: 'How to Store Sushi Properly' },
    { id: 9, thumbnail: sushi, date: 'September 13, 2023', title: 'Sushi vs Sashimi: What’s the Difference?' },
    { id: 10, thumbnail: sushi, date: 'October 30, 2023', title: 'Making Vegan Sushi: Tips and Tricks' },
    { id: 11, thumbnail: sushi, date: 'November 25, 2023', title: 'Understanding Sushi Rice and Its Importance' },
    { id: 12, thumbnail: sushi, date: 'December 7, 2023', title: 'Secrets to Making Sushi Like a Pro' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {BlogPosts.map((post) => (
        <a href='/blogdetails' key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-[306px] h-[340px]">
            <div className='w-full h-[200px]'>
                <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
            </div>
          <div className="p-5">
            <p className="text-sm text-gray-500">{post.date}</p>
            <h3 className="text-xl font-semibold mt-2">{post.title}</h3>
          </div>
        </a>
      ))}
    </div>
  );
}

export default BlogProp;
