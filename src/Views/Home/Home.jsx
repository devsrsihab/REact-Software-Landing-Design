// import Banner from "../../Components/Banner/Banner";
// import Price from "../../Components/Price/Price";
// import Blogs from "../../Components/Blogs/Blogs";
// import Target from "../../Components/Target/Target";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Outlet/>
      <Footer></Footer>
    </>
  );
};

export default Home;
