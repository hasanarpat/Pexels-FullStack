import "./footer.scss";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import AppleIcon from "@mui/icons-material/Apple";
import AdbIcon from "@mui/icons-material/Adb";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="col">
            <h2>
              Yetenekli içerik üreticiler tarafından paylaşılan ücretsiz
              fotoğraf ve videolar.
            </h2>
            <span>Uygulamalarımızdan indirin.</span>
            <div className="buttons">
              <button>
                <AppleIcon />
                iOS
              </button>
              <button>
                <AdbIcon />
                Android
              </button>
            </div>
            <div className="icons">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <PinterestIcon />
            </div>
          </div>
          <div className="col">
            <h2>Pexels</h2>
            <ul>
              <li>
                <Link to="#" className="link">
                  Ücretsiz Stok
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Fotoğraflar
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Ücretsiz Videolar
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Popüler aramalar
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Koleksiyonlar
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Yarışmalar
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Lider Sıralaması
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Diğer eklentiler ve uygulamalar
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2>Şirket</h2>
            <ul>
              <li>
                <Link to="#" className="link">
                  Hakkında
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  SSS
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Kahraman olun
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Pexels'la Ortaklık
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Yapın
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Görsel ve Video API'si
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
          <h2>Ücretsiz Stok Fotoğraflar</h2>
            <ul>
              <li>
                <Link to="#" className="link">
                  Siyah beyaz footğraflar
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Doğum günü görselleri
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  ücretsiz işletme videoları
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Yeni yıl görselleri
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  En iyi HD duvar kağıtları
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Galaksi duvar kağıtları
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Kilit ekranı duvar kağıtları
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  iPhone duvar kağıdı
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  4K duvar kağıtları
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Samsung duvar kağıtları
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Aşk duvar kağıdı
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Mobil duvar kağıdı
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <span className="pexel">© 2023 Pexels</span>
          <div className="certificates">
            <Link to="#" className="link">
              <span>Kullanım Koşulları</span>
            </Link>
            <Link to="#" className="link">
              <span>Gizlilik Politikası</span>
            </Link>
            <Link to="#" className="link">
              <span>Lisans</span>
            </Link>
            <Link to="#" className="link">
              <span>
                <span>Şirket Bilgileri</span>
                <span>Çerez Politikası</span>
              </span>
            </Link>
          </div>
          <button>
            <LanguageIcon />
            Türkçe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
