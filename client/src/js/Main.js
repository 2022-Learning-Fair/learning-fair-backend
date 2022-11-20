import React from "react";
import WordCloud from "./WordCloud";
import "../css/Main.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function Main() {
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
    <div className="WordCloudPage">
      <WordCloud />
    </div>
  );
}

export default Main;
