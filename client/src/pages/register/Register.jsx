import "./register.scss";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {auth} from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";


const Register = () => {

  const [data,setData] = useState()
  console.log(data)

  const navigate = useNavigate()

  const [form,setForm] = useState({
    name:"",
    surname:"",
    email:"",
    password:"",
  })

  useEffect(()=>{
    const getData = async ()=>{
      await axios.get("http://localhost:3000/register").catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      }).then((res)=>setData(res.data.photos))
    }
    getData()
  },[])

  const handleChange = (e)=>{

    setForm((prev)=>({...prev, [e.target.name]:e.target.value}))
    console.log(form)
  }

  const onSubmit = ()=>{
    createUserWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      navigate("/login")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    
  }

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
                <input required type="text" name="name" onChange={handleChange}/>
              </div>
              <div className="formItem">
                <label>Soyad</label>
                <input required type="text" name="surname" onChange={handleChange}/>
              </div>
            </div>
            <div className="formItem">
              <label>E-Posta</label>
              <input required type="email" name="email" onChange={handleChange}/>
            </div>
            <div className="formItem">
              <label>Şifre</label>
              <input required type="password" name="password" onChange={handleChange}/>
            </div>
            <button className="formButton" type="submit" onClick={onSubmit}>Hesap oluştur</button>
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
