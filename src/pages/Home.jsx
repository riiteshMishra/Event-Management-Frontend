import Footer from "../components/core/Footer/Index";
import Announcement from "../components/core/Home/Announcement";
import Grampradhan from "../components/core/Home/Grampradhan";
import ImageSwiper from "../components/core/Home/Swiper";
import VillageInfo from "../components/core/Home/VillageInfo";

import Welcome from "../components/core/Home/Welcome";

const Home = () => {
  return (
    <section className="Home">
      <ImageSwiper />
      <Welcome />
      <VillageInfo />
      <Grampradhan />
      <Announcement/>
      {/* <img src="image1.jpg" className="w-100"/> */}
      <Footer/>
    </section>
  );
};

export default Home;
