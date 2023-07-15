import { useEffect, useState } from "react";
import "./login.scss";
import axios from "axios";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom"

const Login = () => {
  const [data, setData] = useState([]);

  console.log(data);

  const firstLine = [];
  const secondLine = [];
  const thirdLine = [];
  const fourthLine = [];
  const fifthLine = [];
  const sixthLine = [];
  const seventhLine = [];

  const splitData = () => {
    for (let i = 0; i < 21; i++) {
      if (i >= 0 && i < 3) {
        firstLine.push(data[i]);
      }
      if (i >= 3 && i < 6) {
        secondLine.push(data[i]);
      }
      if (i >= 6 && i < 9) {
        thirdLine.push(data[i]);
      }
      if (i >= 9 && i < 12) {
        fourthLine.push(data[i]);
      }
      if (i >= 12 && i < 15) {
        fifthLine.push(data[i]);
      }
      if (i >= 15 && i < 18) {
        sixthLine.push(data[i]);
      }
      if (i >= 18 && i < 21) {
        seventhLine.push(data[i]);
      }
    }
    console.log("///////////////");
    console.log(firstLine);
    console.log(secondLine);
    console.log(thirdLine);
    console.log(fourthLine);
    console.log(fifthLine);
    console.log(sixthLine);
    console.log(seventhLine);
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:3000/register")
        .then((res) => setData(res.data.photos));
    };
    fetchData();
    
  }, []);
  data.length > 0 && splitData();
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="colOne">
            {firstLine?.map(function (data) {
              return (
                <div className="photo" key={data.id}>
                  <img alt="" src={data.src.medium} />
                </div>
              );
            })}
          </div>
          <div className="colOne">
            {secondLine?.map(function (data) {
              return (
                <div className="photo" key={data.id}>
                  <img alt="" src={data.src.medium} />
                </div>
              );
            })}
          </div>
          <div className="colOne">
            {thirdLine?.map(function (data) {
              return (
                <div className="photo" key={data.id}>
                  <img alt="" src={data.src.medium} />
                </div>
              );
            })}
          </div>
          <div className="colOne">
            {fourthLine?.map(function (data) {
              return (
                <div className="photo" key={data.id}>
                  <img alt="" src={data.src.medium} />
                </div>
              );
            })}
          </div>
          <div className="colOne">
            {fifthLine?.map(function (data) {
              return (
                <div className="photo" key={data.id}>
                  <img alt="" src={data.src.medium} />
                </div>
              );
            })}
          </div>
          <div className="colOne">
            {sixthLine?.map(function (data) {
              return (
                <div className="photo" key={data.id}>
                  <img alt="" src={data.src.medium} />
                </div>
              );
            })}
          </div>
          <div className="colOne">
            {seventhLine?.map(function (data) {
              return (
                <div className="photo" key={data.id}>
                  <img alt="" src={data.src.medium} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="inputForm">
          <h1>Tekrar hos geldiniz.</h1>
          <div className="socialButtons">
            <button className="socialButton">
              <span>
                <AppleIcon />
                <span>Apple ile giriş yap</span>
              </span>
            </button>
            <button className="socialButton">
              <span>
                <GoogleIcon style={{ color: "crimson" }} />
                <span>Google ile giriş yap</span>
              </span>
            </button>
            <button className="socialButton">
              <span>
                <FacebookIcon />
                <span>Facebook ile giriş yap</span>
              </span>
            </button>
          </div>
          <p className="line">Veya e-posta adresinizle kaydolun</p>
          <form>
            <div className="formItem">
              <label>E-Posta</label>
              <input required type="email" />
            </div>
            <div className="formItem">
              <label>Şifre</label>
              <input required type="password" />
            </div>
            <p className="forgetPassword">Şifrenizi mi unuttunuz?</p>
            <button className="formButton"><Link to="/" className="link">Giriş yapın</Link></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
