import Footer from "../components/core/Footer/Index";
import Announcement from "../components/core/Home/Announcement";
import Grampradhan from "../components/core/Home/Grampradhan";
import ImageSwiper from "../components/core/Home/Swiper";
import VillageInfo from "../components/core/Home/VillageInfo";

import Welcome from "../components/core/Home/Welcome";
import { landingImages } from "../data/home";

const Home = () => {
  return (
    <section className="Home">
      <ImageSwiper data={landingImages}/>
      <Welcome />
      <VillageInfo />
      <Grampradhan />
      <Announcement/>
      <Footer/>
    </section>
  );
};

export default Home;
