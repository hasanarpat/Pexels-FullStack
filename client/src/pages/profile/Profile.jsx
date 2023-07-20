import "./profile.scss";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

const Profile = () => {
  return (
    <div className="profile">
      <div className="container">
        <div className="user">
          <img
            src="https://images.pexels.com/photos/17037103/pexels-photo-17037103/free-photo-of-moda-insanlar-kadin-fotografcilik.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <h1>Jane Doe</h1>
          <button>
            <EditOutlinedIcon />
            Profili Düzenle
          </button>
          <div className="counts">
            <div className="count">
              <span>Toplam Görüntüleme</span>
              <span>
                <b>0</b>
              </span>
            </div>
            <div className="count">
              <span>Tüm zamanlar</span>
              <span>
                <b>512,8 Bin</b>
              </span>
            </div>
            <div className="count">
              <span>Son 30 gün sıralama</span>
              <span>
                <b>21,7 Bin</b>
              </span>
            </div>
          </div>
          <div className="statistics">
            <div className="items">
              <div className="item">
                <span>Öne Çıkanlar</span>
                <span>0</span>
              </div>
              <div className="item">
                <span>Galeri</span>
                <span>0</span>
              </div>
              <div className="item">
                <span>Koleksiyonlar</span>
                <span>0</span>
              </div>
              <div className="item">
                <span>İstatistikler</span>
                <span>0</span>
              </div>
              <div className="item">
                <span>Takipçiler</span>
                <span>0</span>
              </div>
              <div className="item">
                <span>Takip Edilenler</span>
                <span>0</span>
              </div>
            </div>
            <div className="itemsBorder">
              <div className="itemBorder">
                <span>Öne Çıkanlara Ekle</span>
                <span>Yeni</span>
              </div>
              <div className="itemBorder">
                <span>Fotoğraflar ve videolar</span>
                <ArrowDropDownOutlinedIcon />
              </div>
              <div className="itemBorder">
                <span>Yükleme Tarihi</span>
                <ArrowDropDownOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <h1>
            Jane adlı kullanıcının henüz hiç fotoğraf veya videosu yok 😔
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
