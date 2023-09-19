const Banner = () => {
  return (
    <>
    <div className="w-full bg-secondary ">
    <div className="banner w-10/12 mx-auto md:flex items-center ">
        <div className="banner-content w-1/3 flex flex-col gap-4 py-28 ">
          <h2 className="text-4xl font-bold" >Coddits one of the best system in SASS</h2>
          <p className="text-sm font-light leading-5 " >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            explicabo maiores possimus numquam, velit facilis perferendis at
            mollitia quia nisi ullam enim.
          </p>
          <button className="btn btn-primary text-white self-start	 rounded-none text-sm font-normal ">try a live demo</button>
        </div>
        <div className="banner-img w-2/3 ">
          <img
            className="w-full  "
            src="https://i.ibb.co/ZXWjfC6/banner2.png"
            alt="banner-img"
          />
        </div>
      </div>
    </div>

    </>
  );
};

export default Banner;
