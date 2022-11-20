import "../css/Congrats.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Congrats() {
  const sessionCheckJson = {
    token: localStorage.getItem("login-token"),
    name: localStorage.getItem("login-name")
  };
  const navigate = useNavigate();

  async function session_check_api(sessionChkreqJson) {
    try {
      const response = await axios.post(
        "/api/session-check",
        JSON.stringify(sessionChkreqJson),
        {
          headers: {
            "Content-Type": `application/json`
          }
        }
      );

      if (response["data"]["session"] === "deactive") {
        console.log("You need to login in!");
        navigate("/");
      }

      
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    session_check_api(sessionCheckJson);
  }, []);

  //-----------세션 체크 완료------------------

  const [URLs, setURLs] = useState("");

  useEffect(() => {
    axios
      .get("/api/congrats-videos")
      .then(function (response) {
        setURLs(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  
  var prime_w=500, prime_h=250;
  var second_w=450, second_h=250;
  if(window.matchMedia("(max-width:768px)").matches) {
    prime_w=second_w=400;
    prime_h=second_h=200;
  }
  var p_src=URLs.president+"#t=0.5";
  var sw_src=URLs.sw_dean+"#t=0.5";
  var ds_src=URLs.ds_dean+"#t=0.5";

  return (
    <div className="Congrats">
      <div className="CongratsWrapper">
        <div className="first">
          <span className="warning">* 영상 로딩이 완료될 때까지 조금만 기다려주세요. </span>
          <br/>
          <p>총장님</p>
          <video controls preload="metadata" autoplay muted playsInline width={prime_w} height={prime_h} src={p_src} title="President Congrats" ></video>
        </div>      
        <div className="second" id="second">
          <p id="sw">SW융합대학장님</p>
          <video controls preload="metadata" autoplay muted playsInline width={second_w} height={second_h} src={sw_src} title="SW dean Congrats"></video>
        </div>
        <div className="second">
          <p>
            DS교육센터장
            <br />
            /학부대학장님
          </p>
          <video controls preload="metadata" autoplay muted playsInline width={second_w} height={second_h} src={ds_src} title="DS dean Congrats"></video> 
        </div>
      </div>
    </div>
  );
}

export default Congrats;
