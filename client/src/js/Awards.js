import "../css/Awards.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect} from "react";

function Awards() {
  const sessionCheckJson = {
    token: sessionStorage.getItem("login-token"),
    name: sessionStorage.getItem("login-name")
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

  return (
    <div className="Awards">
      <div className="AwardsWrapper">
        <h1 data-heading="12.2 Coming Soon">
          <span>12.2</span>
          <br />
          Coming Soon
        </h1>
      </div>
    </div>
  );
}

export default Awards;
