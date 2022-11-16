import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../css/Project.scss";
import axios from "axios";
import YouTube from "react-youtube";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Project() {
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


    const loginCheckJson = {
        token: localStorage.getItem("login-token"),
        name: localStorage.getItem("login-name")
    };

  const project = useRef("");
  const [like_show, setLike] = useState(0);
  const click = useRef(false);

  async function project_info_api(projectInfoReqJson) {
    try {
      const response = await axios.post(
        "/api/project-info",
        JSON.stringify(projectInfoReqJson),
        {
          headers: {
            "Content-Type": `application/json`
          }
        }
      );
      const data = response.data;
      project.current = {
        class_name: data.class_name,
        team_number: data.team_number,
        team_name: data.team_name,

        project_name: data.project_name,
        team_member: data.team_member,

        project_pdf_url: data.project_pdf_url,
        project_youtube_url: data.project_youtube_url.slice(-11),

        hashtag_main: data.hashtag_main,
        hashtag_custom_a: data.hashtag_custom_a,
        hashtag_custom_b: data.hashtag_custom_b,
        hashtag_custom_c: data.hashtag_custom_c,

        like_cnt: data.like_cnt
      };
      setLike(project.current.like_cnt);
      click.current = false;
      console.log(click.current, like_show);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleOnclick(loginCheckreqJson) {
    try {
      const response = await axios.post(
        `/api/project/${project_id}/like`,
        JSON.stringify(loginCheckreqJson),
        {
          headers: {
            "Content-Type": `application/json`
          }
        }
      );

      if (response["data"]["likeinfo"] === "session-out") {
        console.log("You need to login in!");
        navigate("/");
      }
      else{
        const likeInfo = response.data.likeinfo;
        click.current = likeInfo.isClicked;
        setLike(likeInfo.like_cnt);
        console.log(likeInfo, like_show, click.current);
      }
    } catch (e) {
      console.log(e);
    }
  }

  const project_id = useParams().projectId;
  useEffect(() => {
    project_info_api({ project_id });
  }, [project_id]);

  return (
    <div className="Project">
      <div className="ProjectInfo">
        <h2>{project.current.project_name}</h2>
        <p id="ProjectMember">{project.current.team_member}</p>
        <div className="ProjectInfoWrapper">
          <button
            id="ProjectLike"
            onClick={()=>{handleOnclick(loginCheckJson)}}
            className={`${click.current ? "" : "NoneClick"}`}
          >
            <div>
              <span className="material-symbols-outlined">favorite</span>
              {like_show}
            </div>
          </button>
          <p id="ProjectHashtag">
            <span>#{project.current.hashtag_main}</span>
            <span>#{project.current.hashtag_custom_a}</span>
            <span>#{project.current.hashtag_custom_b}</span>
            <span>#{project.current.hashtag_custom_c}</span>
          </p>
        </div>
      </div>
      <div className="ProjectContentWrapper">
        <div className="ProjectContent" id="ProjectYoutube">
          <p>YouTube</p>
          <YouTube
            className="ProjectYoutube"
            videoId={"fEtJDkaBqyA"}
            opts={{
              playerVars: { autoplay: 1, rel: 0, modestbranding: 1 }
            }}
            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
          />
        </div>
        <div className="ProjectContent" id="ProjectPDF">
          <p>PDF</p>
          <embed
            className="ProjectPDF"
            src={project.current.project_pdf_url}
            type="application/pdf"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
