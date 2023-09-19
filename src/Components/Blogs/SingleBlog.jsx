import { useLoaderData, useNavigate, useParams } from "react-router-dom"

const SingleBlog = () => {
  const params = useParams()
  console.log(params.id);

  const blog = useLoaderData()
  const {thumbnail,title,description,date,username,userphoto} = blog
  const navigat = useNavigate()
  const handleNavigate  = () => {
    navigat(-1)
  }

  return (
   <>
       <section className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto">
  <button onClick={handleNavigate} className="btn btn-error mt-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
              Go Back
            </button>
    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
      <img
        className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
        src={thumbnail}
        alt=""
      />
      <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
        <p className="text-sm text-blue-500 uppercase">{date}</p>
        <a className="block mt-4 text-2xl font-semibold text-gray-800  dark:text-white md:text-3xl"
        >
         {title}
        </a>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
         {description}
        </p>
        <div className="flex items-center mt-6">
          <img
            className="object-cover object-center w-10 h-10 rounded-full"
            src={userphoto}
            alt=""
          />
          <div className="mx-4">
            <h1 className="text-sm text-gray-700 dark:text-gray-200">
              {username}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Lead Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
       </section>
   </>
  )
}

export default SingleBlog