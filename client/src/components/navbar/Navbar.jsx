import "./navbar.scss";
import Logo from "../../images/Pexels_logo.png";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

const Navbar = () => {
  const { pathname, ...others } = useLocation();

  const split = pathname.split("/", pathname.length);
  const path = split[1];
  console.log(path);

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <div
      className="navbar"
      style={{
        backgroundColor: `${path === "register" ? "white" : "transparent"}`,
      }}
    >
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <img alt="logo" src={Logo} />
          </Link>
        </div>
        <div className="searchBar">
          <div className="left">
            <ImageOutlinedIcon className="imgIcon" />
            <span>Fotoğraflar</span>
            <ArrowDropDownIcon className="dropDown" />
          </div>
          <div className="right">
            <input
              type="text"
              placeholder="Ücretsiz Fotoğraf arayın"
              onChange={handleClick}
            />
            <button>
              <SearchIcon />
            </button>
            <div className={`result ${open && "open"}`}></div>
          </div>
        </div>
        <div className="links">
          <Link to="/" className="link">
            <button>
              Keşfet
              <ArrowDropDownIcon />
            </button>
          </Link>
          <Link to="/" className="link">
            <button>Lisans</button>
          </Link>
          {path === "onboarding" ? (
            <Link to="/" className="link">
              <button>Yükle</button>
            </Link>
          ) : (
            <NotificationsNoneIcon />
          )}
          {path === "onboarding" || path === "register" ? (
            <MoreHorizOutlinedIcon />
          ) : (
            <div className="user">
              <img
                src="https://images.pexels.com/photos/17037103/pexels-photo-17037103/free-photo-of-moda-insanlar-kadin-fotografcilik.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
              <ArrowDropDownIcon />
            </div>
          )}
          <button className="upload">
            <Link to="/login" className="link">
              {path === "onboarding" || path === "register"
                ? "Giriş Yap"
                : "Yükle"}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
