import "./register.scss";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useEffect, useState } from "react";
import axios from "axios"

const Register = () => {

  const [data,setData] = useState()
  console.log(data)

  useEffect(()=>{
    const getData = async ()=>{
      await axios.get("http://localhost:3000/register").then((res)=>setData(res.data.photos))
    }
    getData()
  },[])

  return (
    <div className="register">
      <div className="row">
        <div className="left">
          <h1>12 milyon kullanıcıya katılın</h1>
          <p>
            Fotoğrafçı topluluğumuz tarafından sağlanan ücretsiz fotoğraf ve
            videoları indirin.
          </p>
          <div className="socialButtons">
            <button className="socialButton">
              <span>
                <AppleIcon />
                <span>Apple ile katıl</span>
              </span>
            </button>
            <button className="socialButton">
              <span>
                <GoogleIcon style={{ color: "crimson" }} />
                <span>Google ile katıl</span>
              </span>
            </button>
            <button className="socialButton">
              <span>
                <FacebookIcon />
                <span>Facebook ile katıl</span>
              </span>
            </button>
          </div>
          <p className="line">Veya e-posta adresinizle kaydolun</p>
          <form>
            <div className="formGroup">
              <div className="formItem">
                <label>Ad</label>
                <input required type="text" />
              </div>
              <div className="formItem">
                <label>Soyad</label>
                <input required type="text" />
              </div>
            </div>
            <div className="formItem">
              <label>E-Posta</label>
              <input required type="email" />
            </div>
            <div className="formItem">
              <label>Şifre</label>
              <input required type="password" />
            </div>
            <button className="formButton">Hesap oluştur</button>
          </form>
          <p className="services">
            Kaydolarak Hizmet Şartlarımızı ve Gizlilik Politikamızı kabul etmiş
            olursunuz.
          </p>
        </div>
        <div className="right">
          <div className="container">
            <div className="row">
            {
              data?.map((photo)=>(
                <div className="photo" key={photo.id}>
                  <img alt="" src={photo?.src?.medium}/>
                </div>
              ))
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
