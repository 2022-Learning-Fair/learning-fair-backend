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

  return (
    <div className="Congrats">
      <div className="CongratsWrapper">
        <div className="first">
          <p>총장님</p>
          <embed
            type="video/webm"
            src={URLs.sw_dean}
            width="500"
            height="250"
          />
        </div>
        <div className="second" id="second">
          <p id="sw">SW융합대학장님</p>
          <embed
            type="video/webm"
            src={URLs.president}
            width="450"
            height="250"
          />
        </div>
        <div className="second">
          <p>
            DS교육센터장
            <br />
            /학부대학장님
          </p>
          <embed
            type="video/webm"
            src={URLs.ds_dean}
            width="450"
            height="250"
          />
        </div>
      </div>
    </div>
  );
}

export default Congrats;
