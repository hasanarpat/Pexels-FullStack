import Gallery from "../../components/gallery/Gallery";
import HomeSelect from "../../components/homeSelect/HomeSelect";
import Welcome from "../../components/welcome/Welcome";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
    <Welcome/>
    <HomeSelect/>
    <Gallery/>
    </div>
  );
};

export default Home;
