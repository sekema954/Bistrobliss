//blog prop component
import BlogProp from "../components/BlogProp"
function Blog() {
  return (
    <div className="py-10 bg-[#F9F9F7]">
      <div className="flex flex-col items-center justify-center ">
        <p className="text-[30px] md:text-[100px]">Our Blog & Articles</p>
        <p  className="text-[#414536] text-center">We consider all the drivers of change gives you the components you need<br></br> to change to create a truly happens.</p>
      </div>
      <div className="flex items-center justify-center py-10 mt-5">
        <BlogProp />
      </div>
    </div>
  )
}

export default Blog