// import Banner from "../../Components/Banner/Banner";
// import Price from "../../Components/Price/Price";
// import Blogs from "../../Components/Blogs/Blogs";
// import Target from "../../Components/Target/Target";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { Outlet, useNavigation } from "react-router-dom";


const Home = () => {
  const navigationi = useNavigation()

  return (
    <>
      <Header></Header>
      {
        navigationi.state === 'loading' ? 
        <h2 className="text-5xl text-red-500" >loading.....</h2> 
        : <Outlet/>
      }
      <Footer></Footer>
    </>
  );
};

export default Home;
