import "./welcome.scss";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="container">
        <div className="bg"></div>
        <h1>
          İçerik üreticiler tarafından paylaşılan en iyi ücretsiz stok
          fotoğraflar, telifsiz görseller ve videolar.
        </h1>
        <div className="searchBar">
          <div className="left">
            <ImageOutlinedIcon className="imgIcon" />
            <span>Fotoğraflar</span>
            <ArrowDropDownIcon className="dropDown" />
          </div>
          <div className="right">
            <input type="text" placeholder="Ücretsiz Fotoğraf arayın" />
            <button>
              <SearchIcon />
            </button>
            <div className={`result ${open && "open"}`}></div>
          </div>
        </div>
        <p>
          <span>Yükseliştekiler: </span>
          <Link to="#" className="link">
            teknoloji,
          </Link>
          <Link to="#" className="link">
            doğa,
          </Link>
          <Link to="#" className="link">
            orman
          ,
          </Link>
          <Link to="#" className="link">
            uzay
          ,
          </Link>
          <Link to="#" className="link">
            Çiçekler
          </Link>{" "}
          <MoreHorizOutlinedIcon className="moreIcon" />
        </p>
        <p className="artist"><span>Fotoğrafçı</span> Helena Jankovičová Kováčová</p>
      </div>
    </div>
  );
};

export default Welcome;
