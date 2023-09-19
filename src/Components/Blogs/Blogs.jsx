// import { useEffect,useState } from "react"
// import axios from 'axios';
import Blog from "./Blog";
import { useLoaderData } from "react-router-dom";
const Blogs = () => {

  const blogs = useLoaderData()

  return (
    <>

   <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
  <div className="container mx-auto">
    <div className="-mx-4 flex flex-wrap">

      {
        blogs.map((blog,index) => <Blog blog={blog}  key={index} /> )
      }

   

    </div>
  </div>
</section>

    </>
  )
}

export default Blogs