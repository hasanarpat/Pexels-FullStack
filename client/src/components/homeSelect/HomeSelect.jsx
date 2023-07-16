import "./homeselect.scss";
import { Link } from "react-router-dom";

const HomeSelect = () => {
    // TO DO => SELECTED BUTTON WILL BE THE BLACK BG AND WHITE TEXT
  return (
    <div className="homeselect">
      <div className="container">
          <button>
            <Link to="#" className="link">
              Ana Sayfa
            </Link>
          </button>
          <button>
            <Link to="#" className="link">
              Videolar
            </Link>
          </button>
          <button>
            <Link to="#" className="link">
              Lider Sıralaması
            </Link>
          </button>
          <button>
            <Link to="#" className="link">
              Yarışmalar
            </Link>
          </button>
      </div>
    </div>
  );
};

export default HomeSelect;
