import "./onboarding.scss";
import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <div className="onboarding">
      <div className="container">
        <h1>Tam olarak ne yapmak istiyorsunuz?</h1>
        <div className="row">
          <div className="col">
            <img
              alt=""
              src="https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=360&w=712"
            />
            <span>Ücretsiz fotoğraflar ve videolar indirmek istiyorum.</span>

            <button>
              <Link to="/register" className="link">İndirmek istiyorum</Link>
            </button>
          </div>
          <div className="col">
            <img
              alt=""
              src="https://images.pexels.com/photos/3584930/pexels-photo-3584930.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=360&w=712"
            />
            <span>
              Fotoğraflarımı ve videolarımı tüm dünyayla paylaşmak istiyorum.
            </span>
            <button>Katkıda bulunmak istiyorum</button>
          </div>
        </div>
        <p>
          Bu bilgiyi deneyiminizi kişisel hale getirmek için kullanacağız. Hangi
          seçeneği belirlediğiniz hiç fark etmiyor, her zaman fotoğraf ve video
          indirip yükleyebilirsiniz.
        </p>
      </div>
    </div>
  );
};

export default Onboarding;
