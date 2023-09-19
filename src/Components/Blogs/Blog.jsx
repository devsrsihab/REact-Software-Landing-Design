import { Link, useNavigate } from "react-router-dom"

const Blog = ({blog}) => {
    const {id,title,description,thumbnail,date} = blog
    const navigate = useNavigate()
    const handleNavigate = ()=> {
      navigate(`/blog/${id}`)
    }
  return (
    <>
   <div className="blog-item w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div className="mb-8 overflow-hidden rounded">
            <Link to={`/blog/${id}`} >
            <img
              src={thumbnail}
              alt="image"
              className="w-full"
            />
            </Link>
          </div>
          <div>
            <span className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
              {date}
            </span>
            <h3>
              <Link
                to={`/blog/${id}`}
                className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
              >
               {title}
              </Link>
              
            </h3>
            <p className="text-body-color text-base">
              {description}
            </p>
            <button onClick={handleNavigate} className="bg-secondary mt-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
              See Details
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Blog